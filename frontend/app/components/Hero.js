"use client";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="
        font-satoshi 
        leading-none 
        tracking-widest 
        cursor-default 
        bg-white 
        text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]
        ml-4 sm:ml-8 md:ml-16 lg:ml-[7.2rem]
        px-8 sm:px-0 py-24 sm:py-8
      "
    >
      SOM <br /> MEHER
    </motion.div>
  );
}

export default Hero;
