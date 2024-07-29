import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav class="  fixed w-full top-0 z-10 mt-8">
      <div
        class="border shadow-sm rounded-full max-w-6xl mx-auto px-4 flex justify-between items-center py-4"
        style={{
          backdropFilter: "blur(5px) brightness(100%)",
          // borderRadius: "2rem",
          overflow: "hidden",
          padding: "1rem 1rem 1rem 2rem",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div class="text-xl font-bold text-gray-900">
          <Image src="/ketovibe-logo.svg" alt="Logo" width={120} height={60} />
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
