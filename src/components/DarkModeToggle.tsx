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
      className="dark:bg-neutral-900 bg-neutral-200 hover:bg-neutral-300 hover:dark:bg-neutral-800 transition-all duration-300 cursor-pointer p-1.5 rounded-lg"
    >
      {dark ? <Sun size={"20px"}/> : <Moon size={"20px"}/>}
    </button>
  );
}
