# Smart Nicotine AI Guide - Claude Development Notes

## Project Overview
A smoking cessation application featuring David Haye's AI agent for personalized coaching, built with React TypeScript frontend and Node.js backend, integrated with ElevenLabs Conversational AI and Supabase.

## Current Architecture

### Frontend (React + TypeScript + Vite)
- **Main App**: `/src/App.tsx` - Router configuration
- **Chat Page (Widget)**: `/src/components/ChatPage.tsx` - ElevenLabs widget implementation
- **Chat V2 (React SDK)**: `/src/components/ChatV2.tsx` - ElevenLabs React SDK implementation
- **Environment**: `.env` with `VITE_ELEVENLABS_AGENT_ID=agent_2901kb13dkgbemkbxhve2tbsymd2`

### Backend (Node.js + Express)
- **Main Server**: `/backend/index.js`
- **API Routes**: 
  - `/backend/routes/api.js` - User profile lookup
  - `/backend/routes/tts.js` - Text-to-speech with David Haye voice
- **Database**: Supabase integration for Typeform assessment data
- **Environment**: `.env` with ElevenLabs API key and voice configuration

## ElevenLabs Integration

### Agent Configuration
- **Agent ID**: `agent_2901kb13dkgbemkbxhve2tbsymd2`
- **Voice**: David Haye cloned voice (`OrbzO5MF8to5NCMzleFX`)
- **Agent Type**: Conversational AI with smoking cessation coaching personality

### Dynamic Variables Passed to Agent
```json
{
  "first_name": "John",
  "last_name": "Smith", 
  "sex": "male",
  "date_of_birth": "05-10-1995",
  "email": "user@mail.com",
  "smoking_duration": "3-5 years",
  "brand": "marlboro",
  "cigs_per_day": "25 or less",
  "quit_attempts": "3-5 times", 
  "long_quits": "5-10 times",
  "motivation": "Fitness/sports"
}
```

## Implementation Details

### Route Structure
- `/` - Landing page
- `/assessment` - Typeform assessment
- `/chat` - ElevenLabs Widget implementation (✅ Working)
- `/chat-v2` - ElevenLabs React SDK implementation (❌ Localhost issues)

### Widget Implementation (`/chat`)
```tsx
<elevenlabs-convai 
  agent-id={import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_2901kb13dkgbemkbxhve2tbsymd2'}
  dynamic-variables={JSON.stringify(getDynamicVariables(userProfile))}
  override-language="en"
/>
```

**Features:**
- ✅ Full-screen chat interface
- ✅ User profile integration
- ✅ Dynamic variable passing
- ✅ Works perfectly on localhost
- ✅ Real David Haye agent responses
- ✅ Voice and text interaction

### React SDK Implementation (`/chat-v2`) 
```tsx
const conversation = useConversation({
  serverLocation: 'us',
  textOnly: true,
});

await conversation.startSession({
  agentId: 'agent_2901kb13dkgbemkbxhve2tbsymd2',
  connectionType: 'websocket'
});
```

**Status:** ❌ Has WebRTC/localhost limitations
**Issues:** Requires HTTPS for WebRTC, microphone permissions, authentication setup

## User Data Flow

1. **Assessment**: User completes Typeform assessment
2. **Data Storage**: Responses stored in Supabase with user email
3. **Profile Loading**: Frontend fetches user data via `/api/user?email=`
4. **Agent Variables**: Profile data mapped to agent dynamic variables
5. **Conversation**: ElevenLabs agent receives context and provides personalized coaching

### Sample User Profile Structure
```json
{
  "id": 8,
  "email": "johnsmith@mail.com",
  "answers": {
    "First name": "John",
    "Last name": "Smith",
    "Sex": "Male", 
    "Date of birth": "2000-02-23",
    "Email address": "johnsmith@mail.com",
    "How long have you smoked cigarettes?": "3-5 years",
    "What is your preferred cigarette brand?": "Marlboro",
    "On average, how many cigarettes do you smoke per day?": "25 or less",
    "How many times have you seriously tried to quit smoking?": "3-5 times",
    "How many times have you quit smoking for 30 days or more?": "5-10 times",
    "What is your main motivation for wanting to quit smoking?": "Fitness/sports"
  },
  "submitted_at": "2025-11-25T23:21:04"
}
```

## Development Status

### ✅ Working Components
- ElevenLabs widget integration with full-screen chat UI
- User profile loading from Typeform/Supabase
- Dynamic variable passing to David Haye agent
- Real agent responses (no mock data)
- TTS with David Haye's cloned voice
- Responsive design with clean UI

### ❌ Known Issues
- React SDK has localhost WebRTC limitations
- Requires HTTPS deployment for full React SDK functionality

### 🔄 Recent Updates
- ✅ Added auto-start conversation functionality
- ✅ Enhanced widget styling for better UX  
- ✅ Comprehensive development notes saved

### Auto-Start Implementation
```tsx
const autoStartConversation = () => {
  try {
    console.log('🚀 Auto-starting ElevenLabs conversation...');
    
    // Try to find and click the start button in the ElevenLabs widget
    const widget = document.querySelector('elevenlabs-convai');
    if (widget && widget.shadowRoot) {
      const startButton = widget.shadowRoot.querySelector('[data-testid="start-button"], button[class*="start"], button[class*="action"]');
      if (startButton) {
        startButton.click();
        console.log('✅ Auto-started conversation');
      }
    }
  } catch (err) {
    console.error('❌ Error auto-starting conversation:', err);
  }
};
```

**Features Added:**
- Auto-triggers conversation 2 seconds after widget loads
- Enhanced widget button styling with hover effects
- Uses `variant="expanded"` for better visibility
- Custom action text: "Start Chat with David Haye"

## Environment Setup

### Frontend Dependencies
- `@elevenlabs/convai-widget-embed` - Widget implementation
- `@elevenlabs/react` - React SDK (for v2)
- React + TypeScript + Vite

### Backend Dependencies  
- Express.js server
- Supabase client
- Axios for API calls
- CORS enabled

### Environment Variables
**Frontend (`.env`):**
```
VITE_API_URL=http://localhost:3000
VITE_ELEVENLABS_AGENT_ID=agent_2901kb13dkgbemkbxhve2tbsymd2
```

**Backend (`backend/.env`):**
```
ElevenLabsApiKey=[API_KEY]
DAVID_HAYE_VOICE_ID=OrbzO5MF8to5NCMzleFX
[Supabase credentials]
```

## Usage Instructions

### Running the Application
1. **Frontend**: `npm run dev` (runs on port 5174)
2. **Backend**: `node index.js` (runs on port 3000) 
3. **Access**: Navigate to `/chat?email=user@mail.com`

### Testing with Sample User
- Email: `johnsmith@mail.com`
- Direct URL: `http://localhost:5174/chat?email=johnsmith@mail.com`

## Deployment Notes
- Widget version works perfectly on localhost
- For React SDK version, deploy to HTTPS environment
- Ensure ElevenLabs agent is configured as public for basic functionality
- For private agents, implement signed URL generation on backend

## Next Steps
1. Implement auto-start conversation functionality
2. Consider voice activation triggers
3. Add conversation history/persistence
4. Deploy to production HTTPS environment for React SDK testing