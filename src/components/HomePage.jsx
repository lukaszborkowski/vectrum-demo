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
  bgGradientColor: ["#0065E9", "purple"],
};

export const HomePage = () => {
  const [state, setS] = useState({
    bgGradientColor: ["#0065E9", "purple"],
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
        start: "top 5%",
        end: "bottom 0%",
        scrub: true,
      },
    });
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

  // useEffect(() => {
  //   gsap.to("#section1-inside", {
  //     paddingTop: "0px",
  //     scrollTrigger: {
  //       start: "top 50%",
  //       end: "bottom 0%",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.to("#bg-gradient-shape-1", {
  //     y: "-100vh", // przesuwa w górę o wysokość viewportu
  //     scrollTrigger: {
  //       trigger: "#bg-gradient-shape-1",
  //       start: "top bottom", // rozpoczyna efekt gdy góra elementu spotyka się z dołem viewportu
  //       end: "bottom top", // kończy efekt gdy dół elementu spotyka się z górą viewportu
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <main className="min-h-screen mx-auto" id="quiz">
      <div
        className="absolute inset-x-0 bottom-[60px] -z-10 blur-[70px] transform-gpu overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-4rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#0065E9] to-[#80dfff] opacity-30 sm:left-[calc(40%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        id="bg-gradient-shape-1"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative right-[0px] aspect-[1155/678] w-[36.125rem]  bg-gradient-to-tr from-[#35b8e3] to-[#0065E9] opacity-30 "
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
            transition: "background 0.8s",
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
            transition: "background 0.8s",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="absolute top-[500px] left-[50%] translate-x-[-50%]  zoom-image">
        <img src="/bg_33.webp" alt="logo" />
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
                <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                  Welcome to{" "}
                  <span className="border-b border-dotted border-slate-300">Vectrum Studio</span>
                </p>

                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                  <span className="inline-block">
                    <AnimatedSpan> Tworzymy </AnimatedSpan>{" "}
                    <span
                      className="relative whitespace-nowrap "
                      style={{
                        color: "rgb(110, 110, 115)",
                      }}
                    >
                      {/* <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                        preserveAspectRatio="none"
                      >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                      </svg>{" "} */}
                      <AnimatedSpan delay={0.5}>nowoczesne</AnimatedSpan>
                    </span>
                  </span>{" "}
                  <span className="inline-block">
                    <AnimatedSpan delay={1}>strony </AnimatedSpan>{" "}
                    <AnimatedSpan delay={1.3}>internetowe </AnimatedSpan>{" "}
                    <AnimatedSpan delay={1}> dla </AnimatedSpan>{" "}
                    <AnimatedSpan delay={1.3}> Twojego </AnimatedSpan>{" "}
                    <AnimatedSpan delay={1.3}> biznesu</AnimatedSpan>
                  </span>
                </h1>

                <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                  <span className="inline-block">Bring functionalities of other apps</span>
                  <span className="inline-block">into your Notion workspaces.</span>
                </p>

                <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
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

      <section
        // className="section-blur"
        className="pt-[500px]"
        id="section1"
        style={
          {
            // height: "100vh",
            // background: "green",
          }
        }
      >
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
