import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Maximize2 } from "lucide-react";
Chart.register(ArcElement, Tooltip, Legend);

const tableData = [
  { Name: "Alice Johnson", Status: "Paid", Date: "2024-06-01", Amount: 120.5 },
  { Name: "Bob Smith", Status: "Pending", Date: "2024-06-03", Amount: 89.99 },
  { Name: "Charlie Lee", Status: "Failed", Date: "2024-05-28", Amount: 45.0 },
  { Name: "Diana Prince", Status: "Paid", Date: "2024-06-02", Amount: 230.0 },
  { Name: "Evan Wright", Status: "Refunded", Date: "2024-05-30", Amount: 60.0 },
  { Name: "Fiona Adams", Status: "Paid", Date: "2024-06-04", Amount: 150.75 },
  { Name: "George King", Status: "Pending", Date: "2024-06-05", Amount: 99.99 },
  { Name: "Hannah Scott", Status: "Paid", Date: "2024-06-01", Amount: 75.25 },
  { Name: "Isabel Turner", Status: "Paid", Date: "2024-06-06", Amount: 180.0 },
  { Name: "Jack Miller", Status: "Failed", Date: "2024-06-07", Amount: 55.5 },
  {
    Name: "Karen Brooks",
    Status: "Pending",
    Date: "2024-06-08",
    Amount: 210.0,
  },
  {
    Name: "Liam Carter",
    Status: "Refunded",
    Date: "2024-06-09",
    Amount: 65.75,
  },
];

export default function Secondary() {
  const paidCount = tableData.filter((row) => row.Status === "Paid").length;
  const overdueCount = tableData.filter(
    (row) => row.Status === "Pending"
  ).length;
  const unpaidCount = tableData.filter(
    (row) => row.Status === "Failed" || row.Status === "Refunded"
  ).length;

  return (
    <div className="w-full mt-4 gap-4 grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-2">
        <div className=" shadow border  border-neutral-200 dark:border-neutral-800 w-full flex flex-col justify-between gap-8 bg-white dark:bg-neutral-900 rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-figtree font-semibold text-neutral-600 dark:text-white/70">
              Invoice Statistics
            </span>
            <Maximize2 className="cursor-pointer text-neutral-500 " />
          </div>
          <div className="grid w-full grid-cols-2 gap-4">
            <div>
              <Doughnut
                data={{
                  labels: ["Total Paid", "Total Overdue", "Total Unpaid"],
                  datasets: [
                    {
                      data: [paidCount, overdueCount, unpaidCount],
                      backgroundColor: [
                        "#232e97d3", // Paid (dark)
                        "#6366F1", // Overdue (blue)
                        "#E5E7EB", // Unpaid (light gray)
                      ],
                      borderWidth: 0,
                    },
                  ],
                }}
                options={{
                  cutout: "75%",
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          return `${context.label}: ${context.parsed}`;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="space-y-3">
                <div>
                  <h2 className="text-neutral-600 font-semibold dark:text-white/70">
                    Total paid
                  </h2>
                  <div className="flex text-xl items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-[#232e97d3]" />
                    534
                  </div>
                </div>
                <div>
                  <h2 className="text-neutral-600 font-semibold dark:text-white/70">
                    Total Overdue
                  </h2>
                  <div className="flex text-xl items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-[#6366F1]" />
                    286
                  </div>
                </div>
                <div>
                  <h2 className="text-neutral-600 font-semibold dark:text-white/70">
                    Total Unpaid
                  </h2>
                  <div className="flex text-xl items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-[#E5E7EB]" />
                    534
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*table area */}
      <div className="col-span-1 lg:col-span-3 flex flex-col">
        <div className="shadow border border-neutral-200 dark:border-neutral-800 w-full bg-white dark:bg-neutral-900 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-figtree font-semibold text-neutral-600 dark:text-white/70">
              Recent Invoices
            </span>
            <Maximize2 className="cursor-pointer text-neutral-500" />
          </div>

          <div className="overflow-x-auto max-h-96 overflow-y-auto hide-scrollbar">
            <table className="w-full min-w-[600px]">
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                    No
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                    Customer Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                    Order Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => {
                  const getStatusColor = (status: string) => {
                    switch (status.toLowerCase()) {
                      case "paid":
                        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
                      case "pending":
                        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
                      case "failed":
                        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
                      case "refunded":
                        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
                      default:
                        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
                    }
                  };

                  const getInitials = (name: string) => {
                    return name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase();
                  };

                  return (
                    <tr
                      key={index}
                      className={`border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors ${
                        index % 2 === 1 ? "bg-blue-400/10" : ""
                      }`}
                    >
                      <td className="py-4 px-4">
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                          {index + 1}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                            {getInitials(row.Name)}
                          </div>
                          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                            {row.Name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">
                          {new Date(row.Date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            row.Status
                          )}`}
                        >
                          {row.Status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                          ${row.Amount.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
