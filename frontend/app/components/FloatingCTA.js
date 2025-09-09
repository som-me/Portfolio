"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

export default function FloatingCTA() {
    const [pos, setPos] = useState({ x: "50%", y: "80%" });
    const router = useRouter();

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x: `${x}%`, y: `${y}%` });
    };

    const handleClick = () => {
        router.push("/go-type"); // 👈 this routes to /go-type
    };

    return (
        <div
            className="relative w-full h-132 bg-black rounded-lg flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Text */}
            <h2 className="absolute text-white text-6xl font-semibold text-center px-12 top-1/3">
                Check Out My Latest <br /> Creation and Test Your <br /> Typing Skills
            </h2>

            {/* Floating Button */}
            <button
                className="absolute flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg transition-transform duration-150 active:scale-95"
                style={{
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-50%, -50%)",
                }}
                onClick={handleClick}
            >
                <FaPlay size={14} />
                Click Me
            </button>
        </div>
    );
}
