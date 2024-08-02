import React, { useRef, useEffect } from "react";



const elementTiltEffectSettings = {
  topElement: {
    max: 5, // max tilt rotation for topElement (degrees)
    scale: 1, // transform scale for topElement
    translateZ: 40, // translate Z distance for topElement (pixels)
  },
  rightElement: {
    max: 5, // max tilt rotation for rightElement (degrees)
    scale: 1, // transform scale for rightElement
    translateZ: 40, // translate Z distance for rightElement (pixels)
  },
};

const TiltCard = ({ backgroundColor, children, topElement, rightElement, onMouseEnter, onMouseLeave, rightElementPosition, cardScale = 1.07 }) => {
  
  const tiltEffectSettings = {
    max: 15, // max tilt rotation (degrees)
    perspective: 6000, // transform perspective (pixels)
    scale: cardScale, // transform scale
    speed: 2500, // speed of the enter/exit transition (milliseconds)
    easing: "cubic-bezier(.03,.98,.52,.99)", // easing of the enter/exit transition
  };

  const cardRef = useRef(null);
  const topElementRef = useRef(null);
  const rightElementRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (tiltEffectSettings.max * mouseY) / (rect.height / 2);
    const rotateY = (-tiltEffectSettings.max * mouseX) / (rect.width / 2);
    setTransition(card);
    card.style.transform = `
      perspective(${tiltEffectSettings.perspective}px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})
    `;

    if (topElementRef.current) {
      const topRotateX = (elementTiltEffectSettings.topElement.max * mouseY) / (rect.height / 2);
      const topRotateY = (-elementTiltEffectSettings.topElement.max * mouseX) / (rect.width / 2);
      const topElement = topElementRef.current;
      topElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(${topRotateX}deg) 
        rotateY(${topRotateY}deg) 
        translateZ(${elementTiltEffectSettings.topElement.translateZ}px) 
        scale3d(1, 1, 1)
      `;
    }

    if (rightElementRef.current) {
      const rightRotateX =
        (elementTiltEffectSettings.rightElement.max * mouseY) / (rect.height / 2);
      const rightRotateY =
        (-elementTiltEffectSettings.rightElement.max * mouseX) / (rect.width / 2);
      const rightElement = rightElementRef.current;
      rightElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(${rightRotateX}deg) 
        rotateY(${rightRotateY}deg) 
        translateZ(${elementTiltEffectSettings.rightElement.translateZ}px) 
        scale3d(1, 1, 1)
      `;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    setTransition(card);
    card.style.transform = `
      perspective(${tiltEffectSettings.perspective}px) 
      rotateX(0deg) 
      rotateY(0deg) 
      scale3d(1, 1, 1)
    `;

    if (topElementRef.current) {
      const topElement = topElementRef.current;
      setTransition(topElement);
      topElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(${elementTiltEffectSettings.topElement.translateZ}px)
        scale3d(1, 1, 1)
      `;
    }

    if (rightElementRef.current) {
      const rightElement = rightElementRef.current;
      setTransition(rightElement);
      rightElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(${elementTiltEffectSettings.rightElement.translateZ}px)
        scale3d(1, 1, 1)
      `;
    }
  };

  const setTransition = (element) => {
    element.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    clearTimeout(element.transitionTimeoutId);
    element.transitionTimeoutId = setTimeout(() => {
      element.style.transition = "";
    }, tiltEffectSettings.speed);
  };

  useEffect(() => {
    const card = cardRef.current;
    const topElement = topElementRef.current;
    const rightElement = rightElementRef.current;

    // Set initial transform
    card.style.transform = `
      perspective(${tiltEffectSettings.perspective}px) 
      rotateX(0deg) 
      rotateY(0deg) 
      scale3d(1, 1, 1)
    `;

    if (topElement) {
      topElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(${elementTiltEffectSettings.topElement.translateZ}px) 
        scale3d(1, 1, 1)
      `;
    }

    if (rightElement) {
      rightElement.style.transform = `
        perspective(${tiltEffectSettings.perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(${elementTiltEffectSettings.rightElement.translateZ}px) 
        scale3d(1, 1, 1)
      `;
    }

    setTransition(card); // Set initial transition
    if (topElement) setTransition(topElement);
    if (rightElement) setTransition(rightElement);

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-full z-0 hover:z-10 transition-transform duration-500 ease-in-out cursor-pointer"
      style={{ backgroundColor }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {rightElement && (
        <div ref={rightElementRef} className="absolute  right-0 bottom-0 z-20 pointer-events-none"
        style={{
          top: rightElementPosition === "top" ? "0" : "auto",
          bottom: rightElementPosition === "bottom" ? "0" : "auto",
        }}
        >
          {rightElement}
        </div>
      )}
      {topElement && (
        <div ref={topElementRef} className="absolute z-20 ">
          {topElement}
        </div>
      )}
      {children}
    </div>
  );
};

export default TiltCard;
