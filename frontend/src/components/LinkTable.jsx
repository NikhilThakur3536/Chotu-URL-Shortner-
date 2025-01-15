import React from "react";
import useFetchLinks from "../hooks/useFetchLinks"; // Adjust the path to your hook file

export const LinksTable = () => {
  const { data, loading, error } = useFetchLinks("http://localhost:3000/links");

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const headers = ["#", "Original URL", "Short URL", "Total Clicks"];

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
        <tr>
          {headers.map((header, index) => (
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
    </div>
  );
};
