"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./TiltCard";

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
        {/* <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>{" "}
            <span className="relative"> Usługi </span>
          </span> */}
      </h1>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <TiltCard>
              <div className="h-48 rounded-2xl  overflow-hidden neumorphism">
                <div
                  className="p-6 bg-contain bg-no-repeat bg-right-bottom h-full"
                  style={{ backgroundImage: 'url("/bg12.png")' }}
                  onMouseEnter={() => setState({ bgGradientColor: ["red", "green"] })}
                  onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
                >
                  <h2 class="text-2xl font-bold mb-2">Web Development</h2>
                  <p class="max-w-[300px] text-gray-600">
                    Tworzymy nowoczesne i responsywne strony internetowe dostosowane do Twoich
                    potrzeb.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          <TiltCard>
            <div className="h-48 rounded-2xl  overflow-hidden neumorphism">
              <div
                className="p-6 bg-contain bg-no-repeat bg-right-bottom h-full"
                style={{ backgroundImage: 'url("/bg12-2.png")' }}
                onMouseEnter={() => setState({ bgGradientColor: ["green", "green"] })}
                onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
              >
                <h2 className="text-2xl font-bold mb-2">UX/UI Design</h2>
                <p className="max-w-[300px] text-gray-600">
                  Projektujemy intuicyjne i przyjazne dla użytkownika interfejsy.
                </p>
              </div>
            </div>
          </TiltCard>
        </div>

        <TiltCard>

        <div class=" rounded-2xl  overflow-hidden z-0 neumorphism h-full">
          <div
            className="p-6 bg-contain bg-no-repeat bg-right-bottom h-full"
            style={{ backgroundImage: 'url("/shape1.png")' }}
            onMouseEnter={() => setState({ bgGradientColor: ["black", "green"] })}
            onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
          >
            <h2 className="text-2xl font-bold mb-2">Mobile Development</h2>
            <p className="max-w-[300px] text-gray-600">
              Specjalizujemy się w tworzeniu aplikacji mobilnych na platformy iOS i Android.
            </p>
          </div>
        </div>
        </TiltCard>


        <TiltCard>

        <div class="h-48 rounded-2xl  overflow-hidden neumorphism">
          <div
            className="p-6 bg-contain bg-no-repeat bg-right-bottom h-full"
            style={{ backgroundImage: 'url("/bg12-1.png")' }}
            onMouseEnter={() => setState({ bgGradientColor: ["blue", "green"] })}
            onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
          >
            <h2 className="text-2xl font-bold mb-2">SEO Optimization</h2>
            <p className="max-w-[300px] text-gray-600">
              Zoptymalizujemy Twoją stronę internetową pod kątem wyszukiwarek, aby zwiększyć jej
              widoczność.
            </p>
          </div>
        </div>
        </TiltCard>


        <TiltCard>

        <div class="h-48 rounded-2xl  overflow-hidden neumorphism">
          <div
            className="p-6 bg-contain bg-no-repeat bg-right-bottom h-full"
            style={{ backgroundImage: 'url("/bg12-3.png")' }}
            onMouseEnter={() => setState({ bgGradientColor: ["yellow", "green"] })}
            onMouseLeave={() => setState({ bgGradientColor: defaultColors.bgGradientColor })}
          >
            <h2 className="text-2xl font-bold mb-2">E-commerce Solutions</h2>
            <p className="max-w-[300px] text-gray-600">
              Oferujemy kompleksowe rozwiązania e-commerce, aby pomóc Ci sprzedawać online.
            </p>
          </div>
        </div>
        </TiltCard>

      </div>
    </div>
  );
};
