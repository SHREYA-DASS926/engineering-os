import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import DashboardV2 from "./pages/DashboardV2";

import CareerHub from "./pages/CareerHub";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import StudyTracker from "./pages/StudyTracker";
import CodingTracker from "./pages/CodingTracker";
import InternshipTracker from "./pages/InternshipTracker";
import ExpenseTracker from "./pages/ExpenseTracker";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import PlacementReadiness from "./pages/PlacementReadiness";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard-v2" element={<DashboardV2 />} />
          <Route path="/study" element={<StudyTracker />} />
          <Route path="/coding" element={<CodingTracker />} />
          <Route path="/career" element={<CareerHub />} />
          <Route path="/internships" element={<InternshipTracker />} />
          <Route path="/expenses" element={<ExpenseTracker />} />
          <Route path="/placement" element={<PlacementReadiness />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App;