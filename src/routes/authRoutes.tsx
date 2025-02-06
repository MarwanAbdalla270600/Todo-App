import { Navigate, Route, Routes } from "react-router";
import useAuthStore from "../store/authStore";
import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";

export default function AuthRoutes() {
  const { user } = useAuthStore();

  return (
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
  );
}
