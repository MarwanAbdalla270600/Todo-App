import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthRoutes from "./routes/authRoutes";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const { loading } = useAuthStore();
  const location = useLocation();

  const hideHeader = ["/login", "/register"].includes(location.pathname);

  // Show a loading state while Firebase checks authentication
  if (loading) return <p>Loading...</p>;

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeader && <Header />}{" "}
      <div className={`${!hideHeader ? "pt-20" : ""} flex-1`}>
        <AuthRoutes />
      </div>
      {!hideHeader && <Footer />}{" "}
    </div>
  );
}

export default App;
