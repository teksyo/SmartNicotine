const express = require('express');
const router = express.Router();
const axios = require('axios');

// Generate TTS using ElevenLabs
router.post('/', async (req, res) => {
  try {
    const { text, voice_id } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const voiceId = voice_id || process.env.DAVID_HAYE_VOICE_ID || 'OrbzO5MF8to5NCMzleFX';
    
    console.log('🎤 Generating TTS for:', text.substring(0, 50) + '...');
    console.log('🎙️ Using voice ID:', voiceId);

    const response = await axios({
      method: 'POST',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': process.env.ElevenLabsApiKey,
        'Content-Type': 'application/json',
      },
      data: {
        text: text,
        model_id: "eleven_turbo_v2_5",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.1,
          use_speaker_boost: true
        }
      },
      responseType: 'arraybuffer'
    });

    if (response.status === 200) {
      console.log('✅ TTS generated successfully');
      
      // Set proper headers for audio
      res.set({
        'Content-Type': 'audio/mpeg',
        'Content-Length': response.data.length
      });
      
      res.send(response.data);
    } else {
      throw new Error('ElevenLabs TTS failed');
    }

  } catch (error) {
    console.error('❌ TTS generation error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to generate speech',
      details: error.response?.data || error.message 
    });
  }
});

module.exports = router;