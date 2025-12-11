import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComingSoonPage } from "@/polymet/pages/coming-soon";

export default function SmartNicotineApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />

        <Route path="/coming-soon" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}
