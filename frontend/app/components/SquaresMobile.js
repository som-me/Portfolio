"use client";
import React from "react";

function SquaresMobile() {
  return (
    <div className="w-full flex justify-center items-start mt-12 px-4">
      {/* Left column */}
      <div className="flex flex-col space-y-4 w-1/2 items-end pr-2">
        <div className="w-30 aspect-square bg-red-600" />
        <div className="w-30 aspect-square bg-black" />
      </div>

      {/* Right column, staggered */}
      <div className="flex flex-col space-y-4 w-1/2 items-start mt-10 pl-2">
        <div className="w-30 aspect-square bg-black" />
        <div className="w-30 aspect-square bg-red-600" />
      </div>
    </div>
  );
}

export default SquaresMobile;
