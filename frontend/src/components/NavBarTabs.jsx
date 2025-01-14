import { motion } from "framer-motion";
import { useState } from "react";

export function NavBarTabs({ tittle,textColor }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="h-16 flex flex-col justify-center items-center"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className={ `outline-none mb-1 text-lg ${textColor || "text-white"}`}>{tittle}</span>
            <motion.hr
                className="bg-red h-1 w-full origin-left "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hover ? 1 : 0 }}
                transition={{ type: "tween", duration: .5 }}
            />
        </div>
    );
}
