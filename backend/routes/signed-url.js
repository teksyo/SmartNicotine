const express = require('express');
const router = express.Router();

// Get signed URL for ElevenLabs agent conversation
router.get('/', async (req, res) => {
  try {
    console.log('🔗 Generating signed URL for agent...');
    
    const agentId = process.env.ELEVENLABS_AGENT_ID || 'agent_2901kb13dkgbemkbxhve2tbsymd2';
    const apiKey = process.env.ElevenLabsApiKey;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'ElevenLabs API key not configured' });
    }
    
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agentId}`,
      {
        headers: {
          // Requesting a signed url requires your ElevenLabs API key
          // Do NOT expose your API key to the client!
          "xi-api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Failed to get signed URL:', response.status, errorText);
      return res.status(500).json({ 
        error: 'Failed to get signed URL',
        details: errorText 
      });
    }

    const body = await response.json();
    console.log('✅ Signed URL generated successfully');
    
    // Return just the signed URL as text (matching the docs example)
    res.send(body.signed_url);
    
  } catch (error) {
    console.error('❌ Error generating signed URL:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

module.exports = router;