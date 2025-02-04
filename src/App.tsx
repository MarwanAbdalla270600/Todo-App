import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const { user, loading } = useAuthStore();

  // 🔹 Show a loading screen until Firebase finishes checking authentication
  if (loading) return <p>Loading...</p>;

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <div className="container mx-auto">
      {/* <LandingPage></LandingPage> */}
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
