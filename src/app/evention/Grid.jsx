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
  });
  const setState = (newState) => {
    setS((prev) => (newState));
  };
  const setBgGradientColor = setState;

  const elements = [
    {
      image: "https://evention.pl/wp-content/uploads/2023/07/ksc.png",
      onMouseEnter: () => setBgGradientColor("#18AEEF"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#18AEEF",
      title: "KSC Forum 2024",
      description: (
        <div>
          <p className="mb-2 font-bold">Hotel Crystal Mountain, Bukowa 19A, 43-460 Wisła</p>
          6. edycja konferencji skoncentrowanej ściśle na spełnieniu wymogów ustawy o KSC na
          poziomie danego przedsiębiorstwa i instytucji.
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#18AEEF",
              color: "white",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            28 sierpnia 2024 - 30 sierpnia 2024
          </span>
        </div>
      ),
    },
    {
      image: "https://evention.pl/wp-content/uploads/2024/01/aisp2024.jpg",
      onMouseEnter: () => setBgGradientColor("#62E7C2"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#62E7C2",
      title: "AI Summit Poland 2024",
      description: (
        <div>
          Potrzebujemy lepszej współpracy na poziomie krajowym, doskonalenia kompetencji i
          lawinowego przyrostu wdrożeń w polskich organizacjach. Nasza konferencja ma pomóc
          przybliżyć nas do realizacji tych celów – łącząc perspektywę biznesową AI z jej
          fundamentem technologicznym
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
            9 października 2024 - 10 października 2024
          </span>
        </div>
      ),
    },
    {
      image: "https://evention.pl/wp-content/uploads/2023/07/dora-1.png",
      onMouseEnter: () => setBgGradientColor("#18AEEF"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "#18AEEF",
      title: "DORA Forum 2024",
      description: (
        <div>
          <p className="mb-2 font-bold">Sound Garden Hotel ul. Żwirki</p>i Wigury 18, Warszawa, 2.
          edycja konferencji poświęcona tematyce DORA (Digital Operational Resilience Act). Do
          regulacji DORA, która z jednej strony stoi na fundamencie cyberodporności
        </div>
      ),
      tag: (
        <div>
          <span
            style={{
              backgroundColor: "#18AEEF",
              color: "white",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.8em",
            }}
          >
            23 października 2024 - 24 października 2024
          </span>
        </div>
      ),
    },
    {
      image: "https://evention.pl/wp-content/uploads/2022/12/ats.png",
      onMouseEnter: () => setBgGradientColor("red"),
      onMouseLeave: () => setBgGradientColor(null),
      primaryColor: "red",
      title: "Advanced Threat Summit 2024",
      description: (
        <div>
          <p className="mb-2 font-bold">Hotel Marriott Warszawa</p>
          11. z cyklu konferencja zbudowana wokół tematyki najpoważniejszych i najbardziej
          zaawansowanych zagrożeń w Internecie. Konferencja we współorganizacji z ISSA Polska.
          Planowana liczba uczestników: 500 osób. Konferencja zgromadzi CSO, CISO i Security
          menedżerów, osoby odpowiedzialne za bezpieczeństwo teleinformatyczne w przedsiębiorstwach
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
            13 listopada 2024 - 15 listopada 2024
          </span>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const elements = gridRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0 },
      {
        opacity: 1,
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
            background: state,
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
            background: state,
            transition: "background 1.8s",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 ">
        <h1 ref={titleRef} className="text-4xl font-bold text-center mb-12">
          Wydarzenia
        </h1>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="h-[300px] w-full z-10">
              <WhiteAlphaCard {...elements[0]} />
            </div>

            <div className="h-[300px] w-full">
              <WhiteAlphaCard {...elements[1]} />
            </div>
          </div>

          <div className="h-full">
            <WhiteAlphaCard {...elements[3]} />
          </div>
        </div>
        <div className="h-[300px] mt-4">
          <WhiteAlphaCard {...elements[2]} />
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
  imgHeight = "200px",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard
      cardScale={1.01}
      onMouseEnter={() => {
        onMouseEnter();
        setHovered(true);
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setHovered(false);
      }}
      rightElementPosition="top"
      rightElement={
        <img
          style={{
            height: imgHeight,
            transform: hovered ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.4s",
            padding: "15px",
          }}
          src={image}
          className="rounded-xl "
        />
      }
      topElement={
        <div
          className="m-1 p-6 rounded-2xl max-w-[400px]"
          style={
            {
              // backdropFilter: "blur(15px) brightness(100%)",
              // background: "rgba(0, 0, 0, 0.001)",
            }
          }
        >
          {tag && <div class="pb-2">{tag}</div>}
          <h2 class="text-2xl font-bold mb-2">{title}</h2>
          <p class="max-w-[600px] text-gray-600">{description}</p>
        </div>
      }
    >
      <div className="relative h-full rounded-2xl bg-white  neumorphism  ">
        <div className="absolute bottom-0 right-0 z-0  max-w-[500px] overflow-hidden">
          <TransparentInWrapper>
            <DotGrid gridSize={20} color={primaryColor} />
          </TransparentInWrapper>
        </div>
      </div>
    </TiltCard>
  );
};
