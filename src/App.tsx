import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
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
    <div>
      {!hideHeader && <Header />}{" "}
      <div className={`${!hideHeader ? "pt-20" : ""}`}>
        <AuthRoutes />
      </div>
      {!hideHeader && <Footer />}{" "}

    </div>
  );
}

export default App;
