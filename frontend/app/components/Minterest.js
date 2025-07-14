import React from "react";
import OrbitingText from "./OrbitText";

function Minterest() {
  return (
    <>
      <div className="py-10 px-4 sm:px-12">
        <h2 className="font-medium text-3xl sm:text-4xl mb-6">MINTEREST</h2>

        {/* Black background wrapper with group */}
        <div className="bg-black p-4 sm:p-12 rounded-2xl grid gap-4 grid-cols-6 auto-rows-[20px] sm:auto-rows-[90px] group">

          {/* Example of one item */}
          <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Repeat this pattern for all items */}

          <div className="relative col-span-4 row-span-4 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-[center_100%]"
            />
          </div>

          <div className="relative col-span-2 row-span-4 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative col-span-4 row-span-2 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative col-span-3 row-span-2 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video6.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative col-span-1 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="relative col-span-1 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:blur-sm hover:scale-105 hover:!blur-none">
            <video
              src="/video8.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[30vh] bg-black flex items-center justify-center px-4">
        <OrbitingText />
      </div>
    </>
  );
}

export default Minterest;
