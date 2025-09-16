"use client";
import React, { useState, useEffect } from "react";
import SquaresDesktop from "./SquaresDesktop";
import SquaresMobile from "./SquaresMobile";
import SquaresTablet from "./SquaresTablet";

function Squares() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 770) {
        setScreenSize("mobile");
      } else if (width >= 770 && width <= 1440) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkViewport(); // Initial check
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (screenSize === "mobile") return <SquaresMobile />;
  if (screenSize === "tablet") return <SquaresTablet />;
  return <SquaresDesktop />;
}

export default Squares;
