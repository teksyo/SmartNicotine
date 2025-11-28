const express = require('express');
const router = express.Router();
const axios = require('axios');

// Store active conversation sessions
const activeSessions = new Map();

// Start simple agent session (bypassing complex ElevenLabs conversation API)
router.post('/start', async (req, res) => {
  try {
    const { email, userProfile } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    console.log('🚀 Starting simple agent session for:', email);
    
    const sessionId = `${email}_${Date.now()}`;
    
    // Store session info
    activeSessions.set(sessionId, {
      email,
      agentId: 'agent_2901kb13dkgbemkbxhve2tbsymd2',
      userProfile: userProfile || {},
      createdAt: new Date(),
      messages: []
    });

    console.log('✅ Agent session created:', sessionId);

    res.json({
      sessionId: sessionId,
      status: 'ready'
    });

  } catch (error) {
    console.error('❌ Error starting agent session:', error);
    res.status(500).json({ 
      error: 'Failed to start agent session',
      details: error.message
    });
  }
});

// Send message and get AI response using rule-based + TTS
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

    console.log(`💬 Processing message for session ${sessionId}:`, message);

    // Add user message to session history
    session.messages.push({
      role: 'user',
      content: message,
      timestamp: new Date()
    });

    // Generate David Haye response (using your agent personality)
    const agentResponse = generateDavidHayeResponse(message, session);
    
    // Add agent response to session history
    session.messages.push({
      role: 'assistant', 
      content: agentResponse,
      timestamp: new Date()
    });

    console.log('🤖 Generated David Haye response:', agentResponse);

    res.json({
      response: agentResponse,
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

// Generate David Haye smoking cessation coach responses
function generateDavidHayeResponse(userMessage, session) {
  const messageText = userMessage.toLowerCase();
  const userProfile = session.userProfile || {};
  const answers = userProfile.answers || {};
  
  console.log('🔍 Analyzing message:', messageText);
  console.log('📊 Session message count:', session.messages.length);
  
  // Personalized responses based on user context
  const userName = userProfile.email ? userProfile.email.split('@')[0] : 'champion';
  const cigsPerDay = answers['On average, how many cigarettes do you smoke per day?'] || '';
  const motivation = answers['What is your main motivation for wanting to quit smoking?'] || '';
  
  // Check if this is the first message (greeting)
  if ((messageText.includes('hello') || messageText.includes('hi')) && session.messages.length <= 2) {
    let greeting = `Hello ${userName}! I'm David Haye, and I'm here to help you win the biggest fight of your life - beating smoking.`;
    
    if (motivation.toLowerCase().includes('fitness')) {
      greeting += " I see you're motivated by fitness - that's what I love to hear! As a boxer, I know smoking is your worst opponent.";
    } else if (motivation.toLowerCase().includes('health')) {
      greeting += " Your health motivation shows wisdom beyond your years. In boxing, we fight to protect what matters most.";
    }
    
    greeting += " What's on your mind today about your quit journey?";
    return greeting;
  }
  
  if (messageText.includes('feeling') && (messageText.includes('good') || messageText.includes('great'))) {
    return "That's fantastic, champion! A positive mindset is like having a strong foundation in boxing - everything else builds from there. Keep that fighting spirit alive! What's been helping you stay motivated?";
  }
  
  if (messageText.includes('scared') || messageText.includes('afraid') || messageText.includes('nervous') || messageText.includes('worried')) {
    return "Listen, I understand that fear completely. You know what? Before every big fight, I had butterflies too. But here's the secret - fear means you care, and caring champions win fights. What specifically is worrying you most right now?";
  }
  
  if (messageText.includes('craving') || messageText.includes('want to smoke') || messageText.includes('urge')) {
    return "Those cravings hit like a heavyweight punch, don't they? But here's my boxing secret - they're just like an opponent's combo. Powerful for a moment, then they fade. Try this: breathe in for 4, hold for 7, breathe out for 8. It's my pre-fight calm technique. How often are these cravings hitting you?";
  }
  
  if (messageText.includes('stress') || messageText.includes('pressure') || messageText.includes('work')) {
    return "Stress is a tough opponent - like facing someone who knows all your moves. But here's what I learned in the ring: you need a game plan for every situation. What are your top stress triggers? Let's build your defense strategy together.";
  }
  
  if (messageText.includes('failed') || messageText.includes('relapsed') || messageText.includes('smoked again')) {
    return "Hold up, champion. You know what Muhammad Ali taught me? He said 'I never lost a fight, I just ran out of time.' One slip doesn't erase all your progress. Even the greatest champions get knocked down - what matters is how fast you get back up. What happened? Let's learn from it and come back stronger.";
  }
  
  if (messageText.includes('progress') || messageText.includes('days') || messageText.includes('week')) {
    return "Now THAT'S what I'm talking about! Progress is everything in this game. You know, in boxing training, some days you feel like a champion, other days you feel like you can barely throw a punch. But consistency beats perfection every time. How many smoke-free days are you tracking?";
  }
  
  if (messageText.includes('eliminate') || messageText.includes('fast') || messageText.includes('quick') || messageText.includes('how can i')) {
    return "I love that fighting spirit! You want results fast - that's the champion mentality. But listen, in boxing we learned that the fastest way is often the smart way, not the rushed way. Here's my rapid-fire strategy: 1) Replace your smoking routine immediately, 2) Use the 4-7-8 breathing when cravings hit, 3) Keep your hands and mouth busy. What's your biggest challenge right now - the habit, the cravings, or the triggers?";
  }
  
  if (messageText.includes('help') || messageText.includes('advice') || messageText.includes('what should')) {
    if (cigsPerDay.includes('20') || cigsPerDay.includes('25') || cigsPerDay.includes('pack')) {
      return "Alright champion, with your smoking level, we need a strategic approach - like cutting weight for a big fight. Here's my game plan: reduce by 3-4 cigarettes every 3 days. It's not about going cold turkey - it's about smart, sustainable progress. What time of day do you usually smoke most?";
    }
    return "Here's my champion's playbook: First, identify your top 3 smoking triggers. Then, have a replacement strategy for each one - just like having different combinations ready for different opponents. What's your strongest trigger right now?";
  }
  
  if (messageText.includes('why') || messageText.includes('hard') || messageText.includes('difficult')) {
    return "You're asking the right questions, and that takes courage. Quitting smoking is hard because nicotine is like a sneaky opponent - it changes your brain chemistry. But here's what I know from boxing: the hardest fights make the strongest champions. Your brain is rewiring itself for freedom. How long have you been fighting this battle?";
  }
  
  // Default encouraging responses with David Haye's boxing wisdom
  const defaultResponses = [
    "I hear the determination in your words - that's the champion mentality! In boxing, we say 'pressure makes diamonds.' Tell me more about what you're going through.",
    
    "That takes real courage to share with me. You know what separates champions from everyone else? They keep fighting even when it gets tough. What's your next move going to be?",
    
    "I'm right here in your corner, just like a good coach should be. In the ring, we face our challenges head-on - and that's exactly what you're doing right now. What support do you need most?",
    
    "You remind me of myself before my biggest fights - focused and ready for the challenge. Every champion's journey is different, but the fighting spirit is the same. What's been your biggest win so far in this journey?",
    
    "Listen, the fact that you're here talking to me shows you've got that fighter's heart. In boxing, we don't just train our bodies - we train our minds. What's keeping you motivated to stay in this fight?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Get session info
router.get('/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = activeSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.json({
      sessionId: sessionId,
      email: session.email,
      messageCount: session.messages.length,
      createdAt: session.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get session info' });
  }
});

module.exports = router;