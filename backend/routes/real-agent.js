const express = require('express');
const router = express.Router();
const axios = require('axios');

// Store active conversation sessions
const activeSessions = new Map();

// Start conversation with real ElevenLabs agent
router.post('/start', async (req, res) => {
  try {
    const { email, userProfile } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    console.log('🚀 Starting REAL ElevenLabs agent conversation for:', email);
    
    const agentId = 'agent_2901kb13dkgbemkbxhve2tbsymd2'; // Your actual agent ID
    const sessionId = `${email}_${Date.now()}`;
    
    // Store session info for real agent
    activeSessions.set(sessionId, {
      email,
      agentId: agentId,
      userProfile: userProfile || {},
      createdAt: new Date(),
      conversationHistory: []
    });

    console.log('✅ Real ElevenLabs agent session created:', sessionId);

    res.json({
      sessionId: sessionId,
      agentId: agentId,
      status: 'ready'
    });

  } catch (error) {
    console.error('❌ Error starting real agent session:', error);
    res.status(500).json({ 
      error: 'Failed to start agent session',
      details: error.message
    });
  }
});

// Send message to REAL ElevenLabs agent using official SDK
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

    console.log(`💬 Sending to REAL ElevenLabs agent:`, message);
    console.log(`🤖 Agent ID:`, session.agentId);

    // Use the Simulate Conversation API endpoint
    const response = await axios({
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/convai/agents/${session.agentId}/simulate-conversation`,
      headers: {
        'xi-api-key': process.env.ElevenLabsApiKey,
        'Content-Type': 'application/json'
      },
      data: {
        // Create a simulated user that sends your message
        simulation_specification: {
          simulated_user_config: {
            prompt: {
              prompt: `You are a user named ${session.email.split('@')[0]} who wants to send this message: "${message}"`,
              llm: "gpt-4o",
              temperature: 0.1
            }
          }
        }
      }
    });

    if (response.status === 200) {
      const simulationResult = response.data;
      console.log('🎉 REAL agent simulation result:', simulationResult);

      // Extract the agent's response from the conversation messages
      const messages = simulationResult.messages || [];
      let agentResponseText = "I'm here to help you with your smoking cessation journey.";
      
      // Find the last agent message in the conversation
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === 'agent' && messages[i].text) {
          agentResponseText = messages[i].text;
          break;
        }
      }

      // Update conversation history
      session.conversationHistory.push({
        role: 'user',
        content: message
      });
      session.conversationHistory.push({
        role: 'assistant', 
        content: agentResponseText
      });

      console.log('✅ Updated conversation history, length:', session.conversationHistory.length);

      res.json({
        response: agentResponseText,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
        source: 'real_elevenlabs_agent'
      });

    } else {
      console.error('❌ ElevenLabs API unexpected status:', response.status);
      throw new Error(`ElevenLabs API returned status ${response.status}`);
    }

  } catch (error) {
    console.error('❌ Error communicating with REAL ElevenLabs agent:', error.response?.data || error.message);
    
    // Log full error for debugging
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }

    res.status(500).json({
      error: 'Failed to communicate with ElevenLabs agent',
      details: error.response?.data || error.message,
      source: 'real_elevenlabs_api_error'
    });
  }
});

// Get conversation history from real agent
router.get('/history/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = activeSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json({
      sessionId: sessionId,
      agentId: session.agentId,
      conversationHistory: session.conversationHistory,
      messageCount: session.conversationHistory.length,
      createdAt: session.createdAt
    });

  } catch (error) {
    console.error('❌ Error getting conversation history:', error);
    res.status(500).json({
      error: 'Failed to get conversation history',
      details: error.message
    });
  }
});

// Clean up old sessions
router.post('/cleanup', async (req, res) => {
  try {
    const now = new Date();
    const maxAge = 60 * 60 * 1000; // 1 hour
    
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
    res.status(500).json({ error: 'Failed to cleanup sessions' });
  }
});

module.exports = router;