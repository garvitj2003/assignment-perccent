import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Hero() {
  // Fake sales data for demonstration
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Sales ($)",
        data: [42000, 38000, 55000, 47000, 71000, 84000, 68000, 79000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return `Sales: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        hoverBackgroundColor: "rgb(59, 130, 246)",
        hoverBorderColor: "rgb(255, 255, 255)",
        hoverBorderWidth: 3,
      },
    },
  };

  return (
    <div className="w-full mt-8 gap-2 grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-3">
        <div className="bg-blue-400/10 rounded-lg shadow-lg p-1 ">
          <h1 className="text-3xl font-bold font-figtree mb-4">
            Sales Analytics
          </h1>
          <div style={{ height: "calc(100% - 3rem)" }}>
            <Line data={salesData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 p-1">
        <h1 className="text-3xl font-bold font-figtree ">Summary</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-400/30 h-56 rounded-lg"></div>
          <div className="bg-green-500/50 h-32 rounded-lg"></div>
          <div className="bg-red-500/50 h-32 rounded-lg"></div>
          <div className="bg-yellow-500/50 h-32 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
