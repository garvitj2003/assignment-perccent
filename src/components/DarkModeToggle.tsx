// DarkModeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="bg-blue-400/10 hover:bg-blue-700/10 hover:shadow transition-all duration-300 cursor-pointer p-1.5 rounded-lg"
    >
      {dark ? <Sun size={"20px"}/> : <Moon size={"20px"}/>}
    </button>
  );
}
