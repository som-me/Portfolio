'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(Draggable, Physics2DPlugin);

function SquarePattern() {
    const squareRefs = useRef([]);

    useEffect(() => {
        // Animate each square with fade-in
        gsap.from(squareRefs.current, {
            opacity: 0,
            y: -50,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
        });

        // Make each square draggable
        squareRefs.current.forEach((square) => {
            Draggable.create(square, {
                type: 'x,y',
                inertia: true, // if using InertiaPlugin via GreenSock membership
                onDragEnd: function () {
                    // Apply some physics on release
                    gsap.to(square, {
                        physics2D: {
                            velocity: this.getVelocity().x * 0.5,
                            angle: 45,
                            gravity: 500,
                        },
                        duration: 2,
                        ease: 'power2.out',
                    });
                },
            });
        });
    }, []);

    const positions = [
        { top: '2rem', left: '0rem', color: 'bg-red-600' },
        { top: '8rem', left: '13rem', color: 'bg-black' },
        { top: '15rem', left: '0rem', color: 'bg-black' },
        { top: '21rem', left: '13rem', color: 'bg-red-600' },
    ];



    return (
        <div className="absolute top-[10rem] right-[6rem] w-[32rem] h-[50rem]">
            {positions.map((pos, idx) => (
                <div
                    key={idx}
                    ref={(el) => (squareRefs.current[idx] = el)}
                    className={`w-48 h-48 ${pos.color} absolute cursor-move`}
                    style={{ top: pos.top, left: pos.left }}
                ></div>
            ))}
        </div>
    );
}

export default SquarePattern;
