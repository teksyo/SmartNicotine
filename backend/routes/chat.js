const express = require('express');
const router = express.Router();
const elevenLabsService = require('../services/elevenlabs');
const conversationService = require('../services/conversationService');
const supabase = require('../config/supabase');

// Store active sessions in memory (in production, use Redis or database)
const activeSessions = new Map();

// Initialize chat session with user profile
router.post('/start', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    console.log('🚀 Starting chat session for:', email);

    // Get user profile
    const { data: userProfiles, error: userError } = await supabase
      .from('typeform_submissions')
      .select('*')
      .eq('email', email.toLowerCase().trim())
      .order('created_at', { ascending: false })
      .limit(1);

    if (userError || !userProfiles || userProfiles.length === 0) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    const userProfile = userProfiles[0];

    // Get David Haye voice
    const voiceId = elevenLabsService.getDavidHayeVoiceId() || 'OrbzO5MF8to5NCMzleFX';
    console.log('🎤 Using voice ID:', voiceId);

    // Create session ID and start conversation
    const sessionId = `${email}_${Date.now()}`;
    
    // Initialize conversation with our service
    const conversationResult = await conversationService.startConversation(sessionId, userProfile);
    
    // Store session
    activeSessions.set(sessionId, {
      email,
      sessionId,
      voiceId,
      userProfile,
      createdAt: new Date()
    });

    console.log('✅ Chat session created:', sessionId);

    // Generate TTS for the initial greeting
    let audioUrl = null;
    try {
      const audioBuffer = await elevenLabsService.generateTTS(conversationResult.message, voiceId);
      if (audioBuffer) {
        // For now, we'll handle audio differently - the frontend will request it
        console.log('🔊 TTS generated for greeting');
      }
    } catch (ttsError) {
      console.warn('⚠️ TTS generation failed for greeting:', ttsError.message);
    }

    res.json({
      sessionId,
      voiceId,
      status: 'ready',
      initialMessage: conversationResult.message,
      audioUrl // Will be null for now
    });

  } catch (error) {
    console.error('❌ Error starting chat session:', error);
    res.status(500).json({ 
      error: 'Failed to start chat session', 
      details: error.message 
    });
  }
});

// Send message and get response
router.post('/message', async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    
    if (!sessionId || !message) {
      return res.status(400).json({ error: 'SessionId and message are required' });
    }

    const session = activeSessions.get(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    console.log(`💬 Sending message in session ${sessionId}:`, message);

    // Send message to conversation service
    const conversationResponse = await conversationService.sendMessage(sessionId, message);
    
    console.log('🤖 Generated response:', conversationResponse.message);

    // Generate TTS for the response
    let audioUrl = null;
    try {
      const audioBuffer = await elevenLabsService.generateTTS(conversationResponse.message, session.voiceId);
      if (audioBuffer) {
        // In a real implementation, you'd save this to a file server and return URL
        // For now, we'll return a placeholder
        console.log('🔊 TTS generated for response');
        // audioUrl = 'data:audio/mpeg;base64,' + audioBuffer.toString('base64');
      }
    } catch (ttsError) {
      console.warn('⚠️ TTS generation failed:', ttsError.message);
    }

    res.json({
      response: conversationResponse.message,
      audioUrl: audioUrl,
      sessionId: sessionId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error processing message:', error);
    res.status(500).json({ 
      error: 'Failed to process message', 
      details: error.message 
    });
  }
});

// Get conversation history
router.get('/history/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const session = activeSessions.get(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    const history = await elevenLabsService.getConversationHistory(session.conversationId);
    
    res.json({
      sessionId,
      history: history.messages || [],
      userProfile: {
        email: session.email,
        answers: session.userProfile.answers
      }
    });

  } catch (error) {
    console.error('❌ Error getting conversation history:', error);
    res.status(500).json({ 
      error: 'Failed to get conversation history', 
      details: error.message 
    });
  }
});

// Test ElevenLabs connection and explore API
router.get('/test', async (req, res) => {
  try {
    console.log('🧪 Testing ElevenLabs API connection...');
    
    // Test basic voice API
    const voices = await elevenLabsService.getVoices();
    const davidHaye = await elevenLabsService.findDavidHayeVoice();
    
    // Test if conversational AI endpoint exists differently
    const axios = require('axios');
    const headers = {
      'Accept': 'application/json',
      'xi-api-key': process.env.ElevenLabsApiKey
    };
    
    let convaiStatus = 'unknown';
    try {
      // Try to get available conversational AI endpoints
      const convaiResponse = await axios.get('https://api.elevenlabs.io/v1/convai/agents', { headers });
      convaiStatus = 'available';
    } catch (convaiError) {
      convaiStatus = `error: ${convaiError.response?.status} - ${convaiError.response?.statusText}`;
      console.log('ConvAI API test result:', convaiError.response?.status, convaiError.response?.data);
    }
    
    res.json({
      connected: true,
      voiceCount: voices.voices?.length || 0,
      davidHayeVoiceId: davidHaye,
      convaiStatus: convaiStatus,
      availableVoices: voices.voices?.slice(0, 5).map(v => ({
        name: v.name,
        voice_id: v.voice_id,
        category: v.category
      })) || []
    });
  } catch (error) {
    console.error('❌ Error testing ElevenLabs:', error);
    res.status(500).json({ 
      connected: false,
      error: error.message 
    });
  }
});

// Clean up old sessions (run periodically)
router.post('/cleanup', async (req, res) => {
  try {
    const now = new Date();
    const maxAge = 30 * 60 * 1000; // 30 minutes
    
    let cleaned = 0;
    for (const [sessionId, session] of activeSessions.entries()) {
      if (now - session.createdAt > maxAge) {
        activeSessions.delete(sessionId);
        cleaned++;
      }
    }
    
    res.json({
      message: `Cleaned up ${cleaned} old sessions`,
      activeSessions: activeSessions.size
    });
  } catch (error) {
    console.error('❌ Error cleaning up sessions:', error);
    res.status(500).json({ error: 'Failed to cleanup sessions' });
  }
});

module.exports = router;