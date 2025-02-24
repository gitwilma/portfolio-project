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
      className={`w-12 h-12 rounded-full p-2 flex items-center justify-center transition-all duration-300 transform ml-45 mt-10
    ${
      theme === "light"
        ? "bg-black shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        : "bg-[#F4E1C4] shadow-[0_0_15px_rgba(244,161,97,0.8)]"
    } 
    hover:shadow-2xl focus:outline-none hover:scale-105 cursor-pointer`}
      style={{
        transform: theme === "light" ? "translateX(0)" : "translateX(16px)",
      }}
    >
      <span
        className={`w-6 h-6 rounded-full ${
          theme === "light" ? "bg-[#F4D03F]" : "bg-gray-800"
        }`}
      />
    </button>
  );
};

export default ThemeSwitcher;
