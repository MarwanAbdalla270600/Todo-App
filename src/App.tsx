import "./App.css";
import Header from "./components/shared/Header";
import AuthRoutes from "./routes/authRoutes";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";

function App() {
  const initAuth = useAuthStore((state) => state.initAuth);
  const { loading } = useAuthStore();

  // Show a loading state while Firebase checks authentication
  if (loading) return <p>Loading...</p>;

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <div>
      <Header></Header>
      <div className="pt-20 max-w-7xl px-4 mx-auto">
        <AuthRoutes />
      </div>
    </div>
  );
}

export default App;
