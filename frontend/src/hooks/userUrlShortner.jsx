import axios from "axios";

export const userUrlShortner = () => {
  const shortening = async (originalurl) => {
    console.log("Original URL:", originalurl);
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      // Axios POST request to your backend
      const response = await axios.post(
        `${apiUrl}/shorten`,
        { originalurl },
        {
          headers: {
            token: localStorage.getItem("token"), // Fetch token from localStorage
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );

      // Log the response data
      // console.log("Response from server:", response.data);

      // Return the shortened URL and QR code from the server response
      return {
        shortUrl: response.data.shortUrl,
        qrCode: response.data.qrCode,
      };
    } catch (error) {
      console.error("Error shortening URL:", error);

      // Return a placeholder or error message
      return {
        shortUrl: null,
        qrCode: null,
        error: "Failed to shorten URL",
      };
    }
  };

  return { shortening }; // Return the `shortening` function
};
