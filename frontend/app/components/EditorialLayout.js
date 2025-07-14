"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Editor = [
  {
    title: "Maiden",
    desc: "Featuring Luxury brands",
    image: "/red LOVE.svg",
    video: "/red everywhere.mp4",
  },
  {
    title: "Ranso",
    desc: "Discover the real you",
    image: "/ransome.svg",
    video: "/ransome.mp4",
  },
  {
    title: "Spotify",
    desc: "Avatars for Commercial",
    image: "/sport.svg",
    video: "/sport_video.mp4",
  },
];

function EditorialLayout() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoReady, setVideoReady] = useState({});

  return (
    <div className="px-6 sm:px-12 md:px-24 lg:px-36 py-24">
      {/* Header */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-satoshi font-medium leading-snug">
        Weaving emotion into pixels <br /> through design and <br /> animation.
      </div>

      {/* Subtitle */}
      <h1 className="mt-12 text-sm sm:text-base md:text-lg uppercase text-zinc-400">
        Pixel Narratives Season 1/10
      </h1>

      {/* Items */}
      <div className="mt-12 space-y-10">
        {Editor.map((edit, index) => (
          <div
            key={index}
            className="border-t-2 border-gray-300 pt-6 group transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              {/* Text Section */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <motion.div
                  className="text-4xl whitespace-nowrap sm:text-6xl font-semibold text-black hover:text-red-600 transition-all duration-500"
                  whileHover={{ x: 20 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.2 }}
                >
                  {edit.title}
                </motion.div>
              </div>

              <div className="text-sm sm:text-lg font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 sm:mt-0 mt-2">
                {edit.desc}
              </div>

              {/* Image/Video Section */}
              <motion.div
                className="relative mt-2 w-full sm:max-w-[200px] h-auto rounded-xl overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <video
                  src={edit.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  hidden={hoveredIndex !== index}
                  onCanPlay={() =>
                    setVideoReady((prev) => ({ ...prev, [index]: true }))
                  }
                  className="w-full h-full object-cover rounded-xl"
                />
                <img
                  src={edit.image}
                  alt={edit.title}
                  hidden={hoveredIndex === index}
                  className="w-full h-full object-cover rounded-xl"
                />

                {hoveredIndex === index && !videoReady[index] && (
                  <div className="w-full h-full flex items-center justify-center bg-black/50 text-white text-xs sm:text-sm rounded-xl">
                    Loading video...
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom border */}
      <div className="border-t border-gray-300 mt-6" />
    </div>
  );
}

export default EditorialLayout;
