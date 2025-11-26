const { OpenAI } = require('openai');
const elevenLabsService = require('./elevenlabs');

class ConversationService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy-key' // We'll use dummy key for now
    });
    this.conversations = new Map(); // Store conversation history
  }

  // Create David Haye persona prompt
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

  // Initialize conversation session
  async startConversation(sessionId, userProfile) {
    const systemPrompt = this.createSystemPrompt(userProfile);
    
    const conversation = {
      sessionId,
      userProfile,
      messages: [
        { role: 'system', content: systemPrompt }
      ],
      createdAt: new Date()
    };
    
    this.conversations.set(sessionId, conversation);
    
    // Return initial greeting
    const greeting = this.getPersonalizedGreeting(userProfile);
    
    // Add greeting to conversation history
    conversation.messages.push({ role: 'assistant', content: greeting });
    
    return {
      message: greeting,
      sessionId
    };
  }

  // Get personalized greeting based on user profile
  getPersonalizedGreeting(userProfile) {
    const answers = userProfile.answers || {};
    const motivation = answers['What is your main motivation for wanting to quit smoking?'] || '';
    const attempts = answers['How many times have you seriously tried to quit smoking?'] || '';
    
    let greeting = "Hello! I'm David Haye, and I'm here to help you on your journey to quit smoking.";
    
    if (motivation.toLowerCase().includes('fitness') || motivation.toLowerCase().includes('sport')) {
      greeting += " I see you're motivated by fitness - that's fantastic! As a boxer, I know how much smoking can hold back your athletic potential.";
    } else if (motivation.toLowerCase().includes('health')) {
      greeting += " Your health motivation shows real wisdom. In boxing, we learned that every choice impacts performance - and quitting smoking is one of the best choices you can make.";
    } else if (motivation.toLowerCase().includes('family')) {
      greeting += " Being motivated by your family shows incredible strength. That's the kind of fighting spirit that wins championships.";
    }
    
    if (attempts && attempts !== 'Never') {
      greeting += " I know you've tried before - that doesn't mean failure, it means experience. Every champion faces setbacks before the victory.";
    }
    
    greeting += " How are you feeling about this journey today?";
    
    return greeting;
  }

  // Send message and get response
  async sendMessage(sessionId, userMessage) {
    try {
      const conversation = this.conversations.get(sessionId);
      if (!conversation) {
        throw new Error('Conversation not found');
      }

      // Add user message to history
      conversation.messages.push({ role: 'user', content: userMessage });

      // For now, let's use a rule-based response system instead of OpenAI
      // This avoids API key requirements while still providing good responses
      const response = this.generateDavidHayeResponse(userMessage, conversation);
      
      // Add response to history
      conversation.messages.push({ role: 'assistant', content: response });

      return {
        message: response,
        sessionId
      };

    } catch (error) {
      console.error('Error in conversation:', error);
      
      // Fallback response in David Haye's style
      return {
        message: "I hear you, and I'm here to support you. Every champion faces tough moments - what's important is we keep moving forward together. What's your biggest concern right now?",
        sessionId
      };
    }
  }

  // Generate David Haye-style responses (rule-based system)
  generateDavidHayeResponse(userMessage, conversation) {
    const userProfile = conversation.userProfile;
    const answers = userProfile.answers || {};
    const messageText = userMessage.toLowerCase();
    
    // Analyze user message for keywords and context
    if (messageText.includes('feeling') && (messageText.includes('good') || messageText.includes('great') || messageText.includes('fine'))) {
      return "That's fantastic! A positive mindset is like having a strong foundation in boxing - everything builds from there. What's been helping you stay motivated?";
    }
    
    if (messageText.includes('scared') || messageText.includes('afraid') || messageText.includes('nervous') || messageText.includes('worried')) {
      return "I understand that fear - it's completely normal. You know, before every big fight, I had nerves too. But fear can be fuel if we use it right. What specific part worries you most?";
    }
    
    if (messageText.includes('craving') || messageText.includes('want to smoke') || messageText.includes('urge')) {
      return "Those cravings are like an opponent throwing punches - they feel strong, but they pass. Try the 4-7-8 breathing: breathe in for 4, hold for 7, out for 8. It's like my pre-fight breathing routine. How long do your cravings usually last?";
    }
    
    if (messageText.includes('trigger') || messageText.includes('stress') || messageText.includes('work') || messageText.includes('pressure')) {
      return "Stress triggers are tough - like facing a southpaw when you're used to orthodox fighters. The key is having a game plan ready. What situations trigger you most? Let's build your strategy.";
    }
    
    if (messageText.includes('failed') || messageText.includes('relapse') || messageText.includes('smoked again')) {
      return "Listen, every champion has been knocked down. What matters is getting back up. Muhammad Ali lost fights but became the greatest. One slip doesn't erase your progress. What happened? Let's learn from it.";
    }
    
    if (messageText.includes('progress') || messageText.includes('better') || messageText.includes('improvement')) {
      return "Yes! That's the champion mentality I love to hear. Progress in quitting smoking is like boxing training - some days are harder than others, but consistency wins fights. What's been your biggest win so far?";
    }
    
    if (messageText.includes('how long') || messageText.includes('when will')) {
      return "Great question! In boxing, we don't ask when the fight will end - we focus on winning each round. For smoking, the physical cravings peak in 3 days, but real strength builds over weeks. Are you tracking your smoke-free time?";
    }
    
    if (messageText.includes('advice') || messageText.includes('help') || messageText.includes('what should')) {
      const dailyCigs = answers['On average, how many cigarettes do you smoke per day?'] || '';
      if (dailyCigs.includes('25') || dailyCigs.includes('20')) {
        return "With your smoking level, I'd suggest the gradual reduction approach - like cutting weight for a fight. Reduce by 3-4 cigarettes every few days. What time of day do you smoke most?";
      }
      return "Here's my champion's advice: Start by identifying your top 3 smoking triggers, then have a replacement ready for each. Like having different boxing combinations ready. What's your strongest trigger?";
    }
    
    // Default encouraging responses
    const defaultResponses = [
      "I'm here in your corner, champion. Tell me more about what you're experiencing.",
      "That takes courage to share. In boxing, we face our challenges head-on - and that's what you're doing. What's your next move?",
      "I hear the determination in your words. That's the fighting spirit! How can I best support you right now?",
      "Every champion's journey is unique. You're building mental toughness with every smoke-free moment. What's been your biggest challenge so far?",
      "You know, the strongest fighters are the ones who keep going even when it's tough. That's you right now. What's keeping you motivated?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  // Get conversation history
  getConversationHistory(sessionId) {
    const conversation = this.conversations.get(sessionId);
    return conversation ? conversation.messages.filter(msg => msg.role !== 'system') : [];
  }

  // Generate TTS for response
  async generateTTS(text, voiceId) {
    try {
      return await elevenLabsService.generateTTS(text, voiceId);
    } catch (error) {
      console.error('TTS generation failed:', error);
      return null;
    }
  }

  // Clean up old conversations
  cleanup() {
    const now = new Date();
    const maxAge = 30 * 60 * 1000; // 30 minutes
    
    for (const [sessionId, conversation] of this.conversations.entries()) {
      if (now - conversation.createdAt > maxAge) {
        this.conversations.delete(sessionId);
      }
    }
  }
}

module.exports = new ConversationService();