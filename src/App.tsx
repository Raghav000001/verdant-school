import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { DashboardLayout } from "@/layouts/DashboardLayout";

// Pages
import { Dashboard } from "@/pages/Dashboard";
import { Login } from "@/pages/auth/Login";
import { ForgotPassword } from "@/pages/auth/ForgotPassword";
import { VerifyOTP } from "@/pages/auth/VerifyOTP";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/verify-otp" element={<VerifyOTP />} />
          
          {/* Dashboard Routes */}
          <Route path="/" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          
          {/* Placeholder routes for future pages */}
          <Route path="/admissions" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Admissions</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/exams" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Exams</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/results" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Results</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/fees" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Fees</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/hostel" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Hostel</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/library" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Library</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/students" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Students</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/teachers" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Teachers</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          <Route path="/settings" element={
            <DashboardLayout>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </DashboardLayout>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
