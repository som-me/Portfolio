"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 770) {
        setScreenSize("mobile");
      } else if (width >= 770 && width <= 880) {
        setScreenSize("lmobile");
      } else if (width >= 880 && width <= 1020) {
        setScreenSize("tablet");
      } else if (width >= 1020 && width <= 1440) {
        setScreenSize("mac");
      } else {
        setScreenSize("desktop");
      }
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const getStyles = () => {
    if (screenSize === "mobile") {
      return "text-[3rem] ml-4 px-8 py-24";
    } else if (screenSize === "lmobile") {
      return "text-[4rem] ml-16 px-0 py-12";
    } else if (screenSize === "tablet") {
      return "text-[6rem] ml-16 px-0 py-12";
    } else if (screenSize === "mac") {
      return "text-[10rem] ml-16 px-0 py-12";
    } else {
      return "text-[12rem] ml-[7.2rem] px-0 py-12";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className={`
        font-satoshi
        leading-none
        tracking-widest
        cursor-default
        bg-white
        ${getStyles()}
      `}
    >
      SOM <br /> MEHER
    </motion.div>
  );
}

export default Hero;
