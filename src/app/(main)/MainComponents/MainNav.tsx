"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  //   { label: "Gallery", href: "/gallery" },
  { label: "Plan", href: "/plan" },
];

const MainNav = () => {
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathname = usePathname();

  // Find active index based on current URL
  const activeIndex = navItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );

  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  const getBubbleStyle = () => {
    const idx = hoverIndex !== null ? hoverIndex : activeIndex;
    const node = navRefs.current[idx];
    if (node) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = node;
      return {
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      };
    }
    return { left: 0, top: 0, width: 0, height: 0 };
  };

  return (
    <nav className="fixed top-4 w-full bg-none hidden md:flex justify-center font-sans z-50">
      <div
        className="flex rounded-[99px] p-[2px] border border-neutral-300 bg-[rgba(0,0,0,0.25)] backdrop-blur-md relative"
        style={{ boxShadow: "0px 5px 20px 0px rgb(120 120 120 / 20%)" }}
      >
        <div className="flex h-full items-center justify-center px-4 mr-3">
          <Image
            src="/images/logo-dark.png"
            alt="Logo"
            width={50}
            height={100}
          />
        </div>
        <div className="relative flex">
          {/* Moving translucent bubble */}
          <motion.div
            className="absolute rounded-full bg-neutral-200/40 pointer-events-none"
            style={{
              zIndex: 1,
              ...getBubbleStyle(),
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            animate={getBubbleStyle()}
          />
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className="relative"
              ref={(el) => {
                navRefs.current[idx] = el;
              }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Link
                className={`relative px-6 py-3 rounded-full cursor-pointer transition-all flex font-sans z-10 ${
                  activeIndex === idx ? "text-neutral-900" : "text-neutral-200"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {/* Static active bubble */}
              {activeIndex === idx && (
                <div className="absolute inset-0 rounded-full bg-neutral-200 z-0" />
              )}
            </div>
          ))}
        </div>
        <Link
          className="px-6 py-3 ml-3 rounded-full cursor-pointer transition-all font-sans bg-neutral-200 text-black hover:bg-[#e2d9c4]"
          href="/inquire"
        >
          Inquire
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
