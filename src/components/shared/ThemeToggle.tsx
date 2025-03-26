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
        <path d="M5.64 17.36A9 9 0 1117.36 5.64 9 9 0 015.64 17.36z" />
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
