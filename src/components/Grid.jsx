"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./TiltCard";
import DotGrid from "./DotGrid";
import TransparentInWrapper from "./TransparentInWrapper";

export const Grid = ({ setState, defaultColors }) => {
  const gridRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   titleRef.current,
    //   { y: -50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: titleRef.current,
    //       start: "top 90%",
    //       end: "bottom 80%",
    //       scrub: true,
    //     },
    //   }
    // );

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
    <div className="max-w-6xl mx-auto px-4 ">
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
      rightElement={<img src={image} className="h-full rounded-xl " />}
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
