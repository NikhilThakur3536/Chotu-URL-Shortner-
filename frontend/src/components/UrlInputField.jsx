import { motion } from "framer-motion";

export function UrlInput({ name,value, onChange, onFocus, onBlur, isFocused }) {
  return (
    <motion.input
      type="url"
      placeholder="Enter the link"
      className="bg-white text-black text-xl w-[55%] border-transparent rounded-lg pl-4 focus:outline-none"
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      animate={{
        boxShadow: isFocused ? "0 0 15px #14b8a6" : "none",
      }}
      transition={
        isFocused
          ? {
              duration: 1,
              repeatType: "reverse",
            }
          : { duration: 0 }
      }
    />
  );
}
