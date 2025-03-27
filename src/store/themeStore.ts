import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light", // default fallback

  setTheme: (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    set({ theme });
  },

  toggleTheme: () => {
    const current = get().theme;
    const newTheme = current === "dark" ? "light" : "dark";
    get().setTheme(newTheme);
  },

  initTheme: () => {
    const stored = localStorage.getItem("theme") as Theme | null;
    get().setTheme(stored ?? "light");
  },
}));
