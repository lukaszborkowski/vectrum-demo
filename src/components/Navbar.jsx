"use client";
import { gsap } from "gsap";

import React, { useEffect } from "react";
import Image from "next/image";

const curtainDelay = 1.5;

export const Navbar = () => {
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
    class="after-animated-header  fixed w-full top-0 z-10 mt-8">
      <div
        class="border shadow-sm rounded-full max-w-6xl mx-auto px-4 flex justify-between items-center py-4"
        style={{
          backdropFilter: "blur(10px) brightness(100%)",
          // borderRadius: "2rem",
          overflow: "hidden",
          padding: "1rem 1rem 1rem 2rem",
          background: "rgba(255, 255, 255, 1)",
        }}
      >
        <div class="text-xl font-bold text-gray-900">
          <Image src="/logoInno.png" alt="Logo" width={180} height={60} />
        </div>
        <div class="block">
          <a
            href="#quiz"
            title="Kobieta"
            className="inline-flex items-center px-6 py-2 border font-semibold text-black transition-all duration-200 bg-stale-100 rounded-full hover:bg-yellow-500 focus:bg-yellow-400"
            role="button"
          >
            Szybka Wycena
          </a>
        </div>
      </div>
    </nav>
  );
};
