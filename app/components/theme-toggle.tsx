"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeType = "system" | "light" | "dark";

const ThemeToggle = () => {
  const themes: ThemeType[] = ["system", "light", "dark"];
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Indicates the component has mounted
    const savedTheme = localStorage.getItem("theme");
    const themeIndex =
      savedTheme && themes.includes(savedTheme as ThemeType)
        ? themes.indexOf(savedTheme as ThemeType)
        : themes.indexOf("system");

    setCurrentThemeIndex(themeIndex); // Set the current theme index based on saved theme
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMounted) {
      updateTheme(themes[currentThemeIndex]); // Update theme when currentThemeIndex changes
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentThemeIndex, isMounted]);

  const updateTheme = (theme: ThemeType) => {
    if (theme === "system") {
      document.documentElement.classList.remove("dark");
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      document.documentElement.classList.toggle("dark", mediaQuery.matches);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextThemeIndex);
  };

  const getIcon = () => {
    switch (themes[currentThemeIndex]) {
      case "light":
        return <Sun size={16} className="cursor-pointer text-lightheading" />;
      case "dark":
        return <Moon size={16} className="cursor-pointer text-darkheading" />;
      case "system":
      default:
        return (
          <Monitor
            size={16}
            className="cursor-pointer text-lightheading dark:text-darkheading"
          />
        );
    }
  };
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="dark:border-dark rounded-full border border-lightheading bg-lighthighlight p-1.5 dark:border-darkheading dark:bg-darkhighlight"
      onClick={toggleTheme}
    >
      {getIcon()}
    </div>
  );
};

export default ThemeToggle;
