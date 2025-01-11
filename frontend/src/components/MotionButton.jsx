import { useState } from "react";
import {motion} from "framer-motion";

export function MotionButton({onClick,}){
    const [isPressed, setIsPressed] = useState(false);
    return (<motion.button
          className="bg-[#0ea5e9] pl-8 pr-8 pt-2 pb-2 border-transparent rounded-lg text-white text-xl font-medium"
          onClick={onClick}
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
)}