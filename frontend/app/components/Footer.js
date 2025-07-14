import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black flex justify-center py-36">
        <div className="flex flex-col items-start px-6 sm:px-12 md:px-24">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-white italic font-satoshi leading-none font-semibold text-4xl">
              Let&#39;s Create
            </h1>
            <div className="w-20 h-2 bg-red-600 rounded-xl"></div>
          </div>
          <h1 className="text-white font-satoshi leading-none font-semibold text-4xl mt-4">
            New Stories Together
          </h1>
        </div>
      </div>
      <div className="bg-black text-white font-satoshi flex justify-center items-baseline">
        Built with care by Som - <br /> © 2025 Som. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
