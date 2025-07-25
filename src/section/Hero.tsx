import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  BadgeDollarSign,
  ListFilterPlus,
  TrendingUp,
  User,
} from "lucide-react";
import StatsCard from "../components/StatsCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Hero() {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Seen product",
        data: [2500, 4500, 3500, 4300, 2400, 3200, 3000],
        backgroundColor: "rgba(56, 63, 75, 0.5)", // gray-400/50
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        borderColor: "rgba(156, 163, 175, 0.8)",
        borderWidth: 1,
      },
      {
        label: "Sales",
        data: [1000, 2500, 2800, 3978, 2800, 3400, 2400],
        backgroundColor: "rgba(99, 102, 241, 0.5)", // indigo-500/50
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        borderColor: "rgba(99, 102, 241, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#1E40AF",
        borderWidth: 0,
        cornerRadius: 12,
        displayColors: false,
        padding: 12,
        callbacks: {
          label: function (context: any) {
            return `${
              context.dataset.label
            }: ${context.parsed.y.toLocaleString()} Products`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(156, 163, 175, 0.1)",
          lineWidth: 1.5,
          display: true,

          drawBorder: false,
        } as any,
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
          drawBorder: false,
        } as any,
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
    },
    layout: {},
  };

  return (
    <div className="w-full mt-8 gap-4  grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-3 flex flex-col">
        <h1 className="text-3xl font-bold font-figtree mb-4">
          Sales Analytics
        </h1>
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-4 h-full">
          <div className="h-[300px] lg:h-full flex-grow">
            <Bar data={salesData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 ">
        <h1 className="text-3xl font-bold font-figtree mb-4">Summary</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col p-4 rounded-2xl bg-gradient-to-br from-blue-500/50 to-indigo-600/50 gap-2  shadow-lg w-full">
            <div className="flex justify-between items-center">
              <div className="dark:text-white text-black bg-white dark:bg-neutral-900 rounded-xl p-1.5">
                <BadgeDollarSign size={24} />
              </div>
              <div className=" bg-green-500/60 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                +2.08%
              </div>
            </div>

            <p className="text-lg font-semibold text-white/90 mb-1 mt-2 font-figtree">
              Revenue
            </p>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-3xl font-bold text-white">$1097.89</h2>
              <span className="text-sm flex items-center gap-1 text-white/70 tracking-wider font-figtree italic">
                <TrendingUp />
                Progressing slowly
              </span>
            </div>
          </div>

         
          <StatsCard
            topIcon={ListFilterPlus}
            valueIcon={User}
            heading="Total Users"
            value={798}
            tagline="Users have shown interest"
            growth={true}
            growthPercentage="+12.45%"
          />
          <div className="bg-red-500/50 h-32 rounded-lg"></div>
          <div className="bg-yellow-500/50 h-32 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
