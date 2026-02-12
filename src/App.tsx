import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingLayout } from "@/polymet/layouts/landing-layout";
import { SmartNicotineLanding } from "@/polymet/pages/smart-nicotine-landing";
import { AssessmentPage } from "@/polymet/pages/assessment";
import ChatPage from "@/components/ChatPage";
import ChatV2 from "@/components/ChatV2";
import LandingPage from "@/components/LandingPage";
import IqosPage from "@/components/IqosPage";
import VapesPage from "@/components/VapesPage";
import NicotinePouchesPage from "@/components/NicotinePouchesPage";
import HeatedTobaccoPage from "@/components/HeatedTobaccoPage";

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
        <Route
          path="/iqos"
          element={<IqosPage />}
        />
        <Route
          path="/vapes"
          element={<VapesPage />}
        />
        <Route
          path="/nicotine-pouches"
          element={<NicotinePouchesPage />}
        />
        <Route
          path="/heated-tobacco"
          element={<HeatedTobaccoPage />}
        />
      </Routes>
    </Router>
  );
}
