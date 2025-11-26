import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingLayout } from "@/polymet/layouts/landing-layout";
import { SmartNicotineLanding } from "@/polymet/pages/smart-nicotine-landing";
import { AssessmentPage } from "@/polymet/pages/assessment";
import ChatPage from "@/components/ChatPage";

export default function SmartNicotineApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingLayout>
              <SmartNicotineLanding />
            </LandingLayout>
          }
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
      </Routes>
    </Router>
  );
}
