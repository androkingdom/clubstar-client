// contexts/theme.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { createCookie } from "react-router";

// Types
export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Server-side cookie
export const themeCookie = createCookie("theme", {
  maxAge: 60 * 60 * 24 * 365, // 1 year
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});

// Server-side theme getter
export async function getTheme(request: Request): Promise<Theme> {
  const cookieHeader = request.headers.get("Cookie");
  const theme = await themeCookie.parse(cookieHeader);
  return theme || "system";
}

// Context
const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

// Provider Component
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initial hydration from cookie (SSR-safe)
  useEffect(() => {
    // Check if we have a cookie value first
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1] as Theme;

    const resolvedTheme = cookieValue || defaultTheme;
    setThemeState(resolvedTheme);
    setIsHydrated(true);
  }, [defaultTheme]);

  // Apply theme to DOM
  useEffect(() => {
    if (!isHydrated) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(appliedTheme);

    // Save to cookie
    document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`;

    // Optional: Also save to localStorage as backup
    localStorage.setItem(storageKey, theme);
  }, [theme, isHydrated, storageKey]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value: ThemeProviderState = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
