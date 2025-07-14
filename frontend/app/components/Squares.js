"use client";
import React, { useState, useEffect } from "react";
import SquaresDesktop from "./SquaresDesktop";
import SquaresMobile from "./SquaresMobile";

function Squares() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkViewport(); // Initial check
    window.addEventListener("resize", checkViewport); // Listen for resize

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return isMobile ? <SquaresMobile/> : <SquaresDesktop/>;
}

export default Squares;
