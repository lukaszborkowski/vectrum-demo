"use client";
import { gsap } from "gsap";

import React, { useEffect } from "react";
import Image from "next/image";

const curtainDelay = 1.5;

export const Navbar = ({ brand }) => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#navbar",
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 1,
  //       delay: curtainDelay + 2.4,
  //     }
  //   );
  // }, []);

  return (
    <nav
      id="navbar"
      className="after-animated-header fixed w-full top-0 z-10 mt-6"
    >
      <div
        className="border shadow-sm rounded-full max-w-6xl mx-auto px-4 flex justify-between items-center py-4"
        style={{
          // backdropFilter: "blur(20px) brightness(100%)",
          overflow: "hidden",
          padding: "1rem 1rem 1rem 2rem",
          background: "rgba(255, 255, 255, 1)",
        }}
      >
        <div className="text-xl font-bold text-gray-900">
          <img src={brand?.logo} alt="Logo" width={180} height={60} />
        </div>
        <div className="flex space-x-8 pr-12">
          {brand?.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-600 hover:text-blue-500">
              {item.label}
            </a>
          ))}
        </div>
        {/* <div className="block">
          <a
            href="#quiz"
            title="Szybka Wycena"
            className="inline-flex items-center px-6 py-2 border font-semibold text-black transition-all duration-200 bg-stale-100 rounded-full hover:bg-yellow-500 focus:bg-yellow-400"
            role="button"
          >
            Szybka Wycena
          </a>
        </div> */}
      </div>
    </nav>
  );
};
