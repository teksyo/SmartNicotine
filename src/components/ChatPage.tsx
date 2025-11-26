import React, { useState, useEffect, useRef } from 'react';
import './ChatPage.css';

const ChatPage = () => {
  // State management
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [agentSession, setAgentSession] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  
  // Refs
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Auto scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Extract email from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    
    if (emailParam && emailRegex.test(emailParam)) {
      setEmail(emailParam);
      loadUserProfile(emailParam);
    }
  }, []);

  // Load user profile from backend
  const loadUserProfile = async (userEmail: string) => {
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/user?email=${encodeURIComponent(userEmail)}`);
      
      if (response.ok) {
        const profile = await response.json();
        setUserProfile(profile);
        
        // Initialize agent session with user profile
        await startAgentSession(profile);
        
        // Add welcome message
        addAgentMessage(
          `Hello! I'm your Smart Nicotine AI Guide, speaking with David Haye's voice. I've reviewed your assessment and I'm here to help you on your journey to quit smoking. How are you feeling today?`
        );
      } else if (response.status === 404) {
        setError("We couldn't find your assessment. Enter your email again below.");
        setUserProfile(null);
      } else {
        throw new Error('Failed to load user profile');
      }
    } catch (err) {
      console.error('Error loading user profile:', err);
      setError('Unable to load your profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle email submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Redirect with email parameter
    window.location.href = `/chat?email=${encodeURIComponent(email)}`;
  };

  // Initialize ElevenLabs agent session
  const startAgentSession = async (profile: any) => {
    try {
      // Placeholder for ElevenLabs agent initialization
      // In real implementation, this would:
      // 1. Initialize ElevenLabs conversational agent
      // 2. Set up David Haye voice model
      // 3. Pass user profile as session variables
      
      console.log('Starting agent session with profile:', profile);
      
      // Mock session object
      const session = {
        agentId: 'david-haye-voice-agent',
        voiceId: 'david-haye-voice-id',
        sessionVars: {
          cigarettesPerDay: profile.answers?.['On average, how many cigarettes do you smoke per day?'],
          quitAttempts: profile.answers?.['How many times have you seriously tried to quit smoking?'],
          motivation: profile.answers?.['What is your main motivation for wanting to quit smoking?'],
          smokingDuration: profile.answers?.['How long have you smoked cigarettes?'],
          preferredBrand: profile.answers?.['What is your preferred cigarette brand?']
        }
      };
      
      setAgentSession(session);
      
    } catch (err) {
      console.error('Error starting agent session:', err);
      setError('Failed to initialize AI guide. Please refresh and try again.');
    }
  };

  // Add agent message to chat
  const addAgentMessage = async (text: string) => {
    const agentMessage = {
      id: Date.now(),
      type: 'agent',
      text,
      timestamp: new Date(),
      audioUrl: null
    };
    
    setMessages(prev => [...prev, agentMessage]);
    
    // Generate TTS audio
    try {
      const audioUrl = await generateTTS(text);
      
      // Update message with audio URL
      setMessages(prev => 
        prev.map(msg => 
          msg.id === agentMessage.id 
            ? { ...msg, audioUrl } 
            : msg
        )
      );
      
      // Auto-play audio
      if (audioUrl && audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play().catch(err => 
          console.error('Audio playback failed:', err)
        );
      }
      
    } catch (err) {
      console.error('TTS generation failed:', err);
    }
  };

  // Generate TTS audio using ElevenLabs
  const generateTTS = async (text: string) => {
    try {
      // Placeholder for ElevenLabs TTS API call
      // In real implementation, this would:
      // 1. Call ElevenLabs TTS API with David Haye voice
      // 2. Return audio blob URL
      
      console.log('Generating TTS for:', text);
      
      // Mock implementation - returns null for now
      // Replace with actual ElevenLabs API call
      /*
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voiceId: agentSession?.voiceId,
        }),
      });
      
      if (response.ok) {
        const audioBlob = await response.blob();
        return URL.createObjectURL(audioBlob);
      }
      */
      
      return null;
    } catch (err) {
      console.error('TTS generation error:', err);
      return null;
    }
  };

  // Handle user message submission
  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: newMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    try {
      // Get agent response
      const agentResponse = await getAgentResponse(userMessage.text);
      await addAgentMessage(agentResponse);
      
    } catch (err) {
      console.error('Error getting agent response:', err);
      await addAgentMessage("I'm sorry, I'm having trouble responding right now. Could you try asking again?");
    } finally {
      setIsTyping(false);
    }
  };

  // Get response from ElevenLabs agent
  const getAgentResponse = async (userInput: string) => {
    try {
      // Placeholder for ElevenLabs conversational agent API
      // In real implementation, this would:
      // 1. Send user input to ElevenLabs agent
      // 2. Include session context and user profile
      // 3. Return agent's text response
      
      console.log('Getting agent response for:', userInput);
      
      // Mock responses based on common smoking cessation topics
      const mockResponses = [
        "I understand how challenging this journey can be. Based on your assessment, you've been smoking for quite some time. What's your biggest concern about quitting right now?",
        "That's a great question. From my experience and what I know about your smoking habits, I'd recommend starting with small, manageable changes. What time of day do you usually smoke the most?",
        "You're taking a brave step by being here. Remember, every champion faces setbacks - it's how you bounce back that defines you. What's worked for you in previous quit attempts?",
        "I hear you. The physical and mental aspects of quitting can feel overwhelming. Let's focus on one thing you can control today. What's one smoking trigger you'd like to tackle first?"
      ];
      
      // Return a random mock response (replace with actual API call)
      return mockResponses[Math.floor(Math.random() * mockResponses.length)];
      
    } catch (err) {
      console.error('Agent response error:', err);
      throw err;
    }
  };

  // Render email input form
  const renderEmailInput = () => (
    <div className="email-container">
      <div className="email-form">
        <h2>Smart Nicotine AI Guide</h2>
        <p className="email-label">Enter your email to continue</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="email-input"
            required
          />
          <button type="submit" className="email-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );

  // Render loading state
  const renderLoading = () => (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Preparing your personalized session…</p>
    </div>
  );

  // Render chat message
  const renderMessage = (message: any) => (
    <div key={message.id} className={`message ${message.type}`}>
      {message.type === 'agent' && (
        <div className="message-avatar">
          <div className="avatar-circle">DH</div>
        </div>
      )}
      <div className="message-content">
        <div className="message-text">{message.text}</div>
        <div className="message-time">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        {message.type === 'agent' && message.audioUrl && (
          <div className="audio-indicator">🔊 Audio available</div>
        )}
      </div>
    </div>
  );

  // Render main chat interface
  const renderChat = () => (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <h1>Smart Nicotine AI Guide</h1>
        <p className="voice-note">This session uses David Haye's real cloned voice for guidance.</p>
      </div>

      {/* Messages */}
      <div className="messages-container">
        {messages.map(renderMessage)}
        
        {isTyping && (
          <div className="message agent typing">
            <div className="message-avatar">
              <div className="avatar-circle">DH</div>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleMessageSubmit} className="message-input-form">
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="message-input"
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!newMessage.trim() || isTyping}
          >
            Send
          </button>
        </div>
      </form>

      {/* Hidden audio element for playback */}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );

  // Main render logic
  if (loading) {
    return renderLoading();
  }

  if (!userProfile) {
    return renderEmailInput();
  }

  return renderChat();
};

export default ChatPage;