const express = require('express');
const router = express.Router();
const axios = require('axios');

// Store active conversation sessions
const activeSessions = new Map();

// Start conversation with ElevenLabs agent
router.post('/start', async (req, res) => {
  try {
    const { email, userProfile } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    console.log('🚀 Starting ElevenLabs agent conversation for:', email);
    
    const agentId = 'agent_2901kb13dkgbemkbxhve2tbsymd2'; // Your agent ID
    
    // Create conversation with ElevenLabs agent
    const response = await axios({
      method: 'POST',
      url: 'https://api.elevenlabs.io/v1/convai/conversations',
      headers: {
        'xi-api-key': process.env.ElevenLabsApiKey,
        'Content-Type': 'application/json'
      },
      data: {
        agent_id: agentId,
        // Pass user context as session variables if supported
        session_config: {
          user_email: email,
          user_profile: userProfile
        }
      }
    });

    if (response.status === 200 || response.status === 201) {
      const conversationData = response.data;
      const sessionId = `${email}_${Date.now()}`;
      
      // Store session info
      activeSessions.set(sessionId, {
        email,
        conversationId: conversationData.conversation_id || conversationData.id,
        agentId: agentId,
        createdAt: new Date()
      });

      console.log('✅ ElevenLabs conversation created:', conversationData.conversation_id || conversationData.id);

      res.json({
        sessionId: sessionId,
        conversationId: conversationData.conversation_id || conversationData.id,
        status: 'ready'
      });
    } else {
      throw new Error('Failed to create conversation');
    }

  } catch (error) {
    console.error('❌ Error starting agent conversation:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to start conversation with agent',
      details: error.response?.data || error.message
    });
  }
});

// Send message to ElevenLabs agent
router.post('/message', async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    
    if (!sessionId || !message) {
      return res.status(400).json({ error: 'Session ID and message are required' });
    }

    const session = activeSessions.get(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    console.log(`💬 Sending message to agent:`, message);

    // Send message to ElevenLabs conversation
    const response = await axios({
      method: 'POST', 
      url: `https://api.elevenlabs.io/v1/convai/conversations/${session.conversationId}/add_user_message`,
      headers: {
        'xi-api-key': process.env.ElevenLabsApiKey,
        'Content-Type': 'application/json'
      },
      data: {
        message: message
      }
    });

    if (response.status === 200) {
      const responseData = response.data;
      
      console.log('🤖 Agent response received');

      res.json({
        response: responseData.agent_response || responseData.message || responseData.text,
        audio_url: responseData.audio_url || responseData.audio_response_url,
        sessionId: sessionId,
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error('Failed to get agent response');
    }

  } catch (error) {
    console.error('❌ Error sending message to agent:', error.response?.data || error.message);
    
    // Return error response
    res.status(500).json({
      error: 'Failed to communicate with agent',
      details: error.response?.data || error.message
    });
  }
});

// Alternative endpoint structure (try different API paths)
router.post('/message-alt', async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    
    const session = activeSessions.get(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Try alternative endpoint structure
    const response = await axios({
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/convai/agents/${session.agentId}/conversations/${session.conversationId}/messages`,
      headers: {
        'xi-api-key': process.env.ElevenLabsApiKey,
        'Content-Type': 'application/json'
      },
      data: {
        text: message,
        message: message
      }
    });

    const responseData = response.data;
    
    res.json({
      response: responseData.response || responseData.text || responseData.agent_response,
      audio_url: responseData.audio_url,
      sessionId: sessionId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Alternative endpoint error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Agent communication failed',
      details: error.response?.data || error.message
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

    const response = await axios({
      method: 'GET',
      url: `https://api.elevenlabs.io/v1/convai/conversations/${session.conversationId}`,
      headers: {
        'xi-api-key': process.env.ElevenLabsApiKey
      }
    });

    res.json({
      history: response.data.messages || [],
      sessionId: sessionId
    });

  } catch (error) {
    console.error('❌ Error getting conversation history:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to get conversation history',
      details: error.response?.data || error.message
    });
  }
});

module.exports = router;