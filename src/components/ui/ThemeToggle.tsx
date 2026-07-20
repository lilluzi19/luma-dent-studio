"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    const currentTheme =
      html.getAttribute("data-theme") === "dark" ? "dark" : "light";

    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const activeTheme =
      html.getAttribute("data-theme") === "dark" ? "dark" : "light";

    const nextTheme: Theme =
      activeTheme === "dark" ? "light" : "dark";

    html.classList.add("theme-changing");
    html.setAttribute("data-theme", nextTheme);

    localStorage.setItem("theme", nextTheme);
    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;

    setTheme(nextTheme);

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    transitionTimer.current = setTimeout(() => {
      html.classList.remove("theme-changing");
    }, 650);
  };

  return (
    <button
      id="theme-toggle"
      className="theme-switch"
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="switch-bg">
        <span className="sun" />
        <span className="moon" />
      </span>
    </button>
  );
}