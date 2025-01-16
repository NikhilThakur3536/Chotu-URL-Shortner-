import { useState } from "react";
import { motion } from "framer-motion";
import { userFormInput } from "../hooks/userFormInput";
import { userUrlShortner } from "../hooks/userUrlShortner";

export function MainSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { inputs, changeHandler } = userFormInput({ originalurl: "" });
  const { shortening } = userUrlShortner();
  const [isshort, setShort] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [qrCode, setQrCode] = useState(""); // New state for QR code
  const [error, setError] = useState(""); // New state for error handling

  const shorteningHandler = async () => {
    try {
      console.log("Sending URL to shorten:", inputs.originalurl);

      const response = await shortening(inputs.originalurl);
      console.log("Response from backend:", response);

      if (response.shortUrl && response.qrCode) {
        setShort(true);
        setShortenedUrl(response.shortUrl);
        setQrCode(response.qrCode); // Set QR code
        setError(""); // Clear error
      } else {
        throw new Error("Incomplete response from server.");
      }
    } catch (error) {
      console.error("Error in shorteningHandler:", error.message);
      setShort(false);
      setShortenedUrl("");
      setQrCode("");
      setError(error.message || "Failed to shorten URL.");
    }
  };

  return (
    <div className="flex flex-col justify-center content-center items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-Buffalo font-bold text-rose-500">URL SHORTENER</h1>
        <h3 className="text-white font-poppins text-lg">
          CHOTU: Your free URL Shortener with Analytics Dashboard, keeping track of activities on your URL.
        </h3>
      </div>
      <div className="flex gap-6 w-full justify-center h-16">
        <motion.input
          type="url"
          placeholder="Enter the link"
          className="bg-white text-black text-xl w-[55%] border-transparent rounded-lg pl-4 focus:outline-none"
          name="originalurl"
          value={inputs.originalurl}
          onChange={changeHandler}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          animate={{
            boxShadow: isFocused ? "0 0 15px #14b8a6" : "none",
          }}
          transition={
            isFocused
              ? {
                  duration: 1,
                  repeatType: "reverse",
                }
              : { duration: 0 } // No transition when unfocused
          }
        />
        <motion.button
          className="bg-blue-700 pl-8 pr-8 pt-2 pb-2 border-transparent rounded-lg text-white text-xl font-medium"
          onClick={shorteningHandler}
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={
            isPressed
              ? { rotateX: 30, rotateY: 10, background: "#ef4444" }
              : { rotateX: 0, rotateY: 0 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 2 }}
          onMouseDown={() => setIsPressed(true)}
          onMouseLeave={() => setIsPressed(false)}
        >
          Shorten URL
        </motion.button>
      </div>
      {isshort && (
        <div className="text-white mt-4">
          <p>
            Shortened URL:{" "}
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </p>
          {qrCode && (
            <div className="mt-4">
              <p>Scan QR Code:</p>
              <img src={qrCode} alt="QR Code" className="mt-2 w-32 h-32" />
            </div>
          )}
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
