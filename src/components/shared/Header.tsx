import { Link } from "react-router";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-base-100/50 fixed z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex w-60 items-center gap-2">
          <Logo></Logo>
          <h2 className="text-2xl">Learnhub</h2>
        </div>

        <div className="hidden gap-8 md:flex">
          <Link to="/">How we work</Link>
          <Link to="/courses">Courses</Link>
          <a>Membership</a>
          <Link to="/contact">Contact</Link>
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
      </div>
    </header>
  );
}
