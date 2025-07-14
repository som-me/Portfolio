"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function SquaresDesktop({ reference }) {
  const [constraints, setConstraints] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const positions = [
    { top: '2rem', left: '0rem', color: 'bg-red-600' },
    { top: '8rem', left: '13rem', color: 'bg-black' },
    { top: '15rem', left: '0rem', color: 'bg-black' },
    { top: '21rem', left: '13rem', color: 'bg-red-600' },
  ];

  useEffect(() => {
    if (reference && reference.current) {
      setConstraints(reference.current);
    }
  }, [reference]);

  return (
    <div className="w-full h-[100vh] bg-white overflow-hidden">
      <div className="absolute top-[10rem] right-[4rem] w-[30rem] h-[50rem]">
        {positions.map((pos, idx) => (
          <motion.div
            key={idx}
            drag
            dragConstraints={constraints}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
            className={`w-40 h-40 absolute ${pos.color} transition-opacity cursor-pointer duration-300 ${
              hoveredIdx !== null && hoveredIdx !== idx ? "opacity-30" : "opacity-100"
            }`}
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>
    </div>
  );
}

export default SquaresDesktop;
