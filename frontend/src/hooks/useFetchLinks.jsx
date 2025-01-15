import { useState, useEffect } from "react";
import axios from "axios";

const useFetchLinks = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, {
          headers: {
            token: localStorage.getItem("token"), // Add token if needed
          },
        });
        setData(response.data.data); 
        // console.log(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchLinks;
