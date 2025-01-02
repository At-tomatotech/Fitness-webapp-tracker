import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { ResultsPage } from "./pages/ResultsPage";
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { DashboardPage } from "./pages/DashboardPage";

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar session={session} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/calculator" 
              element={session ? <CalculatorPage /> : <LoginPage />} 
            />
            <Route 
              path="/results" 
              element={session ? <ResultsPage /> : <LoginPage />} 
            />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/dashboard" 
              element={session ? <DashboardPage /> : <LoginPage />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
