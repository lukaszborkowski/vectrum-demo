"use client";
import Image from "next/image";
import { HomePage } from "@/components/HomePage";
import { Navbar } from "@/components/Navbar";
import { Curtain } from "@/components/Curtain";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { AnimatedSpan } from "@/components/AnimatedSpan";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const logoRef = useRef(null);

  useEffect(() => {
    // const letters = spanRef.current.querySelectorAll(".letter");
    gsap.set(logoRef.current, { opacity: 1, delay: 4 });
  }, []);

  return (
    <div className="max-w-[600px] mx-auto mt-[300px] text-2xl">
      <div
        className="absolute inset-x-0 bottom-[60px] -z-10 blur-[70px] transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative  aspect-[1155/678] w-[56.125rem]  rotate-[180deg] bg-gradient-to-tr from-[#5891dc] to-[#80dfff] opacity-40 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="px-8">
        <div 
        style={{
          transition: "all 1s",
        }}
        className="mb-12 opacity-0" ref={logoRef}>
          <img src="/favicon.svg" className="w-[64px]" />
        </div>
        <span className="inline-block font-bold ">
          <AnimatedSpan delay={0.5}> .Grow </AnimatedSpan>{" "}
          <AnimatedSpan delay={0.5}> your </AnimatedSpan>{" "}
          <span className="text-blue-600">
            <AnimatedSpan delay={1}>memorability</AnimatedSpan>
          </span>
        </span>{" "}
        <span className="block font-bold">
          <AnimatedSpan delay={1.8}> .Grow </AnimatedSpan>{" "}
          <AnimatedSpan delay={1.8}> your </AnimatedSpan>{" "}
          <span className="text-blue-600">
            <AnimatedSpan delay={2}>business</AnimatedSpan>
          </span>
        </span>{" "}
        <div className="text-xs pt-12">
          <a href={"mailto:contact@vectrum.studio"}>
            <AnimatedSpan delay={2.6}>contact@vectrum.studio </AnimatedSpan>{" "}
          </a>
          {/* <AnimatedSpan delay={2.6}>Vectrum.studio </AnimatedSpan>{" "} */}
        </div>
      </div>
    </div>
  );
}
