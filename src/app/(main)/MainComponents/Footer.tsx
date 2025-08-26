import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white py-8 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative">
        {/* Social Media */}
        <div className="flex gap-4 z-10">
          <a
            href="https://www.facebook.com/p/SAAS-Properties-100086726346973/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/saasproperties/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://saashills.com/ae.linkedin.com/company/saas-properties"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        {/* Logo - absolutely centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center z-20">
          <Image
            src="/images/logo-dark.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        {/* Phone and copyright */}
        <div className="flex flex-col items-center md:items-end text-sm gap-1 z-10">
          <a href="tel:+971123456789" className="hover:underline">
            800 27
          </a>
          <span className="text-neutral-400">
            Copyright © 2025 SAAS Properties LLC
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
