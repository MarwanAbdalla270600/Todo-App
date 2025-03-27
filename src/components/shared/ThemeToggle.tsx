import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        aria-label="Toggle Theme"
      />

      {/* Light Icon */}
      <svg
        className="swap-on h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 4.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0112 4.75zM12 19.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM4.75 12a.75.75 0 01.75-.75v-.5a.75.75 0 011.5 0v.5A.75.75 0 016.25 12zm13 0a.75.75 0 01.75-.75v-.5a.75.75 0 011.5 0v.5a.75.75 0 01-.75.75zM7.47 7.47a.75.75 0 011.06 0l.35.35a.75.75 0 01-1.06 1.06l-.35-.35a.75.75 0 010-1.06zm8 8a.75.75 0 011.06 0l.35.35a.75.75 0 01-1.06 1.06l-.35-.35a.75.75 0 010-1.06zM16.53 7.47a.75.75 0 010 1.06l-.35.35a.75.75 0 11-1.06-1.06l.35-.35a.75.75 0 011.06 0zM7.47 16.53a.75.75 0 010 1.06l-.35.35a.75.75 0 01-1.06-1.06l.35-.35a.75.75 0 011.06 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
      </svg>

      {/* Dark Icon */}
      <svg
        className="swap-off h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
      </svg>
    </label>
  );
}
