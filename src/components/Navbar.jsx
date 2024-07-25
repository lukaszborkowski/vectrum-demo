import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav class="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
      <div class="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <div class="text-xl font-bold text-gray-900">
          <Image src="/ketovibe-logo.svg" alt="Logo" width={120} height={60} />
        </div>
        <div class="block">
          <a
            href="#quiz"
            title="Kobieta"
            className="inline-flex items-center px-6 py-2 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:bg-yellow-400"
            role="button"
          >
           
            Wypełnij Quiz
          </a>
        </div>
      </div>
    </nav>
  );
};
