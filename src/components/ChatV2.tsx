import React, { useState, useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';

const ChatV2 = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [message, setMessage] = useState('');
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Initialize ElevenLabs conversation
  const conversation = useConversation({
    serverLocation: 'us',
    textOnly: true,  // Use text-only mode for localhost development
  });

  useEffect(() => {
    const urlEmail = new URLSearchParams(window.location.search).get("email");
    if (urlEmail && emailRegex.test(urlEmail)) {
      setEmail(urlEmail);
      loadUserProfile(urlEmail);
    }
  }, []);

  const loadUserProfile = async (userEmail) => {
    setLoading(true);
    setError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/user?email=${encodeURIComponent(userEmail)}`);
      
      if (response.ok) {
        const profile = await response.json();
        setUserProfile(profile);
        initializeConversation(profile);
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

  const initializeConversation = async (profile) => {
    try {
      console.log('🚀 Starting ElevenLabs conversation with React SDK...');
      
      // Simple session start for localhost - the agent should be public
      await conversation.startSession({
        agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_2901kb13dkgbemkbxhve2tbsymd2',
        connectionType: 'websocket'
      });

      console.log('✅ Conversation started successfully');
    } catch (err) {
      console.error('❌ Error starting conversation:', err);
      console.error('Full error:', err);
      setError(`Connection failed. This may be due to localhost limitations. Error: ${err.message}`);
    }
  };

  const getDynamicVariables = (profile) => {
    if (!profile) return {};
    
    const answers = profile.answers || {};
    
    return {
      "first_name": answers['First name'] || '',
      "last_name": answers['Last name'] || '',
      "sex": answers['Sex'] || '',
      "date_of_birth": answers['Date of birth'] || '',
      "email": profile.email || '',
      "smoking_duration": answers['How long have you smoked cigarettes?'] || '',
      "brand": answers['What is your preferred cigarette brand?'] || '',
      "cigs_per_day": answers['On average, how many cigarettes do you smoke per day?'] || '',
      "quit_attempts": answers['How many times have you seriously tried to quit smoking?'] || '',
      "long_quits": answers['How many times have you quit smoking for 30 days or more?'] || '',
      "motivation": answers['What is your main motivation for wanting to quit smoking?'] || ''
    };
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    window.location.href = `/chat-v2?email=${encodeURIComponent(email)}`;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    try {
      console.log('📤 Sending message:', message);
      conversation.sendUserMessage(message);
      setMessage('');
    } catch (err) {
      console.error('❌ Error sending message:', err);
      setError(`Failed to send message: ${err.message}`);
    }
  };

  const endConversation = () => {
    conversation.endSession();
    console.log('🔚 Conversation ended');
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
          <h2>Smart Nicotine AI Guide - V2</h2>
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
    <div style={styles.fullScreenContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Smart Nicotine AI Guide - V2 (React SDK)</h1>
        <p style={styles.subtitle}>Chat with David Haye • {userProfile?.email}</p>
        <div style={styles.statusContainer}>
          <span style={styles.statusDot}>🟢</span>
          <span style={styles.statusText}>Status: {conversation.status}</span>
          {conversation.isSpeaking && <span style={styles.speakingIndicator}>🎤 Speaking...</span>}
        </div>
      </div>

      <div style={styles.chatContainer}>
        <div style={styles.conversationInfo}>
          <p>Conversation Status: <strong>{conversation.status}</strong></p>
          <p>Agent Speaking: <strong>{conversation.isSpeaking ? 'Yes' : 'No'}</strong></p>
          {conversation.status === 'disconnected' && (
            <div style={styles.warningBox}>
              ⚠️ React SDK may have limitations on localhost. For full functionality, deploy to HTTPS or use the widget version at <a href={`/chat?email=${userProfile?.email}`}>/chat</a>
            </div>
          )}
        </div>

        <div style={styles.messageForm}>
          <form onSubmit={sendMessage} style={styles.inputContainer}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message to David Haye..."
              style={styles.messageInput}
              disabled={conversation.status !== 'connected'}
            />
            <button 
              type="submit" 
              style={{
                ...styles.sendButton,
                opacity: (!message.trim() || conversation.status !== 'connected') ? 0.5 : 1
              }}
              disabled={!message.trim() || conversation.status !== 'connected'}
            >
              Send
            </button>
          </form>
          
          <button 
            onClick={endConversation}
            style={styles.endButton}
          >
            End Conversation
          </button>
        </div>
      </div>
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

  // Full screen chat styles
  fullScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    background: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden'
  },
  header: {
    background: 'linear-gradient(135deg, #2196F3, #1976D2)',
    color: 'white',
    padding: '16px 24px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 10
  },
  title: {
    margin: '0 0 4px 0',
    fontSize: '24px',
    fontWeight: '600'
  },
  subtitle: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    opacity: 0.9,
    fontWeight: '400'
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  statusDot: {
    fontSize: '12px'
  },
  statusText: {
    fontWeight: '500'
  },
  speakingIndicator: {
    color: '#ffeb3b',
    fontWeight: '600'
  },
  chatContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    background: '#ffffff'
  },
  conversationInfo: {
    background: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #e1e5e9'
  },
  warningBox: {
    background: '#fff3cd',
    color: '#856404',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ffeaa7',
    marginTop: '10px',
    fontSize: '14px'
  },
  messageForm: {
    marginTop: 'auto'
  },
  inputContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px'
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
    background: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '24px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit'
  },
  endButton: {
    background: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'inherit',
    width: '100%'
  }
};

export default ChatV2;