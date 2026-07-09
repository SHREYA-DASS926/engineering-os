import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";
import { useApplyThemeOnAppStart } from "./hooks/useTheme";

const LoginPage = lazy(() => import("./features/auth/pages/LoginPage"));
const SignupPage = lazy(() => import("./features/auth/pages/SignupPage"));

const Dashboard = lazy(() => import("./pages/Dashboard"));
const StudyTracker = lazy(() => import("./pages/StudyTracker"));
const CodingTracker = lazy(() => import("./pages/CodingTracker"));
const CareerHub = lazy(() => import("./pages/CareerHub"));
const InternshipTracker = lazy(() => import("./pages/InternshipTracker"));
const ExpenseTracker = lazy(() => import("./pages/ExpenseTracker"));
const PlacementReadiness = lazy(() => import("./pages/PlacementReadiness"));
const AIAssistant = lazy(() => import("./pages/AIAssistant"));
const Settings = lazy(() => import("./pages/Settings"));
const Opportunities = lazy(() => import("./pages/Opportunities"));
const OpportunityDetails = lazy(() => import("./pages/OpportunityDetails"));

function App() {
  useApplyThemeOnAppStart();
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-600">
            Loading EngOS...
          </div>
        }
      >
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
            <Route path="/study" element={<StudyTracker />} />
            <Route path="/coding" element={<CodingTracker />} />
            <Route path="/career" element={<CareerHub />} />
            <Route path="/internships" element={<InternshipTracker />} />
            <Route path="/expenses" element={<ExpenseTracker />} />
            <Route path="/placement" element={<PlacementReadiness />} />
            <Route path="/ai" element={<AIAssistant />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/opportunities/:id" element={<OpportunityDetails />} />
          </Route>
        </Routes>
      </Suspense>

      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App;