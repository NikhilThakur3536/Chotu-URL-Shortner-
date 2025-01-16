import { motion } from "framer-motion";

export function ShortenButton({ onClick, isPressed, setIsPressed }) {
  return (
    <motion.button
      className="bg-blue-700 pl-8 pr-8 pt-2 pb-2 border-transparent rounded-lg text-white text-xl font-medium"
      onClick={onClick}
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
  );
}
