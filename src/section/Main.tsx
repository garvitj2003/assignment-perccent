import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  BadgeDollarSign,
  CalendarSync,
  CircleFadingPlus,
  ListFilterPlus,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  User,
} from "lucide-react";
import StatsCard from "../components/StatsCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Seen product",
        data: [1886, 3552, 3500, 4300, 2400, 3200, 3000],
        backgroundColor: "rgba(156, 163, 175, 0.1)",
        borderColor: "rgba(156, 163, 175, 0.8)",
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "rgba(156, 163, 175, 0.8)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
      {
        label: "Sales",
        data: [865, 2543, 3244, 3978, 2800, 3400, 2400],
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgba(99, 102, 241, 0.8)",
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "rgba(99, 102, 241, 0.8)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
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
          stepSize: 1000,
          callback: function (value: any) {
            return value >= 1000 ? value / 1000 + "k" : value;
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
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer rounded-2xl shadow p-4 h-full">
          <div className="h-[300px] lg:h-full flex-grow">
            <Line data={salesData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 ">
        <h1 className="text-3xl font-bold font-figtree mb-4">Summary</h1>
        {/* grid 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-items-center ">
          <div className="flex flex-col p-4 rounded-2xl cursor-pointer hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-200 bg-gradient-to-br from-indigo-500/40 to-indigo-600/50 gap-2 shadow-lg w-[90%] lg:w-full">
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

          <div className="w-[90%] lg:w-full">
            <StatsCard
              topIcon={
                <ListFilterPlus size={24} className="text-blue-600/80" />
              }
              valueIcon={<User className="text-indigo-600/80" />}
              heading="Total Users"
              value={798}
              tagline="Users have shown interest"
              growth={true}
              growthPercentage="+12.45%"
            />
          </div>
          <div className="w-[90%] lg:w-full">
            <StatsCard
              topIcon={
                <ShoppingCart size={24} className="text-yellow-600/80" />
              }
              valueIcon={<ShoppingBag className="text-emerald-600/80" />}
              heading="Products Sold"
              value={2448}
              tagline="Dip in sales"
              growth={false}
              growthPercentage="-12.45%"
            />
          </div>
          <div className="w-[90%] lg:w-full">
            <StatsCard
              topIcon={
                <CalendarSync size={24} className="text-purple-600/90" />
              }
              valueIcon={<CircleFadingPlus className="text-rose-600/80" />}
              heading="Conversion Rate"
              value={"13.2%"}
              tagline="Most significant increase"
              growth={true}
              growthPercentage="+22.45%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
