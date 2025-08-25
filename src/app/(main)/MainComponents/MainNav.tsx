"use client";
import React, { useState } from "react";
import Image from "next/image";

const MainNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav
      className={`fixed top-4 w-full bg-none hidden md:flex justify-center z-10 `}
    >
      <div
        className="flex rounded-[99px] p-[2px] border border-amber-400 bg-[rgba(255,255,255,0.1)] backdrop-blur-md "
        style={{ boxShadow: "0px 5px 20px 0px rgb(245 169 0 / 40%)" }}
      >
        <div>
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div
          className={`px-6 py-3 rounded-full  hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all  ${
            activeIndex === 0
              ? "bg-gradient-to-r from-[#dac08a] to-[#FBFCDB] text-black"
              : ""
          }`}
          onClick={() => setActiveIndex(0)}
        >
          Home
        </div>
        <div
          className={`px-6 py-3 rounded-full  hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all  ${
            activeIndex === 1
              ? "bg-gradient-to-r from-[#dac08a] to-[#FBFCDB] text-black"
              : ""
          }`}
          onClick={() => setActiveIndex(1)}
        >
          About Us
        </div>
        <div
          className={`px-6 py-3 rounded-full  hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all  ${
            activeIndex === 2
              ? "bg-gradient-to-r from-[#dac08a] to-[#FBFCDB] text-black"
              : ""
          }`}
          onClick={() => setActiveIndex(2)}
        >
          Contact Us
        </div>
        <div
          className={`px-6 py-3 rounded-full  hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all  ${
            activeIndex === 3
              ? "bg-gradient-to-r from-[#dac08a] to-[#FBFCDB] text-black"
              : ""
          }`}
          onClick={() => setActiveIndex(3)}
        >
          Careers
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
