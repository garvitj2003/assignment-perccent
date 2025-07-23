import { Menu, Bell } from "lucide-react";
import { useRef, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full flex justify-between items-center my-1 p-2 border-b border-neutral-200 dark:border-neutral-900">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Menu className="cursor-pointer" />
        <Divider height="h-6" />
        <div className="text-2xl font-bold">Dashboard</div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <DarkModeToggle />

        {/* Hide search on very small screens, show on sm and larger */}
        <div className="hidden sm:flex items-center gap-2">
          <Divider height="h-4" />
          <div className="relative w-32 md:w-48">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="search"
              className="bg-blue-400/10 outline-yellow-300/80  w-full rounded-lg px-3 py-1"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs dark:bg-neutral-950 rounded py-0.5 px-2">
              ⌘+K
            </span>
          </div>
          <Divider height="h-4" />
        </div>

        <div className="relative cursor-pointer bg-blue-400/10 hover:bg-blue-700/10 hover:shadow transition-all duration-300 p-1.5 rounded-lg" title="3 new notifications">
          <Bell
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
            size={20}
          />
          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500/80 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}
const Divider = ({ height }: { height: string }) => {
  return (
    <div className={`w-[1px] ${height} dark:bg-neutral-700 bg-neutral-400`} />
  );
};
