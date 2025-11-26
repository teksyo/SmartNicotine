const axios = require('axios');

const ELEVENLABS_API_KEY = process.env.ElevenLabsApiKey;
const ELEVENLABS_API_BASE = 'https://api.elevenlabs.io/v1';

class ElevenLabsService {
  constructor() {
    this.apiKey = ELEVENLABS_API_KEY;
    this.headers = {
      'Accept': 'application/json',
      'xi-api-key': this.apiKey,
      'Content-Type': 'application/json'
    };
  }

  // Get all available voices
  async getVoices() {
    try {
      const response = await axios.get(`${ELEVENLABS_API_BASE}/voices`, {
        headers: this.headers
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching voices:', error.response?.data || error.message);
      throw error;
    }
  }

  // Get David Haye voice ID
  getDavidHayeVoiceId() {
    const voiceId = process.env.DAVID_HAYE_VOICE_ID;
    if (!voiceId) {
      console.warn('DAVID_HAYE_VOICE_ID not set in environment variables');
      return null;
    }
    console.log('Using David Haye voice ID:', voiceId);
    return voiceId;
  }

  // Find David Haye voice or suggest alternatives
  async findDavidHayeVoice() {
    try {
      // First try to use the configured voice ID
      const configuredVoiceId = this.getDavidHayeVoiceId();
      if (configuredVoiceId) {
        return configuredVoiceId;
      }

      // Fallback: search through available voices
      const voices = await this.getVoices();
      console.log('Available voices:', voices.voices?.map(v => ({ name: v.name, voice_id: v.voice_id })) || []);
      
      // Look for David Haye voice (case insensitive)
      const davidHaye = voices.voices?.find(voice => 
        voice.name.toLowerCase().includes('david') && voice.name.toLowerCase().includes('haye')
      );
      
      if (davidHaye) {
        console.log('Found David Haye voice:', davidHaye);
        return davidHaye.voice_id;
      }
      
      // If no David Haye voice, suggest alternatives
      console.log('David Haye voice not found. Available voices:');
      voices.voices?.forEach(voice => {
        console.log(`- ${voice.name} (${voice.voice_id})`);
      });
      
      return null;
    } catch (error) {
      console.error('Error finding David Haye voice:', error.message);
      throw error;
    }
  }

  // Create conversational agent
  async createAgent(voiceId, userProfile) {
    const systemPrompt = this.createSystemPrompt(userProfile);
    
    try {
      const response = await axios.post(`${ELEVENLABS_API_BASE}/convai/agents`, {
        name: "Smart Nicotine AI Guide - David Haye",
        conversation_config: {
          agent: {
            prompt: {
              prompt: systemPrompt
            },
            first_message: "Hello! I'm David Haye, and I'm here to help you on your journey to quit smoking. I've reviewed your assessment, and I believe you have the strength to overcome this challenge. How are you feeling today?",
            language: "en"
          },
          conversation: {
            max_duration: 1800, // 30 minutes
          },
          tts: {
            voice_id: voiceId,
            model: "eleven_turbo_v2_5",
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.1,
            use_speaker_boost: true
          }
        }
      }, {
        headers: this.headers
      });
      
      console.log('Created agent:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating agent:', error.response?.data || error.message);
      throw error;
    }
  }

  // Create system prompt based on user profile
  createSystemPrompt(userProfile) {
    const answers = userProfile.answers || {};
    
    return `You are David Haye, the legendary British boxer and champion. You're now working as a smoking cessation coach, using your experience of discipline, mental toughness, and overcoming challenges to help people quit smoking.

IMPORTANT PERSONALITY TRAITS:
- Speak with confidence and authority, but warmly and supportively
- Use boxing/sports metaphors naturally (but don't overdo it)
- Be encouraging and motivational, like a champion coach
- Show empathy - acknowledge that quitting is tough, just like training for a big fight
- Be direct and honest, but always supportive
- Reference your boxing career occasionally when relevant

USER'S SMOKING PROFILE:
- Cigarettes per day: ${answers['On average, how many cigarettes do you smoke per day?'] || 'Unknown'}
- Smoking duration: ${answers['How long have you smoked cigarettes?'] || 'Unknown'}
- Previous quit attempts: ${answers['How many times have you seriously tried to quit smoking?'] || 'Unknown'}
- Main motivation: ${answers['What is your main motivation for wanting to quit smoking?'] || 'Unknown'}
- Preferred brand: ${answers['What is your preferred cigarette brand?'] || 'Unknown'}

CONVERSATION STYLE:
- Keep responses conversational and under 100 words typically
- Ask follow-up questions to keep them engaged
- Provide specific, actionable advice
- Share relevant experiences from your boxing career when appropriate
- Be the supportive champion they need in their corner

Remember: You're here to help them win the biggest fight of their life - the fight against smoking addiction. Just like in boxing, it's about mental strength, discipline, and having the right strategy.`;
  }

  // Start conversation with agent
  async startConversation(agentId) {
    try {
      const response = await axios.post(`${ELEVENLABS_API_BASE}/convai/agents/${agentId}/conversations`, {}, {
        headers: this.headers
      });
      
      console.log('Started conversation:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error starting conversation:', error.response?.data || error.message);
      throw error;
    }
  }

  // Send message to conversation
  async sendMessage(conversationId, message) {
    try {
      const response = await axios.post(`${ELEVENLABS_API_BASE}/convai/conversations/${conversationId}`, {
        text: message
      }, {
        headers: this.headers
      });
      
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
      throw error;
    }
  }

  // Get conversation history
  async getConversationHistory(conversationId) {
    try {
      const response = await axios.get(`${ELEVENLABS_API_BASE}/convai/conversations/${conversationId}`, {
        headers: this.headers
      });
      
      return response.data;
    } catch (error) {
      console.error('Error getting conversation history:', error.response?.data || error.message);
      throw error;
    }
  }

  // Generate TTS for standalone text
  async generateTTS(text, voiceId) {
    try {
      const response = await axios.post(`${ELEVENLABS_API_BASE}/text-to-speech/${voiceId}`, {
        text,
        model_id: "eleven_turbo_v2_5",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.1,
          use_speaker_boost: true
        }
      }, {
        headers: {
          ...this.headers,
          'Accept': 'audio/mpeg'
        },
        responseType: 'arraybuffer'
      });
      
      return response.data;
    } catch (error) {
      console.error('Error generating TTS:', error.response?.data || error.message);
      throw error;
    }
  }
}

module.exports = new ElevenLabsService();