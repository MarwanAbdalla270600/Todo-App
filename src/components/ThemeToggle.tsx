import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeStore } from "../store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
        aria-label="Toggle Theme"
      />

      {/* 🌙 Moon (shown when in dark mode) */}
      <FaMoon className="swap-on h-5 w-5 text-base" />

      {/* 🌞 Sun (shown when in light mode) */}
      <FaSun className="swap-off h-5 w-5 text-base" />
    </label>
  );
}
