"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // ⬅️ مهم جدًا
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
