import { Menu, Bell, User } from "lucide-react";
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
    <div className="w-full flex justify-between items-center my-1 py-2 border-b border-neutral-200 dark:border-neutral-900">
      <div className="flex items-center  gap-2 text-2xl font-bold">
        <Menu className="cursor-pointer" />
        <Divider height="h-6" />
        <div className="border-1 border-neutral-700 w-8 h-8 p-1.5 bg-neutral-200 dark:bg-neutral-900 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          <User className="text-black dark:text-white" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DarkModeToggle />
        <Divider height="h-4" />
        <div className="relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="search"
            className="bg-neutral-200 dark:bg-neutral-900/50 rounded-lg px-3 py-1"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs dark:bg-neutral-950 rounded py-0.5 px-2">
            ⌘+K
          </span>
        </div>

        <Divider height="h-4" />
        <div className="relative cursor-pointer" title="3 new notifications">
          <Bell className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors" size={20} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center"></div>
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
