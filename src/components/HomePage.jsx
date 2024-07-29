"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grid } from "./Grid";
import { AnimatedSpan } from "./AnimatedSpan";
import { TestimonialRow } from "./TestimonialRow";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const defaultColors = {
  bgGradientColor: ["#58DCCC", "purple"],
};

const curtainDelay = 1.5;
export const HomePage = () => {
  const [state, setS] = useState({
    bgGradientColor: ["#58DCCC", "purple"],
  });
  const setState = (newState) => {
    setS((prev) => ({ ...prev, ...newState }));
  };

  useEffect(() => {
    gsap.to(".zoom-image", {
      scale: 1.1,
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
      <div
        className="absolute inset-x-0 bottom-[60px] -z-10 blur-[70px] transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative  aspect-[1155/678] w-[56.125rem]  rotate-[180deg] bg-gradient-to-tr from-[#58DCCC] to-[#80dfff] opacity-40 "
          style={{
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
          className="relative  aspect-[1155/678] w-[36.125rem]  bg-gradient-to-tr from-[#58DCCC] to-[#58DCCC] opacity-80 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        id="bg-gradient-shape-1"
        className="absolute  top-[200px] right-[-200px] -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative  aspect-[1155/678] w-[36.125rem]  bg-gradient-to-tr from-[#58DCCC] to-[#58DCCC] opacity-40 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        id="bg-gradient-shape-2"
        className="absolute inset-x-0 top-[170%] -z-10 blur-[80px] opacity-50 transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative left-[0px] aspect-[1/1] w-[36.125rem] rotate-[180deg] "
          style={{
            background: state.bgGradientColor[0],
            transition: "background 1.8s",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="absolute w-[1000px]  top-[130%] right-[-700px] -z-10 blur-[90px] transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative opacity-50 right-[0px] aspect-[1/1] h-auto w-full  rotate-[180deg] opacity-1 sm:left-[calc(40%-30rem)] sm:w-[72.1875rem]"
          style={{
            background: state.bgGradientColor[0],
            transition: "background 1.8s",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="absolute top-[400px] left-[50%] translate-x-[-50%] w-[1300px]  zoom-image">
        <img src="/bg_inno.png" alt="logo" />
      </div>

      <section id="home" className="py-10 sm:py-16 lg:py-12 h-[100vh]">
        <div
          className="relative px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8"
          style={{
            borderRadius: "1rem",
            padding: "6rem 2rem",
          }}
        >
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1">
            <div className="relative">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center">
                <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6 after-animated-header">
                  Welcome to{" "}
                  <span className="border-b border-dotted border-slate-300">Vectrum Studio</span>
                </p>

                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                  <span className="inline-block">
                    <AnimatedSpan delay={curtainDelay}> Tworzymy </AnimatedSpan>{" "}
                    <span
                      className="relative whitespace-nowrap "
                      style={{
                        color: "rgb(110, 110, 115)",
                      }}
                    >
                      <AnimatedSpan delay={curtainDelay + 0.5}>nowoczesne</AnimatedSpan>
                    </span>
                  </span>{" "}
                  <span className="inline-block">
                    <AnimatedSpan delay={curtainDelay + 1}>strony </AnimatedSpan>{" "}
                    <AnimatedSpan delay={curtainDelay + 1.3}>internetowe </AnimatedSpan>{" "}
                    <AnimatedSpan delay={curtainDelay + 1}> dla </AnimatedSpan>{" "}
                    <AnimatedSpan delay={curtainDelay + 1.3}> Twojego </AnimatedSpan>{" "}
                    <AnimatedSpan delay={curtainDelay + 1.3}> biznesu</AnimatedSpan>
                  </span>
                </h1>

                <p className="after-animated-header mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                  <span className="inline-block">Bring functionalities of other apps</span>
                  <span className="inline-block">into your Notion workspaces.</span>
                </p>

                <div className=" after-animated-header mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                  <a
                    className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                    href="#"
                  >
                    <span className="ml-3">Add to Firefox</span>
                  </a>
                  <div
                    className="relative flex flex-1 flex-col items-stretch sm:flex-none"
                    data-headlessui-state=""
                  >
                    <button
                      className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                      id="headlessui-menu-button-:r4:"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-headlessui-state=""
                      type="button"
                    >
                      <span className="ml-3">Download for Mac</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[500px]" id="section1" style={{}}>
        <div
          id="section1-inside"
          className="pt-[500px]"
          style={{
            backdropFilter: "blur(15px) brightness(100%)",
            background: "rgba(0, 0, 0, 0.04)",
            // transform: "translateY(100px)",
          }}
        >
          <Grid setState={setState} defaultColors={defaultColors} />
        </div>
      </section>

      <section
        className="py-[500px]"
        style={{
          background: "rgba(0, 0, 0, 0.04)",
        }}
      >
        <TestimonialRow />
      </section>
    </main>
  );
};
