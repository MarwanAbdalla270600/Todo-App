import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between">
      <div className="flex w-60 items-center gap-2">
        <Logo></Logo>
        <h2 className="text-2xl">learnhub</h2>
      </div>

      <div className="hidden gap-8 md:flex">
        <a>How we work</a>
        <Link to="/courses">Courses</Link>
        <a>FAQ</a>
        <a>Resources</a>
      </div>

      <div className="flex w-60 justify-end gap-4">
        <ThemeToggle></ThemeToggle>

        <Link to="/login">
          <button className="btn btn-ghost rounded-lg">Log In</button>
        </Link>

        <Link to="/register">
          <button className="btn btn-outline rounded-lg">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}
