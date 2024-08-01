"use client";

import { AnimatedSpan } from "@/components/AnimatedSpan";
import { Curtain } from "@/components/Curtain";
import { Grid } from "./Grid";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { TestimonialRow } from "@/components/TestimonialRow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const defaultColors = {
  bgGradientColor: ["white", "purple"],
};

const curtainDelay = 1.5;

export const Content = () => {
  const brand = {
    name: "Evention",
    navItems: [
      { href: "#start", label: "Start" },
      { href: "#wydarzenia", label: "Wydarzenia" },
      { href: "#oferta", label: "Oferta" },
      { href: "#onas", label: "O nas" },
      { href: "#kontakt", label: "Kontakt" },
      { href: "#dolacz", label: "Dołącz do nas" },
    ],
    hero: (
      <h1 className="mx-auto  max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">
          <AnimatedSpan delay={curtainDelay}> Tworzymy </AnimatedSpan>{" "}
          <span className="relative whitespace-nowrap ">
            <span class="inline-block">
              <AnimatedSpan delay={curtainDelay + 0.5}>Wydarzenia, </AnimatedSpan>
            </span>
          </span>
        </span>{" "}
        <span className="inline-block">
          <AnimatedSpan delay={curtainDelay + 1}>które </AnimatedSpan>{" "}
          <AnimatedSpan delay={curtainDelay + 1.3}>inspirują </AnimatedSpan>{" "}
          <AnimatedSpan delay={curtainDelay + 1}> i </AnimatedSpan>{" "}
          <AnimatedSpan delay={curtainDelay + 1.3}> łączą </AnimatedSpan>{" "}
          {/* <AnimatedSpan delay={curtainDelay + 1.3}> biznesu</AnimatedSpan> */}
        </span>
      </h1>
    ),
    description: "Profesjonalna organizacja konferencji na najwyższym poziomie",
    buttonText: "Poznaj nas bliżej",
    mainImage:
      "https://cdn.syncguide.app/669833fce3c9078b3358694c/bbbe3895221364c6cc2e5a40012f38a06c5decb0500f81e8080813a7fc78dacc",
    logo: "https://evention.pl/wp-content/uploads/2016/02/logo_evention_www.png",
    bgGradientColor: ["#18AEEF", "red"],
  };

  useEffect(() => {
    gsap.to(".zoom-image", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".zoom-image",
        start: "top 50%",
        end: "bottom",
        scrub: true,
      },
    });

    gsap.to(".zoom-image", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".zoom-image",
        start: "top 1%",
        end: "bottom 0%",
        duration: 3,
        scrub: true,
      },
    });

    gsap.fromTo(
      ".after-animated-header",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: curtainDelay + 2,
        stagger: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    gsap.to("#section1", {
      paddingTop: "0px",
      scrollTrigger: {
        // trigger: ".section-blur",
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="min-h-screen mx-auto" id="quiz">
      <Curtain brand={brand} />
      {/* <Sidebar /> */}
      <Navbar brand={brand} />

      <div
        className="absolute inset-x-0 bottom-[60px] -z-10 blur-[50px] transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative  aspect-[1155/678] w-[56.125rem]  rotate-[180deg]  opacity-40 "
          style={{
            background: brand.bgGradientColor[1],
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        id="bg-gradient-shape-1"
        className="absolute  top-[0px] right-[0px] -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative  aspect-[1155/678] w-[36.125rem]  opacity-80 "
          style={{
            background: brand.bgGradientColor[0],

            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="absolute top-[600px] left-[50%] translate-x-[-50%]   zoom-image">
        <img src={brand.mainImage} alt="logo" />
      </div>

      <section id="home" className="py-10 sm:py-16 lg:py-12 h-[100vh]">
        <div
          className="relative px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8"
          style={{
            borderRadius: "1rem",
            padding: "6rem 2rem",
          }}
        >
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1 mt-12">
            <div className="relative">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center">
                <p className="mx-auto  max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6 after-animated-header">
                  Witamy w{" "}
                  <span className="border-b border-dotted border-slate-300">{brand.name}</span>
                </p>

                {brand.hero}

                <p className="after-animated-header mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                  {/* <span className="inline-block">Bring functionalities of other apps</span>
                  <span className="inline-block">into your Notion workspaces.</span> */}
                  {brand.description}
                </p>

                <div className=" after-animated-header mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                  <a
                    className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                    href="#"
                  >
                    <span className="">{brand.buttonText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[300px] relative" id="section1" style={{}}>
        <div
          id="section1-inside"
          className="pt-[500px] pb-[300px]"
          style={{
            backdropFilter: "blur(15px) brightness(100%)",
            background: "rgba(0, 0, 0, 0.04)",
            // transform: "translateY(100px)",
          }}
        >
          <Grid defaultColors={defaultColors} />
        </div>
      </section>
    </main>
  );
};
