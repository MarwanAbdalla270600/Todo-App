import Logo from "../components/Logo";
import useAuthStore from "../store/authStore";

export default function DashboardPage() {
  const { user, logoutUser } = useAuthStore();

  return (
    <div className="flex">
      <main>
        <header className="flex justify-between gap-6 py-12">
          <div className="flex items-center gap-2">
            <Logo></Logo>
            <h2 className="text-2xl">learn</h2>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-xl">{user?.displayName}</h2>
            <button onClick={logoutUser} className="btn btn-outline rounded-lg">
              Sign Out
            </button>
          </div>
        </header>
        <h1 className="text-4xl">This is the Dashboard</h1>
      </main>
    </div>
  );
}
