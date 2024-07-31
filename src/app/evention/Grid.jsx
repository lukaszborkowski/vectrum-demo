"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TiltCard from "@/components/TiltCard";
import DotGrid from "@/components/DotGrid";
import TransparentInWrapper from "@/components/TransparentInWrapper";

export const Grid = ({ defaultColors }) => {
  const gridRef = useRef(null);
  const titleRef = useRef(null);

 

  const [state, setS] = useState({
    bgGradientColor: ["white", "purple"],
  });
  const setState = (newState) => {
    setS((prev) => ({ ...prev, ...newState }));
  };
  const setBgGradientColor = setState
  const elements = [
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/2ef3c1606968157ea81ef77b4c82e73e2407fc54739739eaa46ba22b346782a6",
      onMouseEnter: () => setBgGradientColor("#B3E634"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#B3E634",
      title: "Start for Free",
      description: (
        <div>
          Free first episode from our most popular Become a 3D Illustrator course. Only takes one
          hour and guides you through the first steps with Blender.
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#B3E634",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            Start Here
          </span>
        </div>
      ),
    },
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/0173c2437153541c904ad9e4916ea3ac88c680c9f8021caa5dd243492ceb28e9",
      onMouseEnter: () => setBgGradientColor("#62E7C2"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#62E7C2",
      title: "Become a 3D Illustrator",
      description: (
        <div>
          Most effective beginner Blender course on the market. Go from simple cubic design to
          complex low poly colorful illustrations in 5 episodes and 25+ hours of content. <br />
          <div style={{ marginTop: "1em" }}>
            <strong style={{ fontSize: "1.4em" }}>$99</strong> <br />
            <span style={{ fontSize: "0.8em", color: "grey" }}>final price including TAX</span>
          </div>
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#62E7C2",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            Beginner
          </span>
        </div>
      ),
    },
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/0d4f515c16f52218ce3c526e751b310e63fafe83287eac40a692a79f92c08044",
      imgHeight: "400px",
      onMouseEnter: () => setBgGradientColor("red"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "red",
      title: "Ultimate 3D Bundle",
      description: (
        <div>
          Get three Polygon Runway courses in a single bundle! Your one stop career-changing course
          bundle to get from zero to hero in the quickest and most effective way. <br />
          <div style={{ marginTop: "1em" }}>
            <span style={{ textDecoration: "line-through", color: "grey" }}>$346</span>{" "}
            <strong style={{ fontSize: "1.4em" }}>$249</strong> <br />
            <span style={{ fontSize: "0.8em", color: "grey" }}>final price including TAX</span>
          </div>
          <div style={{ marginTop: "1em" }}>
            <span style={{ color: "green", fontWeight: "bold" }}>SAVE $97</span>
          </div>
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            Bundle
          </span>
        </div>
      ),
    },
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/47a6fee073aa103a95924960453d421b9f92e813ff70a46b05fae9bb963a10c6",
      onMouseEnter: () => setBgGradientColor("#8ac7db"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#8ac7db",
      title: "Arcane House",
      description: (
        <div>
          This new course is designed to teach you all the techniques you need to create stunning 3D
          environments. This course includes stylized cartoon house modeling, advanced texturing,
          tree and foliage creation, and detailed lighting lessons in 9+ hours of content. <br />
          <div style={{ marginTop: "1em" }}>
            <strong style={{ fontSize: "1.4em" }}>$89</strong> <br />
            <span style={{ fontSize: "0.8em", color: "grey" }}>final price including TAX</span>
          </div>
          <div style={{ marginTop: "1em" }}>
            <span style={{ color: "red", fontWeight: "bold" }}>NEW</span>
          </div>
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#8ac7db",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            New Course
          </span>
        </div>
      ),
    },
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/8af4004d1656a0f5667a092de1576c5f8596feb602420083ae99325a00c3690e",
      onMouseEnter: () => setBgGradientColor("#FFCC36"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#FFCC36",
      title: "3D Characters and Illustrations",
      description: (
        <div>
          Expand your Blender knowledge and learn to create fully rigged 3D cartoon characters. Dive
          deeper into 3D techniques and learn to create smooth shaded colorful illustrations, hard
          surface modeling techniques and get your hands on sculpting. <br />
          <div style={{ marginTop: "1em" }}>
            <strong style={{ fontSize: "1.4em" }}>$198</strong> <br />
            <span style={{ fontSize: "0.8em", color: "grey" }}>final price including TAX</span>
          </div>
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#FFCC36",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            Intermediate
          </span>
        </div>
      ),
    },
    {
      image:
        "https://cdn.syncguide.app/669833fce3c9078b3358694c/4e05276d27dfca0f76a39ef4ad79384912dede2208581bbdb37329c974fe42f4",
      onMouseEnter: () => setBgGradientColor("#62E7C2"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#62E7C2",
      title: "3D Lettering",
      description: (
        <div>
          Unlock your creative potential, learn Blender from scratch and create beautiful 3D type
          layouts to complement your designs, websites, or social media posts. <br />
          <div style={{ marginTop: "1em" }}>
            <strong style={{ fontSize: "1.4em" }}>$49</strong> <br />
            <span style={{ fontSize: "0.8em", color: "grey" }}>final price including TAX</span>
          </div>
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#62E7C2",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            Beginner
          </span>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const elements = gridRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "bottom 80%",
          scrub: false,
        },
      }
    );
    //   gsap.fromTo(
    //     gridRef.current,
    //     {  },
    //     {
    //       opacity: 1,
    //       y: 100,
    //       scale: 0.5,
    //       duration: 1,
    //       stagger: 0.2,
    //       scrollTrigger: {
    //         trigger: gridRef.current,
    //         start: "top 50%",
    //         end: "bottom 15%",
    //         scrub: true,
    //       },
    //     }
    //   );
  }, []);

  return (
    <div className="relative">
      <div
        id="bg-gradient-shape-2"
        className="absolute inset-x-0 top-[0%] -z-10 blur-[80px] opacity-50 transform-gpu overflow-hidden"
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
        className="absolute w-[1000px]  top-[00%] right-[-700px] -z-10 blur-[90px] transform-gpu overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-4 ">
        <h1 ref={titleRef} className="text-4xl font-bold text-center mb-12">
          Nasze Usługi
        </h1>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            <div className="h-[300px] w-full z-10">
              <WhiteAlphaCard {...elements[0]} />
            </div>

            <div className="h-[300px] w-full">
              <WhiteAlphaCard {...elements[1]} />
            </div>
          </div>

          <div className="min-h-[300px]">
            <WhiteAlphaCard {...elements[2]} />
          </div>

          <div className="h-[440px]">
            <WhiteAlphaCard {...elements[3]} />
          </div>

          <div className="h-[440px]">
            <WhiteAlphaCard {...elements[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhiteAlphaCard = ({
    image,
    onMouseEnter,
    onMouseLeave,
    primaryColor,
    title,
    description,
    tag,
    imgHeight = "250px",
  }) => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <TiltCard
        onMouseEnter={() => {
          onMouseEnter();
          setHovered(true);
        }}
        onMouseLeave={() => {
          onMouseLeave();
          setHovered(false);
        }}
        rightElement={
          <img
            style={{
              height: imgHeight,
              transform: hovered ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.4s",
            }}
            src={image}
            className="rounded-xl "
          />
        }
        topElement={
          <div
            className="m-1 p-6 rounded-2xl"
            style={{
              backdropFilter: "blur(15px) brightness(100%)",
              background: "rgba(0, 0, 0, 0.001)",
            }}
          >
            {tag && <div class="pb-2">{tag}</div>}
            <h2 class="text-2xl font-bold mb-2">{title}</h2>
            <p class="max-w-[300px] text-gray-600">{description}</p>
          </div>
        }
      >
        <div
         
          className="relative h-full rounded-2xl bg-white  neumorphism "
        >
          <div className="absolute bottom-0 right-0 z-0  max-w-[500px] overflow-hidden">
            <TransparentInWrapper>
              <DotGrid gridSize={20} color={primaryColor} />
            </TransparentInWrapper>
          </div>
        </div>
      </TiltCard>
    );
  };
  