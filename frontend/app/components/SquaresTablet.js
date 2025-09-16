"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SquaresTablet({ reference }) {
    const [constraints, setConstraints] = useState(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);

    const positions = [
        { top: "1rem", left: "0rem", color: "bg-red-600" },
        { top: "6rem", left: "9rem", color: "bg-black" },
        { top: "11rem", left: "0rem", color: "bg-black" },
        { top: "16rem", left: "9rem", color: "bg-red-600" },
    ];

    useEffect(() => {
        if (reference && reference.current) {
            setConstraints(reference.current);
        }
    }, [reference]);

    return (
        <div className="w-full h-[100vh] bg-white overflow-hidden">
            <div className="absolute top-[10rem] right-[2rem] w-[22rem] h-[32rem]">
                {positions.map((pos, idx) => (
                    <motion.div
                        key={idx}
                        drag
                        dragConstraints={constraints}
                        onHoverStart={() => setHoveredIdx(idx)}
                        onHoverEnd={() => setHoveredIdx(null)}
                        className={`w-28 h-28 absolute ${pos.color} transition-opacity cursor-pointer duration-300 ${hoveredIdx !== null && hoveredIdx !== idx
                                ? "opacity-30"
                                : "opacity-100"
                            }`}
                        style={{ top: pos.top, left: pos.left }}
                    />
                ))}
            </div>
        </div>
    );
}

export default SquaresTablet;
