import React from "react";
import useFetchLinks from "../hooks/useFetchLinks"; // Adjust the path to your hook file

export const LinksTable = () => {
  const { data, loading, error } = useFetchLinks("http://localhost:3000/links");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Links Data</h2>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Total Clicks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.serialNumber}</td>
              <td>{item.originalUrl}</td>
              <td>{item.shortUrl}</td>
              <td>{item.totalClicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

