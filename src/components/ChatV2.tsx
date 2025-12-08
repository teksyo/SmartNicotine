import React, { useState, useEffect } from 'react';
import { Conversation } from '@elevenlabs/client';
import NicotineLadder from './NicotineLadder';

const ChatV2 = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const [agentStatus, setAgentStatus] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([
  ]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Global variable to store conversation (just like your vanilla JS)
  let conversation = null;

  useEffect(() => {
    const urlEmail = new URLSearchParams(window.location.search).get("email");
    if (urlEmail && emailRegex.test(urlEmail)) {
      setEmail(urlEmail);
      loadUserProfile(urlEmail);
    }
    
    // Add page visibility change handler
    const handleVisibilityChange = () => {
      if (document.hidden && conversation && isConnected) {
        console.log('👁️ Page hidden - stopping conversation');
        stopConversation();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Add resize listener for responsive design
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to stop conversation on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      if (conversation) {
        console.log('🧹 Component unmounting - cleaning up conversation');
        conversation.endSession().catch(console.error);
        conversation = null;
      }
    };
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

  // Your exact vanilla JS functions, just wrapped in React
  async function startConversation() {
    try {
      setError('');
      console.log('🎙️ Requesting microphone permission...');
      
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      console.log('📦 Using ElevenLabs Conversation from npm package...');
      
      console.log('🚀 Starting conversation...');

      // Start the conversation with more debugging and configuration
      const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_2901kb13dkgbemkbxhve2tbsymd2';
      console.log('🎯 Using agent ID:', agentId);
      
      // Get dynamic variables from user profile
      const dynamicVariables = {};
      if (userProfile && userProfile.answers) {
        const answers = userProfile.answers;
        dynamicVariables.first_name = answers['First name'] || '';
        dynamicVariables.smoking_duration = answers['How long have you smoked cigarettes?'] || '';
        dynamicVariables.brand = answers['What is your preferred cigarette brand?'] || '';
        dynamicVariables.cigs_per_day = answers['On average, how many cigarettes do you smoke per day?'] || '';
        dynamicVariables.quit_attempts = answers['How many times have you seriously tried to quit smoking?'] || '';
        dynamicVariables.long_quits = answers['How many times have you quit smoking for 30 days or more?'] || '';
        dynamicVariables.motivation = answers['What is your main motivation for wanting to quit smoking?'] || '';
        
        // Calculate age from date of birth
        const dateOfBirth = answers['Date of birth'];
        if (dateOfBirth) {
          const birthDate = new Date(dateOfBirth);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            dynamicVariables.age = (age - 1).toString();
          } else {
            dynamicVariables.age = age.toString();
          }
        } else {
          dynamicVariables.age = '';
        }
      }

      console.log('🎯 Dynamic variables:', dynamicVariables);

      conversation = await Conversation.startSession({
        agentId: agentId,
        // Try different connection types
        connectionType: 'websocket', // explicitly set websocket instead of default
        dynamicVariables: dynamicVariables, // Add dynamic variables
        onConnect: () => {
          console.log('✅ Connected to agent successfully');
          setConnectionStatus('Connected');
          setIsConnected(true);
        },
        onDisconnect: (reason) => {
          console.log('❌ Disconnected from agent. Reason:', reason);
          setConnectionStatus('Disconnected');
          setIsConnected(false);
          setAgentStatus('');
          setError(`Disconnected: ${reason || 'Unknown reason'}`);
        },
        onError: (error) => {
          console.error('❌ Conversation Error Details:', error);
          setError(`Error: ${JSON.stringify(error)}`);
        },
        onModeChange: (mode) => {
          console.log('🔄 Mode changed to:', mode);
          setAgentStatus(mode.mode === 'speaking' ? 'Speaking' : 'Listening');
        },
        // Add more event handlers for debugging
        onMessage: (message) => {
          console.log('📨 Message received:', message);
          // Capture all message types more broadly
          if (message.type === 'user_transcript' || (message.source === 'user' && message.message)) {
            const text = message.message || message.text || message.content;
            if (text) {
              setMessages(prev => [...prev, { role: 'user', content: text, timestamp: new Date() }]);
            }
          } else if (message.type === 'agent_response' || message.source === 'ai' || message.role === 'ai') {
            const text = message.message || message.text || message.content;
            if (text) {
              setMessages(prev => [...prev, { role: 'agent', content: text, timestamp: new Date() }]);
            }
          }

          console.log(messages);
        },
        onStatusChange: (status) => {
          console.log('🔄 Status changed:', status);
          setConnectionStatus(typeof status === 'object' ? status.status || 'Unknown' : status);
        }
      });
      
      console.log('✅ Conversation object created:', conversation);
    } catch (error) {
      console.error('❌ Failed to start conversation:', error);
      setError(`Failed to start conversation: ${error.message || error}`);
    }
  }

  async function stopConversation() {
    console.log('🛑 Stopping conversation...');
    
    // Reset UI state immediately
    setConnectionStatus('Disconnecting...');
    setIsConnected(false);
    setAgentStatus('');
    setError('');
    
    if (conversation) {
      try {
        // Try to end the session properly
        console.log('🔚 Ending ElevenLabs session...');
        await conversation.endSession();
        console.log('✅ ElevenLabs session ended successfully');
      } catch (error) {
        console.error('❌ Error ending session:', error);
        // Continue with cleanup even if endSession fails
      }
      
      // Null out the conversation object
      conversation = null;
    }
    
    // Force cleanup - stop any ongoing audio/microphone
    try {
      // Stop all media streams
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const tracks = document.querySelectorAll('audio, video');
        tracks.forEach(track => {
          if (track.srcObject) {
            track.srcObject.getTracks().forEach(t => t.stop());
          }
        });
      }
    } catch (error) {
      console.log('Error stopping media streams:', error);
    }
    
    // Final state reset
    setConnectionStatus('Disconnected');
    setIsConnected(false);
    setAgentStatus('');
    
    console.log('🔚 Conversation fully stopped');
    
    // Refresh page after a short delay to ensure clean state
    setTimeout(() => {
      console.log('🔄 Refreshing page for clean state...');
      window.location.reload();
    }, 1000);
  }


  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    window.location.href = `/chat-v2?email=${encodeURIComponent(email)}`;
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
    <>
      <style>{`
        @keyframes speakingWave {
          0%, 100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1.2);
          }
        }
        
        @keyframes listeningPulse {
          0%, 100% {
            transform: scaleY(0.6);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(0.8);
            opacity: 1;
          }
        }
        
        @keyframes textPulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
      <div style={styles.fullScreenContainer}>
      <div style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.1), transparent 50%), radial-gradient(circle at 70% 50%, rgba(34,197,94,0.1), transparent 50%)',
        textAlign: 'center'
      }}>
        <h1 style={{
          background: 'linear-gradient(to right, rgb(37, 99, 235), hsl(var(--primary)), rgb(22, 163, 74))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          display:'inline-block',
          color: 'transparent',
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '0.5rem'
        }}>Smart Nicotine</h1>
        {/*<p style={styles.subtitle}>Chat with David Haye • {userProfile?.email}</p>*/}
      </div>

      <div style={styles.chatContainer}>
        {/*<div style={styles.conversationInfo}>
          <p>Connection Status: <strong>{connectionStatus}</strong></p>
          <p>Agent Status: <strong>{agentStatus || 'Ready'}</strong></p>
          
          {error && (
            <div style={styles.errorBox}>
              ❌ {error}
              <div style={{marginTop: '10px', fontSize: '12px'}}>
                <strong>Possible causes:</strong>
                <ul style={{textAlign: 'left', margin: '8px 0 0 20px', padding: 0}}>
                  <li>Agent is not set as public in ElevenLabs dashboard</li>
                  <li>Agent ID is incorrect</li>
                  <li>Network/HTTPS issues on localhost</li>
                  <li>ElevenLabs API authentication required</li>
                </ul>
                <p style={{margin: '8px 0 0 0'}}>
                  <strong>Alternative:</strong> Try the <a href={`/chat?email=${userProfile?.email}`} style={{color: '#2196F3'}}>widget version</a> which works on localhost.
                </p>
              </div>
            </div>
          )}
        </div>*/}

        {/* Messages Display - COMMENTED OUT */}
        {/*
        <div style={styles.messagesContainer}>
          <h3 style={styles.messagesTitle}>
            Conversation with David Haye
            <span style={styles.statusContainer}>
              <span style={styles.statusDot}>{isConnected ? '🟢' : '🔴'}</span>
              <span style={styles.statusText}>{connectionStatus}</span>
              {agentStatus && <span style={styles.speakingIndicator}>🎤 {agentStatus}</span>}
            </span>
          </h3>
          <div style={{
            ...styles.messagesList,
            minHeight: isMobile ? '300px' : '73vh'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                ...styles.messageItem,
                ...(msg.role === 'user' ? styles.userMessage : styles.agentMessage)
              }}>
                <div style={styles.messageHeader}>
                  <span style={styles.messageRole}>
                    {msg.role === 'user' ? '👤 You' : '🥊 David Haye'}
                  </span>
                  <span style={styles.messageTime}>
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div style={styles.messageContent}>{msg.content}</div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Audio Visualization */}
        <div style={styles.audioVisualizerContainer}>
          <h3 style={styles.visualizerTitle}>
            Conversation with David Haye AI
            <span style={styles.statusContainer}>
              <span style={styles.statusDot}>{isConnected ? '🟢' : '🔴'}</span>
              <span style={styles.statusText}>{connectionStatus}</span>
              {agentStatus && <span style={styles.speakingIndicator}>🎤 {agentStatus}</span>}
            </span>
          </h3>
          <div style={styles.visualizerContent}>
            <div style={styles.waveContainer}>
              {[...Array(7)].map((_, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.waveBar,
                    animationDelay: `${index * 0.15}s`,
                    ...(isConnected && agentStatus === 'Speaking' 
                      ? { ...styles.speakingBar, animationName: 'speakingWave' }
                      : isConnected && agentStatus === 'Listening'
                      ? { ...styles.listeningBar, animationName: 'listeningPulse' }
                      : { ...styles.idleBar }
                    )
                  }}
                />
              ))}
            </div>
            {!isConnected && (
              <p style={styles.idleText}>Ready to start conversation...</p>
            )}
            {isConnected && agentStatus === 'Listening' && (
              <p style={styles.listeningText}>🎤 Listening for your voice...</p>
            )}
            {isConnected && agentStatus === 'Speaking' && (
              <p style={styles.speakingText}>🗣️ David is speaking...</p>
            )}
            {isConnected && !agentStatus && (
              <p style={styles.idleText}>Connected - Ready...</p>
            )}
          </div>
        </div>

        <div style={styles.controlsContainer}>
          {!isConnected ? (
            <button 
              onClick={startConversation}
              style={styles.startButton}
            >
              PRESS ONCE to activate DH AI Coach
            </button>
          ) : (
            <button 
              onClick={stopConversation}
              style={styles.stopButton}
            >
              🔴 Stop Conversation
            </button>
          )}
        </div>

      </div>
    </div>
    
    {/* Wave transition */}
    <div className="relative">
      <svg
        className="w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8f9fa" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C150,100 300,0 600,60 C900,120 1050,20 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
        />
        <path
          d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
          fill="#ffffff"
          opacity="0.8"
        />
      </svg>
      
      {/* Scroll indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-bounce mb-2">
            <svg className="w-6 h-6 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 font-medium">Explore the Nicotine Ladder</p>
        </div>
      </div>
    </div>
    
    {/* Nicotine Ladder section below the chat */}
    <NicotineLadder />
    </>
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
    width: '100vw',
    background: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden',
    marginBottom: '100px'
  },
  subtitle: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    opacity: 0.9,
    fontWeight: '400'
  },
  statusContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '14px',
    marginLeft: '15px'
  },
  statusDot: {
    fontSize: '10px'
  },
  statusText: {
    fontWeight: '500',
    color: 'gray'
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
  errorBox: {
    background: '#fee',
    color: '#c53030',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #fed7d7',
    marginTop: '10px',
    fontSize: '14px'
  },
  controlsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  startButton: {
    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
    transition: 'all 0.3s ease',
    minWidth: '200px'
  },
  stopButton: {
    background: 'linear-gradient(135deg, #f44336, #d32f2f)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
    transition: 'all 0.3s ease',
    minWidth: '200px'
  },
  testButton: {
    background: 'linear-gradient(135deg, #ff9800, #f57c00)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'inherit',
    fontWeight: '500',
    boxShadow: '0 2px 8px rgba(255, 152, 0, 0.3)',
    transition: 'all 0.3s ease',
    minWidth: '160px'
  },
  instructionsContainer: {
    background: '#e3f2fd',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #bbdefb'
  },

  // Messages display styles
  messagesContainer: {
    background: '#f8f9fa',
    borderRadius: '12px',
    border: '1px solid #e1e5e9',
    marginBottom: '20px',
    //maxHeight: '400px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  messagesTitle: {
    margin: '0',
    padding: '16px 20px',
    borderBottom: '1px solid #e1e5e9',
    background: '#ffffff',
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  messagesList: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    maxHeight: '320px'
  },
  messageItem: {
    marginBottom: '16px',
    padding: '12px 16px',
    borderRadius: '12px',
    maxWidth: '80%'
  },
  userMessage: {
    background: 'linear-gradient(135deg, #2196F3, #1976D2)',
    color: 'white',
    marginLeft: 'auto',
    marginRight: '0'
  },
  agentMessage: {
    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
    color: 'white',
    marginLeft: '0',
    marginRight: 'auto'
  },
  messageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '12px',
    opacity: 0.9
  },
  messageRole: {
    fontWeight: '600'
  },
  messageTime: {
    fontSize: '11px',
    opacity: 0.8
  },
  messageContent: {
    fontSize: '14px',
    lineHeight: '1.4'
  },

  // Audio Visualizer styles
  audioVisualizerContainer: {
    background: '#f8f9fa',
    borderRadius: '12px',
    border: '1px solid #e1e5e9',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto 20px auto'
  },
  visualizerTitle: {
    margin: '0',
    padding: '16px 20px',
    borderBottom: '1px solid #e1e5e9',
    background: '#ffffff',
    fontSize: '18px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  visualizerContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    minHeight: '300px'
  },
  waveContainer: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '24px'
  },
  waveBar: {
    width: '8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  },
  
  // Different bar states
  idleBar: {
    height: '12px',
    backgroundColor: '#e0e0e0',
    animation: 'none'
  },
  
  listeningBar: {
    height: '20px',
    backgroundColor: '#2196F3',
    animation: 'listeningPulse 2s ease-in-out infinite'
  },
  
  speakingBar: {
    height: '35px',
    backgroundColor: '#4CAF50',
    animation: 'speakingWave 0.8s ease-in-out infinite'
  },
  
  // Text styles
  idleText: {
    color: '#666',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    margin: '0'
  },
  
  listeningText: {
    color: '#2196F3',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '0',
    animation: 'textPulse 2s ease-in-out infinite'
  },
  
  speakingText: {
    color: '#4CAF50',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '0',
    animation: 'textPulse 1s ease-in-out infinite'
  }
};

export default ChatV2;