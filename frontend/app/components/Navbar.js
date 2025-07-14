"use client";
import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkViewport(); // Initial check
    window.addEventListener("resize", checkViewport); // Listen for resize

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}

export default Navbar;
