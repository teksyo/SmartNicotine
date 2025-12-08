import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingLayout } from "@/polymet/layouts/landing-layout";
import { SmartNicotineLanding } from "@/polymet/pages/smart-nicotine-landing";
import { AssessmentPage } from "@/polymet/pages/assessment";
import ChatPage from "@/components/ChatPage";
import ChatV2 from "@/components/ChatV2";
import LandingPage from "@/components/LandingPage";

export default function SmartNicotineApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/assessment"
          element={
            <LandingLayout>
              <AssessmentPage />
            </LandingLayout>
          }
        />
        <Route
          path="/chat"
          element={<ChatPage />}
        />
        <Route
          path="/chat-v2"
          element={<ChatV2 />}
        />
      </Routes>
    </Router>
  );
}
