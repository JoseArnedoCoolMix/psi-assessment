"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 flex justify-between md:hidden z-90 bg-none">
        {/* Logo on the left */}
        <div
          className="flex rounded-[99px] p-[2px] border border-neutral-300 bg-[rgba(0,0,0,0.25)] backdrop-blur-md relative"
          style={{ boxShadow: "0px 5px 20px 0px rgb(255, 255, 255 / 40%)" }}
        >
          <div className="px-4 py-2 rounded-full flex items-center">
            <Image
              src="/images/logo-dark.png"
              alt="Logo"
              width={50}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Menu button on the right */}
        <div
          className="flex rounded-[99px] p-[2px] border border-neutral-300 bg-[rgba(0,0,0,0.25)] backdrop-blur-md relative"
          style={{ boxShadow: "0px 5px 20px 0px rgb(255, 255, 255 / 40%)" }}
        >
          <div
            className={`px-4 py-4 rounded-full hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </nav>
      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-60 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: menuOpen ? "-8px 0 32px 0 rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="flex flex-col h-full p-8 text-white justify-center">
          <nav className="flex flex-col gap-6 text-2xl">
            <a
              href="#"
              className="hover:text-neutral-300 active:text-neutral-500 pl-5 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-neutral-300 active:text-neutral-500 pl-5 transition"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-neutral-300 active:text-neutral-500 pl-5 transition"
            >
              Plan
            </a>
            <div className="w-auto flex">
              <div className="px-6 py-3 rounded-full cursor-pointer transition-all font-sans bg-neutral-200 text-black hover:bg-[#e2d9c4]">
                Inquire
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Overlay for closing menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MobileNav;
