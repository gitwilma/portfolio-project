import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full p-1 flex items-center justify-between relative transition-all duration-300 shadow-md hover:scale-105
        ${
          theme === "light"
            ? "bg-gray-200"
            : "bg-[#F4E1C4] shadow-[0_0_15px_rgba(244,161,97,0.8)]"
        }
      `}
    >
      {/* Sol-symbolen */}
      <span
        className={`text-xl transition-all duration-300 ${
          theme === "light" ? "text-yellow-500" : "text-gray-600"
        }`}
      >
        ☀️
      </span>

      {/* Måne-symbolen */}
      <span
        className={`text-xl transition-all duration-300 ${
          theme === "dark" ? "text-indigo-900" : "text-gray-300"
        }`}
      >
        🌙
      </span>

      {/* Växlingsknapp */}
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md absolute transition-all duration-300 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeSwitcher;
