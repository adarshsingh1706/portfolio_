"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Force dark mode
    localStorage.setItem("theme", "dark"); // Ensure it persists
  }, []);

  return <div className="dark">{children}</div>;
}
