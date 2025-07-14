"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  const [activeMenuSection, setActiveMenuSection] = useState("Home");
  const [activeWorkSection, setActiveWorkSection] = useState("Services");

  const menuItems = ["Home", "About", "Projects", "Resume", "Contact"];
  const workItems = ["Services", "Blog", "Testimonials", "Skills", "Store"];

  return (
    <>
      <div className="Som top-0 left-0 w-full z-50 flex flex-col bg-white min-h-[12rem]">
        <div className="upperblock relative">
          <div className="logo flex flex-row absolute left-12 top-10">
            <div className="w-12 h-12 bg-[#FF0000] bg-[url(/favicon.svg)] bg-cover bg-center"></div>
            <div className="w-24 h-12 bg-zinc-950 flex justify-center items-center">
              <div className="w-20 h-8 bg-[url(/logo.svg)] bg-cover bg-center"></div>
            </div>
          </div>

          <div className="p-4 absolute top-8 right-12 flex flex-row">
            <button
              onClick={() => setIsWorkOpen(true)}
              className="text-[1rem] mr-8 cursor-pointer"
            >
              Let&#39;s Work
            </button>
            <FiMenu
              onClick={() => setIsMenuOpen(true)}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="landmark relative font-satoshi left-12 top-22">
          Designer & Developer
        </div>
      </div>

      {/* MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed top-4 left-4 right-4 bottom-4 bg-[#ffffff] rounded-2xl z-30 shadow-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-semibold transition"
            >
              SOM MEHER
            </button>
            <button onClick={() => setIsMenuOpen(false)}>
              <IoClose size={28} color="#FF0000" />
            </button>
          </div>

          <div className="flex flex-row h-full">
            {/* Menu Items */}
            <div className="w-3/12 flex flex-col gap-6 text-left text-black text-sm font-medium">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveMenuSection(item)}
                  className={`py-2 rounded text-left px-2 ${
                    activeMenuSection === item ? "bg-black text-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Main View */}
            <div className="w-9/12 flex flex-col items-start justify-start gap-4 pl-8 pr-4">
              <div className="text-sm text-gray-500">View</div>

              {activeMenuSection === "Home" ? (
                <div className="flex flex-col gap-4 w-full">
                  
                </div>
              ) : (
                <div className="text-2xl font-semibold text-gray-700 mt-4">
                  🚧 {activeMenuSection} — Coming Soon!
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WORK OVERLAY */}
      {isWorkOpen && (
        <div className="fixed top-4 left-4 right-4 bottom-4 bg-[#ffffff] rounded-2xl z-30 shadow-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setIsWorkOpen(false)}
              className="text-xl font-semibold transition"
            >
              WORK WITH ME
            </button>
            <button onClick={() => setIsWorkOpen(false)}>
              <IoClose size={28} color="#FF0000" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-sm text-gray-500">Offerings</div>
            <div className="flex flex-wrap gap-4">
              {workItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveWorkSection(item)}
                  className={`px-4 py-2 rounded border ${
                    activeWorkSection === item
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="text-xl font-semibold mt-6 text-gray-800">
              🚀 {activeWorkSection} — Coming Soon!
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
