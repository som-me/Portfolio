"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Resume", "Contact"];

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4 shadow-md flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <div className="w-8 h-8 bg-[url(/favicon.svg)] bg-cover bg-center" />
          <div className="w-16 h-8 bg-zinc-950 flex justify-center items-center">
            <div className="w-12 h-6 bg-[url(/logo.svg)] bg-cover bg-center" />
          </div>
        </div>

        {/* Menu Icon */}
        <FiMenu size={24} onClick={() => setIsMenuOpen(true)} className="text-black" />
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold">SOM MEHER</span>
            <IoClose size={28} color="#FF0000" onClick={() => setIsMenuOpen(false)} />
          </div>

          <div className="flex flex-col gap-6 text-lg">
            {menuItems.map((item) => (
              <button
                key={item}
                className="text-left text-black hover:text-red-600 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  // Optionally: scroll or route here
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 text-sm text-gray-500">
            Designed & Built by SOM
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarMobile;
