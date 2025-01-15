import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import useFetchLinks from "../hooks/useFetchLinks"; // Adjust the path to your hook file
import { Chart as ChartJS, BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { ChartOptions } from "./ChartOptions";

ChartJS.register(BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

export const LinksTable = () => {
  const { data, loading, error } = useFetchLinks("http://localhost:3000/links");
  const { pieChartOptions, barChartOptions } = ChartOptions();

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Preparing the charts data based on the received data
  const browserData = {};
  const deviceData = {};
  const clickData = [];
  const labels = [];

  console.log(data);
  data.forEach((item) => {
    labels.push(item.shortUrl);
    clickData.push(item.totalClicks);

    // Used the already aggregated browserAnalytics from the API
    Object.entries(item.browserAnalytics).forEach(([browser, count]) => {
      browserData[browser] = (browserData[browser] || 0) + count;
    });

    // Used the already aggregated deviceAnalytics from the API
    Object.entries(item.deviceAnalytics).forEach(([device, count]) => {
      deviceData[device] = (deviceData[device] || 0) + count;
    });
  });

  const browserChartData = {
    labels: Object.keys(browserData),
    datasets: [
      {
        label: "Browser Analytics",
        data: Object.values(browserData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderColor: "#000000", // Black border color
        borderWidth: 2 // Border width
      },
    ],
  };

  const deviceChartData = {
    labels: Object.keys(deviceData),
    datasets: [
      {
        label: "Device Analytics",
        data: Object.values(deviceData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderColor: "#000000", // Black border color
        borderWidth: 2 // Border width
      },
    ],
  };

  const totalClicksChartData = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: clickData,
        backgroundColor: "#36A2EB",
        borderColor: "#000000", // Black border color
        borderWidth: 2 // Border width
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200 mb-8">
        <thead className="bg-gray-100">
          <tr>
            {["#", "Original URL", "Short URL", "Total Clicks"].map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{item.serialNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{item.originalUrl}</td>
              <td className="border border-gray-300 px-4 py-2">{item.shortUrl}</td>
              <td className="border border-gray-300 px-4 py-2">{item.totalClicks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-md h-96 w-auto chart-container">
          <h3 className="text-center font-bold mb-2">Clicks by Browser</h3>
          <Pie data={browserChartData} options={pieChartOptions}/>
        </div>
        <div className=" flex flex-col  bg-white p-4 shadow-md h-96 w-auto chart-container">
          <h3 className="text-center font-bold mb-2">Clicks by Device</h3>
          <Pie data={deviceChartData}  options={pieChartOptions}/>
        </div>
        <div className="flex flex-col bg-white p-4 shadow-md  h-96 w-auto chart-container">
          <h3 className="text-center font-bold mb-2">Total Clicks per URL</h3>
          <Bar data={totalClicksChartData} options={barChartOptions}/>
        </div>
      </div>
    </div>
  );
};
