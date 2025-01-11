import { useState } from "react";
import { motion } from "framer-motion";
import { userFormInput } from "../hooks/userFormInput";
import { userUrlShortner } from "../hooks/userUrlShortner";
import { MotionButton } from "./MotionButton";

export function MainSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { inputs, changeHandler } = userFormInput({ originalurl: "" });
  const { shortening } = userUrlShortner();
  const [isshort, setShort] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");


  const shorteningHandler = async () => {
    try {
      console.log("Sending URL to shorten:", inputs.originalurl);
  
      const response = await shortening(inputs.originalurl);
      console.log("Response from backend:", response.data);
  
      const {data}  = response;
      console.log("Extracted Shortened URL:", data);
      if (data) {
        setShort(true);
        setShortenedUrl(data);
        
      }
    } catch (error) {
      console.error("Error in shorteningHandler:", error.response || error.message);
      setShort(false);
      setShortenedUrl("");
    }
  };

  return (
    <div className="flex flex-col justify-center content-center items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-Buffalo text-white">URL SHORTNER</h1>
        <h3 className="text-white">
          CHOTU : Your free URL Shortner with Analytics Dashboard Keeping track of Activities on your URL
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
          className="bg-[#0ea5e9] pl-8 pr-8 pt-2 pb-2 border-transparent rounded-lg text-white text-xl font-medium"
          onClick={shorteningHandler}
          // Initial button style
          initial={{ rotateX: 0, rotateY: 0 }}
          // Animate when pressed
          animate={
            isPressed
              ? { rotateX: 30, rotateY: 10, background: "#ef4444" }
              : { rotateX: 0, rotateY: 0 }
          }
          // Transition effect
          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 2 }}
          // Handlers to toggle state
          onMouseDown={() => setIsPressed(true)}
          onMouseLeave={() => setIsPressed(false)}
        >
          Shorten URL
        </motion.button>
        {/* <MotionButton onClick={shorteningHandler}/> */}
      </div>
      {isshort && shortenedUrl && (
        <div className="text-white mt-4">
          <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
        </div>
      )}
    </div>
  );
}
