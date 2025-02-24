import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    console.log("Current body classes:", document.body.classList);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-300 dark:bg-gray-600 text-black dark:text-white"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
