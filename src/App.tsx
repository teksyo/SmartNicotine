import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingLayout } from "@/polymet/layouts/landing-layout";
import { SmartNicotineLanding } from "@/polymet/pages/smart-nicotine-landing";

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
      </Routes>
    </Router>
  );
}
