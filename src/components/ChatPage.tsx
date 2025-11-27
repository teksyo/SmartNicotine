import React, { useState, useEffect, useRef } from 'react';

const ChatPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const [agentSessionId, setAgentSessionId] = useState('');
  
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const urlEmail = new URLSearchParams(window.location.search).get("email");
    if (urlEmail && emailRegex.test(urlEmail)) {
      setEmail(urlEmail);
      loadUserProfile(urlEmail);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadUserProfile = async (userEmail) => {
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/user?email=${encodeURIComponent(userEmail)}`);
      
      if (response.ok) {
        const profile = await response.json();
        setUserProfile(profile);
        initializeChat(profile);
      } else if (response.status === 404) {
        setError("We couldn't find your assessment. Enter your email again.");
        setUserProfile(null);
      } else {
        throw new Error('Failed to load user profile');
      }
    } catch (err) {
      setError('Unable to load your profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const initializeChat = async (profile) => {
    try {
      console.log('🚀 Initializing ElevenLabs agent conversation...');
      
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/agent/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: profile.email,
          userProfile: profile
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setAgentSessionId(data.sessionId);
        console.log('✅ Agent conversation started:', data.sessionId);
        
        // Show initial message from your configured agent
        const welcomeMessage = {
          id: Date.now(),
          type: 'agent',
          text: "Starting conversation with David Haye...",
          timestamp: new Date()
        };
        
        setMessages([welcomeMessage]);
        
      } else {
        throw new Error('Failed to start agent conversation');
      }
    } catch (err) {
      console.error('❌ Error initializing agent:', err);
      setError('Failed to connect to David Haye. Please refresh and try again.');
    }
  };

  const createSystemPrompt = (profile) => {
    const answers = profile.answers || {};
    
    return `You are David Haye, the legendary British boxer and champion. You're now working as a smoking cessation coach, using your experience of discipline, mental toughness, and overcoming challenges to help people quit smoking.

PERSONALITY TRAITS:
- Speak with confidence and authority, but warmly and supportively
- Use boxing/sports metaphors naturally (but don't overdo it)
- Be encouraging and motivational, like a champion coach
- Show empathy - acknowledge that quitting is tough, like training for a big fight
- Be direct and honest, but always supportive
- Reference your boxing career occasionally when relevant

USER'S SMOKING PROFILE:
- Email: ${profile.email}
- Cigarettes per day: ${answers['On average, how many cigarettes do you smoke per day?'] || 'Unknown'}
- Previous quit attempts: ${answers['How many times have you seriously tried to quit smoking?'] || 'Unknown'}
- Main motivation: ${answers['What is your main motivation for wanting to quit smoking?'] || 'Unknown'}
- Smoking duration: ${answers['How long have you smoked cigarettes?'] || 'Unknown'}

CONVERSATION STYLE:
- Keep responses conversational and under 100 words
- Ask follow-up questions to keep them engaged
- Provide specific, actionable advice
- Share relevant experiences from your boxing career when appropriate
- Be the supportive champion they need in their corner

Remember: You're here to help them win the biggest fight of their life - the fight against smoking addiction.`;
  };

  const createPersonalizedGreeting = (profile) => {
    const answers = profile.answers || {};
    const motivation = answers['What is your main motivation for wanting to quit smoking?'] || '';
    
    let greeting = `Hello! I'm David Haye, and I'm here to help you on your journey to quit smoking.`;
    
    if (motivation.toLowerCase().includes('fitness')) {
      greeting += ` I see you're motivated by fitness - that's fantastic! As a boxer, I know how much smoking can hold back your athletic potential.`;
    } else if (motivation.toLowerCase().includes('health')) {
      greeting += ` Your health motivation shows real wisdom. In boxing, we learned that every choice impacts performance.`;
    } else if (motivation.toLowerCase().includes('family')) {
      greeting += ` Being motivated by your family shows incredible strength. That's the kind of fighting spirit that wins champions.`;
    }
    
    greeting += ` How are you feeling about this journey today?`;
    
    return greeting;
  };

  const generateTTS = async (text) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: text,
          voice_id: 'OrbzO5MF8to5NCMzleFX'
        })
      });
      
      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play().catch(err => console.log('Audio play failed:', err));
        }
      }
    } catch (err) {
      console.log('TTS generation failed:', err);
    }
  };

  const generateDavidHayeResponse = (userMessage, context) => {
    const messageText = userMessage.toLowerCase();
    
    // Rule-based David Haye responses
    if (messageText.includes('feeling') && (messageText.includes('good') || messageText.includes('great'))) {
      return "That's fantastic! A positive mindset is like having a strong foundation in boxing - everything builds from there. What's been helping you stay motivated?";
    }
    
    if (messageText.includes('scared') || messageText.includes('worried') || messageText.includes('nervous')) {
      return "I understand that fear - it's completely normal. Before every big fight, I had nerves too. But fear can be fuel if we use it right. What specific part worries you most?";
    }
    
    if (messageText.includes('craving') || messageText.includes('want to smoke') || messageText.includes('urge')) {
      return "Those cravings are like an opponent throwing punches - they feel strong, but they pass. Try the 4-7-8 breathing: breathe in for 4, hold for 7, out for 8. How long do your cravings usually last?";
    }
    
    if (messageText.includes('help') || messageText.includes('advice')) {
      return "Here's my champion's advice: Start by identifying your top 3 smoking triggers, then have a replacement ready for each. Like having different boxing combinations ready. What's your strongest trigger?";
    }
    
    if (messageText.includes('failed') || messageText.includes('relapsed')) {
      return "Listen, every champion has been knocked down. What matters is getting back up. Muhammad Ali lost fights but became the greatest. One slip doesn't erase your progress. What happened?";
    }
    
    // Default encouraging responses
    const defaults = [
      "I'm here in your corner, champion. Tell me more about what you're experiencing.",
      "That takes courage to share. In boxing, we face challenges head-on - that's what you're doing. What's your next move?",
      "You know, the strongest fighters are the ones who keep going even when it's tough. That's you right now. What's keeping you motivated?"
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    window.location.href = `/chat?email=${encodeURIComponent(email)}`;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isTyping) return;
    
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: newMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Send message to ElevenLabs agent
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/agent/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: agentSessionId,
          message: userMessage.text
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        
        const agentMessage = {
          id: Date.now() + 1,
          type: 'agent',
          text: data.response,
          timestamp: new Date(),
          audioUrl: data.audio_url
        };
        
        setMessages(prev => [...prev, agentMessage]);
        
        // Generate TTS with the agent response
        if (data.response) {
          generateTTS(data.response);
        }
        
      } else {
        throw new Error('Failed to get agent response');
      }
    } catch (err) {
      console.error('❌ Error communicating with agent:', err);
      
      // Fallback message
      const errorMessage = {
        id: Date.now() + 1,
        type: 'agent',
        text: "I'm having trouble responding right now. Let me try again - what's on your mind about quitting smoking?",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      generateTTS(errorMessage.text);
    }
    
    setIsTyping(false);
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>Preparing your personalized session…</p>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div style={styles.emailContainer}>
        <div style={styles.emailForm}>
          <h2>Smart Nicotine AI Guide</h2>
          <p>Enter your email to continue</p>
          
          {error && <div style={styles.error}>{error}</div>}
          
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              style={styles.emailInput}
              required
            />
            <button type="submit" style={styles.emailButton}>
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        <h1>Smart Nicotine AI Guide</h1>
        <p style={styles.voiceNote}>This session uses David Haye's real cloned voice for guidance.</p>
        <div style={styles.statusIndicator}>
          Status: 🟢 Ready
        </div>
      </div>

      <div style={styles.messagesContainer}>
        {messages.map(message => (
          <div key={message.id} style={{
            ...styles.message,
            ...(message.type === 'user' ? styles.userMessage : styles.agentMessage)
          }}>
            {message.type === 'agent' && (
              <div style={styles.avatar}>DH</div>
            )}
            <div style={{
              ...styles.messageContent,
              ...(message.type === 'user' ? styles.userBubble : styles.agentBubble)
            }}>
              <div style={styles.messageText}>{message.text}</div>
              <div style={styles.messageTime}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div style={styles.message}>
            <div style={styles.avatar}>DH</div>
            <div style={{...styles.messageContent, ...styles.agentBubble}}>
              <div style={styles.typing}>
                David is thinking...
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} style={styles.inputForm}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message to David Haye..."
            style={styles.messageInput}
            disabled={isTyping}
          />
          <button 
            type="submit" 
            style={{
              ...styles.sendButton,
              opacity: (!newMessage.trim() || isTyping) ? 0.5 : 1
            }}
            disabled={!newMessage.trim() || isTyping}
          >
            Send
          </button>
        </div>
      </form>

      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
};

const styles = {
  // Email form styles
  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  emailForm: {
    background: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%'
  },
  emailInput: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '16px',
    marginBottom: '20px',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  },
  emailButton: {
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'inherit'
  },
  error: {
    background: '#fee',
    color: '#c53030',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #fed7d7'
  },

  // Loading styles
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #4CAF50',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px'
  },

  // Chat styles
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#f8f9fa',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    background: 'white',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '1px solid #e1e5e9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  voiceNote: {
    margin: '5px 0 0 0',
    color: '#666',
    fontSize: '14px',
    fontStyle: 'italic'
  },
  statusIndicator: {
    margin: '10px 0 0 0',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
    background: '#f8f9fa'
  },
  message: {
    display: 'flex',
    marginBottom: '15px',
    alignItems: 'flex-end'
  },
  userMessage: {
    flexDirection: 'row-reverse'
  },
  agentMessage: {
    flexDirection: 'row'
  },
  avatar: {
    width: '32px',
    height: '32px',
    background: '#4CAF50',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '0 8px',
    flexShrink: 0
  },
  messageContent: {
    maxWidth: '70%',
    padding: '12px 16px',
    borderRadius: '18px',
    position: 'relative'
  },
  agentBubble: {
    background: 'white',
    border: '1px solid #e1e5e9'
  },
  userBubble: {
    background: '#4CAF50',
    color: 'white'
  },
  messageText: {
    lineHeight: '1.4',
    marginBottom: '4px'
  },
  messageTime: {
    fontSize: '11px',
    opacity: 0.7
  },
  typing: {
    fontStyle: 'italic',
    color: '#666'
  },

  // Input styles
  inputForm: {
    background: 'white',
    borderTop: '1px solid #e1e5e9',
    padding: '20px'
  },
  inputContainer: {
    display: 'flex',
    gap: '12px'
  },
  messageInput: {
    flex: 1,
    padding: '12px 16px',
    border: '2px solid #e1e5e9',
    borderRadius: '24px',
    fontSize: '16px',
    outline: 'none',
    fontFamily: 'inherit'
  },
  sendButton: {
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '24px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit'
  }
};

export default ChatPage;