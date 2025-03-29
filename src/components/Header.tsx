import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import useAuthStore from "../store/authStore";

export default function Header() {
  const { user, logoutUser } = useAuthStore();

  return (
    <header className="bg-base-100/50 fixed z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Logo></Logo>
            <h2 className="mr-4 text-2xl">Learnhub</h2>
          </Link>

          <ThemeToggle />
        </div>

        <div className="flex w-fit items-center gap-8">
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>

          {user == null ? (
            <>
              <Link to="/login">
                <button className="btn btn-ghost rounded-lg">Log In</button>
              </Link>

              <Link to="/register">
                <button className="btn btn-outline rounded-lg">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <span>{user.displayName}</span>

              <button
                className="btn btn-outline rounded-lg"
                onClick={logoutUser}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
