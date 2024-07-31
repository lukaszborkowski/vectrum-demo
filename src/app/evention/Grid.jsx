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


      <div className="max-w-6xl mx-auto px-4 relative">
        <h1 ref={titleRef} className="text-4xl font-bold text-center mb-12">
          Nasze Usługi
        </h1>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            <div className="h-[300px] w-full z-10">
              <WhiteAlphaCard
                image={"/bg12.png"}
                onMouseEnter={() => setState({ bgGradientColor: ["red", "green"] })}
                onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
                primaryColor="red"
                title={"Web Development"}
                description={
                  "Tworzymy nowoczesne i responsywne strony internetowe dostosowane do Twoich potrzeb."
                }
              />
            </div>

            <div className="h-[300px] w-full">
              <WhiteAlphaCard
                image={"/bg12-2.png"}
                onMouseEnter={() => setState({ bgGradientColor: ["green", "green"] })}
                onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
                primaryColor="green"
                title={"UX/UI Design"}
                description={"Projektujemy intuicyjne i przyjazne dla użytkownika interfejsy."}
              />
            </div>
          </div>

          <WhiteAlphaCard
            image={"/shape1.png"}
            onMouseEnter={() => setState({ bgGradientColor: ["black", "green"] })}
            onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
            primaryColor="black"
            title={"Mobile Development"}
            description={
              "Specjalizujemy się w tworzeniu aplikacji mobilnych na platformy iOS i Android."
            }
          />

          <div className="h-[240px]">
            <WhiteAlphaCard
              image={"/bg12-1.png"}
              onMouseEnter={() => setState({ bgGradientColor: ["blue", "green"] })}
              onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
              primaryColor="blue"
              title={"SEO Optimization"}
              description={
                "Zoptymalizujemy Twoją stronę internetową pod kątem wyszukiwarek, aby zwiększyć jej widoczność."
              }
            />
          </div>

          <div className="h-[240px]">
            <WhiteAlphaCard
              image={"/bg12-3.png"}
              onMouseEnter={() => setState({ bgGradientColor: ["yellow", "green"] })}
              onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
              primaryColor="yellow"
              title={"E-commerce Solutions"}
              description={
                "Oferujemy kompleksowe rozwiązania e-commerce, aby pomóc Ci sprzedawać online."
              }
            />
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
}) => {
  return (
    <TiltCard
      rightElement={<img src={image} className="h-[250px] rounded-xl " />}
      topElement={
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="m-1 p-6 rounded-2xl"
          style={{
            backdropFilter: "blur(15px) brightness(100%)",
            background: "rgba(0, 0, 0, 0.001)",
          }}
        >
          {tag}
          <h2 class="text-2xl font-bold mb-2">{title}</h2>
          <p class="max-w-[300px] text-gray-600">{description}</p>
        </div>
      }
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative h-full rounded-2xl bg-white  neumorphism "
      >
        <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
          <TransparentInWrapper>
            <DotGrid gridSize={20} color={primaryColor} />
          </TransparentInWrapper>
        </div>
      </div>
    </TiltCard>
  );
};
