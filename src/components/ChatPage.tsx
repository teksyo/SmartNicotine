import React, { useState, useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
}

const ChatPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const urlEmail = new URLSearchParams(window.location.search).get("email");
    if (urlEmail && emailRegex.test(urlEmail)) {
      setEmail(urlEmail);
      loadUserProfile(urlEmail);
    }
  }, []);

  useEffect(() => {
    // Load the ElevenLabs widget script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.onload = () => {
      // Auto-start conversation after widget loads and user profile is ready
      if (userProfile) {
        setTimeout(() => {
          autoStartConversation();
        }, 2000); // Wait 2 seconds for widget to fully initialize
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [userProfile]); // Re-run when userProfile changes

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

  const getDynamicVariables = (profile) => {
    if (!profile) return {};
    
    const answers = profile.answers || {};
    
    // Map exactly to your updated dynamic variables
    return {
      "first_name": answers['First name'] || '',
      "last_name": answers['Last name'] || '',
      "date_of_birth": answers['Date of birth'] || '',
      "email": profile.email || '',
      "sex": answers['Are you Male or Female?'] || '',
      "family_role": answers['Which of these best describes you?'] || '',
      "smoking_duration": answers['How long have you smoked cigarettes?'] || '',
      "brand": answers['What is your preferred cigarette brand?'] || '',
      "cigs_per_day": answers['On average, how many cigarettes do you smoke per day?'] || '',
      "quit_attempts": answers['How many times have you seriously tried to quit smoking?'] || '',
      "long_quits": answers['(LAST QUESTION) How many times have you quit smoking for 30 days or more?'] || '',
      "motivation": answers['What is your main motivation for wanting to quit smoking?'] || '',
    };
  };

  const autoStartConversation = () => {
    try {
      console.log('🚀 Auto-starting ElevenLabs conversation...');
      
      // Try to find and click the start button in the ElevenLabs widget
      const widget = document.querySelector('elevenlabs-convai');
      if (widget && widget.shadowRoot) {
        // Look for the start button in the shadow DOM
        const startButton = widget.shadowRoot.querySelector('[data-testid="start-button"], button[class*="start"], button[class*="action"]');
        if (startButton) {
          startButton.click();
          console.log('✅ Auto-started conversation');
        } else {
          console.log('❌ Start button not found in widget');
        }
      } else {
        console.log('❌ Widget or shadow root not found');
      }
    } catch (err) {
      console.error('❌ Error auto-starting conversation:', err);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    window.location.href = `/chat?email=${encodeURIComponent(email)}`;
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
        elevenlabs-convai {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
        }
        
        /* Hide the default ElevenLabs widget positioning */
        elevenlabs-convai > div {
          position: static !important;
          bottom: auto !important;
          right: auto !important;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
        }
        
        /* Style the widget button to be more prominent */
        elevenlabs-convai::part(action-button) {
          background: linear-gradient(135deg, #4CAF50, #45a049) !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 16px 32px !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3) !important;
          transition: all 0.3s ease !important;
        }
        
        elevenlabs-convai::part(action-button):hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4) !important;
        }
      `}</style>
      
      <div style={styles.fullScreenContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>Smart Nicotine AI Guide</h1>
          <p style={styles.subtitle}>Chat with David Haye • {userProfile?.email}</p>
        </div>

        <div style={styles.chatWidgetContainer}>
          <elevenlabs-convai 
            agent-id={import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_2901kb13dkgbemkbxhve2tbsymd2'}
            dynamic-variables={JSON.stringify(getDynamicVariables(userProfile))}
            override-language="en"
            variant="expanded"
            action-text="Start Chat with David Haye"
            start-call-text="Begin Conversation"
          />
        </div>
      </div>
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
    height: '100vh',
    width: '100vw',
    background: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden'
  },
  header: {
    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
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
    margin: '0',
    fontSize: '14px',
    opacity: 0.9,
    fontWeight: '400'
  },
  chatWidgetContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    position: 'relative'
  }
};

export default ChatPage;