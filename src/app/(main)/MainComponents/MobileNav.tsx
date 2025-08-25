"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className={`fixed top-4 right-4 bg-none flex md:hidden `}>
      <div
        className="flex rounded-[99px] p-[2px] border border-amber-400  "
        style={{ boxShadow: "0px 5px 20px 0px rgb(245 169 0 / 40%)" }}
      >
        <div
          className={`px-4 py-4 rounded-full ${activeIndex} hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all`}
          onClick={() => setActiveIndex(0)}
        >
          <FiMenu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
