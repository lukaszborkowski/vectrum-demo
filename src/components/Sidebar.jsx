"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState("home");

  useEffect(() => {
    const sections = [
      { id: "about-section", position: "about" },
      { id: "projects-section", position: "projects" },
      { id: "contact-section", position: "contact" },
    ];

    const padding = 200;

    const scrollHandler = () => {
      const yOffset = window.pageYOffset;
      let newScrollPosition = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop - padding < yOffset) {
          newScrollPosition = section.position;
          break;
        }
      }

      setScrollPosition(newScrollPosition);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return scrollPosition;
};

const socialLinks = {
  fb: "https://www.facebook.com",
  github: "https://github.com/reeplayed",
  linkedin: "",
};

export const Sidebar = () => {
  const scrollPosition = useScrollPosition();
  const topLineRef = useRef(null);
  const lineRef = useRef(null);
  const iconsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    const topLine = topLineRef.current;
    const icons = iconsRef.current;
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.set([line, ...icons.children, topLine], { autoAlpha: 0 });
    tl.set(section, { x: "-=30", autoAlpha: 0 });

    tl.fromTo(line, { y: "+=300" }, { y: "10", autoAlpha: 1, duration: 0.6, delay: "1" })
      .to(section, 0.4, { x: "0", autoAlpha: 1 })
      .staggerTo([...icons.children, topLine], 1, { autoAlpha: 1 }, 0.2);
  }, []);

  const getTransform = (position) => {
    const positions = {
      home: "translateX(0)",
      about: "translateX(25%)",
      projects: "translateX(50%)",
      contact: "translateX(75%)",
    };
    return positions[position] || "translateX(0)";
  };

  const getTransformTopLine = (position) => {
    const positions = {
      home: "translateY(-75%)",
      about: "translateY(-50%)",
      projects: "translateY(-25%)",
      contact: "translateY(0)",
    };
    return positions[position] || "translateY(0)";
  };

  const icons = [
    {
      href: socialLinks.linkedin,
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 25.999C20.1797 25.999 26 20.1787 26 12.999C26 5.81929 20.1797 -0.00100708 13 -0.00100708C5.8203 -0.00100708 0 5.81929 0 12.999C0 20.1787 5.8203 25.999 13 25.999Z"
            // fill="#828282"
          />
          <path
            d="M20.7674 14.0458V19.4054H17.66V14.405C17.66 13.1495 17.2114 12.292 16.0863 12.292C15.2277 12.292 14.7176 12.8693 14.4924 13.4282C14.4106 13.628 14.3895 13.9054 14.3895 14.1856V19.4052H11.2819C11.2819 19.4052 11.3236 10.9361 11.2819 10.0595H14.3897V11.3839C14.3835 11.3943 14.3747 11.4045 14.3691 11.4144H14.3897V11.3839C14.8027 10.7484 15.5392 9.84002 17.1903 9.84002C19.2347 9.84002 20.7674 11.1758 20.7674 14.0458ZM8.0311 5.5545C6.96812 5.5545 6.27267 6.25227 6.27267 7.16902C6.27267 8.0663 6.94796 8.78423 7.99031 8.78423H8.01047C9.09431 8.78423 9.7682 8.0663 9.7682 7.16902C9.74758 6.25227 9.09431 5.5545 8.0311 5.5545ZM6.45737 19.4054H9.56381V10.0595H6.45737V19.4054Z"
            fill="#F1F2F2"
          />
        </svg>
      ),
    },
    {
      href: socialLinks.fb,
      icon: (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2 0.199997C6.02075 0.199997 0.199997 6.05073 0.199997 13.267C0.199997 19.8179 5.00133 25.2276 11.2565 26.1728V16.7297H8.04008V13.2953H11.2565V11.0096C11.2565 7.22567 13.0906 5.56508 16.2192 5.56508C17.7175 5.56508 18.5105 5.67723 18.8853 5.72732V8.72511H16.7512C15.423 8.72511 14.9593 9.99151 14.9593 11.418V13.2953H18.8517L18.3242 16.7297H14.9593V26.2C21.3044 25.3354 26.2 19.8821 26.2 13.267C26.2 6.05073 20.3792 0.199997 13.2 0.199997Z"
            // fill="#828282"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 items-center bottom-[40px] left-5 z-10 sm:left-[50px] ">
      <div className="overflow-hidden py-0 px-0.5" ref={topLineRef}>
        <span
          className="block relative w-px bg-gray-200 h-36 rounded-full transition-all duration-1000"
          style={{
            "--tw-bg-opacity": 1,
            "--tw-transform": getTransformTopLine(scrollPosition),
          }}
        >
          <span className="block relative w-full h-full bg-gray-900 transform transition-transform duration-800 rounded-full" />
        </span>
      </div>

      <div className="relative overflow-hidden w-7.5 h-20" ref={sectionRef}>
        <div
          className="absolute top-0 right-0 w-[400%] h-full flex transition-transform duration-500"
          style={{ transform: getTransform(scrollPosition) }}
        >
          {["CONTACT", "PROJECTS", "ABOUT", "HOME"].map((title) => (
            <div className="w-1/4 h-full flex items-center justify-center" key={title}>
              <span className="text-gray-500 text-xs transform rotate-90">{title}</span>
            </div>
          ))}
        </div>
      </div>
      <div ref={iconsRef} className="flex flex-col gap-2 text-gray-400 ">
        {icons.map((link, index) => (
          <div
            className=" cursor-pointer transition-transform duration-100 hover:scale-125"
            key={index}
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </div>
        ))}
      </div>
      <span className="block relative w-px bg-gray-900 h-12.5 rounded-full" ref={lineRef} />
    </div>
  );
};
