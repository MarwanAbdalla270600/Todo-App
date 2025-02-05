import useAuthStore from "../store/authStore";

export default function DashboardPage() {
  const { user, logoutUser } = useAuthStore();

  return (
    <div>
      <header className="flex justify-end gap-6 py-12">
        <h2 className="text-xl">{user?.email}</h2>
        <button onClick={logoutUser} className="btn btn-neutral shadow-none">
          Sign Out
        </button>
      </header>
      <h1 className="text-4xl">This is the Dashboard</h1>
    </div>
  );
}
