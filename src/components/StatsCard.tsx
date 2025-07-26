import { TrendingUp, TrendingDown } from "lucide-react";
import type { ReactNode } from "react";

interface StatsCardProps {
  topIcon: ReactNode;
  valueIcon: ReactNode;
  heading: string;
  value: string | number;
  tagline: string;
  growth: boolean;
  growthPercentage: string;
}

export default function StatsCard({
  topIcon,
  valueIcon,
  heading,
  value,
  tagline,
  growth,
  growthPercentage,
}: StatsCardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white dark:bg-neutral-900 rounded-2xl shadow cursor-pointer border-[1px] border-neutral-200 dark:border-neutral-800">
      <div className="flex justify-between items-center">
        <div className="dark:text-white text-black bg-neutral-200/70 dark:bg-neutral-800 rounded-xl p-1.5">
          {topIcon}
        </div>
        <div
          className={`${
            growth ? "bg-green-500/60" : "bg-red-400/70"
          } text-white text-xs px-2 py-0.5 rounded-full font-medium`}
        >
          {growthPercentage}
        </div>
      </div>
      <p className="text-lg font-semibold mb-1 mt-2 font-figtree text-neutral-800 dark:text-white/90">
        {heading}
      </p>
      <div className="flex flex-col gap-2 w-full">
        <span className="text-3xl flex items-center gap-2 font-bold dark:text-white text-black">
          {valueIcon} {value}
        </span>
        <span className="text-sm flex items-center gap-1 text-neutral-700/50 dark:text-white/70 tracking-wider font-figtree italic">
          {growth ? <TrendingUp /> : <TrendingDown />}
          {tagline}
        </span>
      </div>
    </div>
  );
}
