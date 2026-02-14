import React, { useState, useEffect } from 'react';
import { Conversation } from '@elevenlabs/client';
// import NicotineLadder from './NicotineLadder';
import NicotineOptions from './NicotineOptions';
import Header from './Header';
import { Button } from './Button';

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
      localStorage.setItem('snuk_email', urlEmail);
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
        setError("Invalid email. Enter your email again.");
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


  const handleEmailSubmit = ()=> {
    
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
       
          
          {error && <div style={styles.error}>{error}</div>}
          
          <form>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              style={styles.emailInput}
              className='text-[hsl(var(--deep-navy))]'
              required
            />
            <Button variant='outline' text={'Continue'} rightIcon="" icon="" onClick={handleEmailSubmit}  />
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
        
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
      <div style={styles.fullScreenContainer}
           className="relative min-h-[70%] pb-20 w-full pt-20 sm:pt-24 lg:pt-32"
          >
    <Header/>

      <div className='w-full' style={styles.chatContainer}>
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
            Talk to David Haye AI Coach
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
              <Button 
             text="Press One to speak to DH-AI Coach" 
             variant="primary" 
             rightIcon=""
             onClick={startConversation}

             
           />
          ) : (
            <Button 
             text="STOP CONVERSATION" 
             variant="danger" 
             rightIcon="🔴"
             onClick={stopConversation} />
          )}
        </div>

      </div>
    </div>
    
    {/* Wave transition - COMMENTED OUT
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-bounce mb-2">
            <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="text-sm text-white font-medium">Explore the Nicotine Ladder</p>
        </div>
      </div>
    </div>
    <NicotineLadder />
    */}

    {/* Nicotine Options section below the chat */}
    <NicotineOptions />
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
    // background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  emailForm: {
    background: 'hsl(var(--navy))',
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
    borderRadius: '8px',
    fontSize: '16px',
    marginBottom: '20px',
    boxSizing: 'border-box',
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
    // background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
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
    // backgroundImage: 'linear-gradient(rgba(26, 26, 46, 0.9), rgba(15, 52, 96, 0.9)), url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    fontFamily: 'Google Sans Flex, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden',
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
    color: '#40e0d0'
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
    backdropFilter: 'blur(2px)',
    margin: '0',
    borderRadius: '12px'
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
    background: 'linear-gradient(135deg, #40e0d0, #0080ff)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'inherit',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(64, 224, 208, 0.4)',
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
    borderRadius: '12px',
    // border: '1px solid rgba(64, 224, 208, 0.3)',
    overflow: 'hidden',
    boxShadow: '0 1px 2px gray ',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto 20px auto',
    backdropFilter: 'blur(10px)',
    background: 'radial-gradient(ellipse at 40% 40%, rgb(0 201 167 / 10%) 0%, #298e890d 60%)'
  },
  visualizerTitle: {
    margin: '0',
    padding: '16px 20px',
    borderBottom: '1px solid rgba(64, 224, 208, 0.3)',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff'
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
    backgroundColor: '#00C9A7',
    animation: 'speakingWave 0.8s ease-in-out infinite'
  },
  
  // Text styles
  idleText: {
    color: '#ffffff',
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
    color: '#00C9A7',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '0',
    animation: 'textPulse 1s ease-in-out infinite'
  }
};

export default ChatV2;