import React from "react";
import {
  LayoutDashboard,
  FileText,
  Box,
  Users,
  Receipt,
  Settings,
  MessageCircle,
  HelpCircle,
  LogOut,
  CreditCard,
  ChevronsLeft,
} from "lucide-react";
import Avatar from "./Avatar";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navSections = [
  {
    header: "MENU",
    items: [
      {
        label: "Dashboard",
        icon: <LayoutDashboard size={18} />, // highlighted
        active: true,
      },
      {
        label: "Report",
        icon: <FileText size={18} />,
      },
      {
        label: "Products",
        icon: <Box size={18} />,
      },
      {
        label: "Consumer",
        icon: <Users size={18} />,
      },
    ],
  },
  {
    header: "FINANCIAL",
    items: [
      {
        label: "Transactions",
        icon: <CreditCard size={18} />,
      },
      {
        label: "Invoices",
        icon: <Receipt size={18} />,
      },
    ],
  },
  {
    header: "TOOLS",
    items: [
      {
        label: "Settings",
        icon: <Settings size={18} />,
      },
      {
        label: "Feedback",
        icon: <MessageCircle size={18} />,
      },
      {
        label: "Help",
        icon: <HelpCircle size={18} />,
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-neutral-900 border  border-neutral-200 dark:border-neutral-800 rounded-r-2xl shadow-lg z-40 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        <div className="p-4 border-b  border-neutral-100 dark:border-neutral-800 font-semibold text-neutral-800 dark:text-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar/>
            <div>
                <div>Garvit Jain</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">garvitj2003@gmail.com</div>
            </div>
          </div>
          <button
            className="text-neutral-600 cursor-pointer dark:text-neutral-300 hover:text-red-500 text-xl transition-all duration-300"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <ChevronsLeft/>
          </button>
        </div>
        <nav className="px-2 py-4 flex flex-col gap-2">
          {navSections.map((section) => (
            <div key={section.header} className="mb-2">
              <div className="px-2 pb-1 text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-widest">
                {section.header}
              </div>
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      className={`flex cursor-pointer items-center gap-3 px-3 py-2 rounded-lg transition text-sm font-medium
                        ${
                          item.active
                            ? "bg-gradient-to-br from-indigo-500/40 to-indigo-600/50 text-white shadow-lg"
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-blue-400/10  hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
                        }
                      `}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-neutral-100 dark:border-neutral-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-700 dark:hover:text-red-300 transition text-sm font-medium">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
