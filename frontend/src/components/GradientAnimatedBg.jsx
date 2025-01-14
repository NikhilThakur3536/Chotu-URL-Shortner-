import { motion } from "framer-motion";

export const GradientAnimatedBg = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center h-full w-full bg-[#020617] overflow-hidden z-0"
      animate={{
        x: [-50, 50, 70, 50, -50], // Random positions across the x-axis
        y: [-60, 60, 40, -50, -60], // Random positions across the y-axis
      }}
      transition={{
        duration: 30, // Full cycle duration
        repeat: Infinity, // Loop indefinitely
        ease: "easeInOut", // Smooth transitions
      }}
    >
      {/* Individual Animated Circles */}
      <motion.div
        className="absolute w-72 h-72 transform -translate-x-12 rounded-full bg-blue-600 mix-blend filter blur-2xl opacity-40"
        animate={{
          y: [0, -30, 30, 0],
          x: [-20, 0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full transform translate-x-12 bg-red-600 mix-blend filter blur-2xl opacity-40"
        animate={{
          y: [-40, -35, -40, -35],
          x: [0, 50, -30, 0],
          scale: [0.8, 1, 0.9],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeIn",
        }}
      />
      <div className="absolute w-72 h-72 rounded-full transform translate-y-8 bg-purple-600 mix-blend filter blur-2xl opacity-40" />
    </motion.div>
  );
};
