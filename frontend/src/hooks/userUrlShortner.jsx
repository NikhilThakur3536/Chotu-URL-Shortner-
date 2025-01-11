import axios from "axios";

export const userUrlShortner=()=>{
  const shortening = async (originalurl) => {
    console.log("Original URL:", originalurl);

    try {
      // Axios POST request to your backend
      const response = await axios.post(
        "http://localhost:3000/shorten",
        { originalurl },
        {
          headers: {
            token: localStorage.getItem("token"), // Fetch token from localStorage
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );

      // Log and return the response data
      console.log("Response from server:", response);
      return response; // Return the shortened URL data
    } catch (error) {
      console.error("Error shortening URL",);
      return {response}; // Return an empty URL in case of an error
    }
  };

  return { shortening }; // Return the `shortening` function
}
