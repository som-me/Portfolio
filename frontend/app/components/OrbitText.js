"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollingText() {
  const [duration, setDuration] = useState(10); // default duration

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(18); // slower on mobile
      } else {
        setDuration(10); // default on larger screens
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-4">
      <motion.div
        className="inline-block text-white font-bold text-[12rem] px-4"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
      >
        PREMIUM <span className="text-[red]">•</span> WORK PREMIUM{" "}
        <span className="text-[red]">•</span> WORK PREMIUM{" "}
        <span className="text-[red]">•</span> WORK
      </motion.div>
    </div>
  );
}
