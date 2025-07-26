import { Search, Clock, X, ChevronRight } from "lucide-react";

interface SearchModalProps {
  // No longer need isOpen and onClose props for CSS-only version
}

export default function SearchModal({}: SearchModalProps) {
  const recentSearches = [
    "How many new users we got",
    "Failed transactions",
    "New invoices",
  ];

  return (
    <>
      {/* Modal trigger checkbox - hidden but controls modal state */}
      <input
        type="checkbox"
        id="search-modal-trigger"
        className="hidden peer"
      />

      {/* Overlay - shown when checkbox is checked */}
      <label
        htmlFor="search-modal-trigger"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto cursor-pointer"
      />

      {/* Modal Content - responsive design */}
      <div
        className="fixed z-50 transition-all duration-300 scale-95 opacity-0 pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:pointer-events-auto
                      /* Mobile: full screen approach */
                      inset-x-4 top-16 bottom-auto max-h-[80vh]
                      /* Tablet and up: centered modal */
                      sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:inset-x-auto sm:bottom-auto sm:max-h-[70vh]
                      sm:w-full sm:max-w-lg sm:mx-4
                      /* Desktop: larger modal */
                      lg:max-w-xl"
      >
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xs rounded-2xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 relative h-full sm:h-auto">
          {/* Header with Search Input */}
          <div className="relative border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-3 p-3 sm:p-4">
              <Search
                className="text-neutral-500 dark:text-neutral-400 shrink-0"
                size={20}
              />
              <input
                type="text"
                placeholder="Search transactions, accounts..."
                className="flex-1 bg-transparent text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 outline-none text-sm sm:text-base min-w-0"
                autoFocus
              />
              {/* Close button with esc badge */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400 text-xs bg-neutral-100 dark:bg-neutral-800 rounded py-0.5 px-2">
                  esc
                </span>
                <label
                  htmlFor="search-modal-trigger"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors p-2 sm:p-1 rounded-lg hover:bg-blue-400/10 cursor-pointer touch-manipulation"
                >
                  <X size={18} className="sm:w-4 sm:h-4" />
                </label>
              </div>
            </div>
          </div>

          {/* Content area with scroll for mobile */}
          <div className="p-3 sm:p-4 overflow-y-auto max-h-[calc(80vh-80px)] sm:max-h-none">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Search
                className="text-neutral-500 dark:text-neutral-400 shrink-0"
                size={16}
              />
              <span className="text-neutral-700 dark:text-neutral-200 text-sm font-medium">
                Recent Searches
              </span>
            </div>

            <div className="space-y-1">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 sm:p-3 rounded-lg hover:bg-blue-400/10 active:bg-blue-400/20 transition-colors group text-left touch-manipulation min-h-[48px] sm:min-h-0"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Clock
                      className="text-neutral-500 dark:text-neutral-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 shrink-0"
                      size={16}
                    />
                    <span className="text-neutral-700 dark:text-neutral-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 text-sm sm:text-sm truncate">
                      {search}
                    </span>
                  </div>
                  <ChevronRight
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-all shrink-0 ml-2"
                    size={16}
                  />
                </button>
              ))}
            </div>

            {/* Mobile spacing helper */}
            <div className="h-4 sm:hidden" />
          </div>
        </div>
      </div>
    </>
  );
}
