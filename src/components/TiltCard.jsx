import React, { useRef, useEffect } from 'react';

const tiltEffectSettings = {
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // transform perspective (pixels)
  scale: 1.07, // transform scale
  speed: 2500, // speed of the enter/exit transition (milliseconds)
  easing: "cubic-bezier(.03,.98,.52,.99)" // easing of the enter/exit transition
};

const TiltCard = ({ backgroundColor, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (tiltEffectSettings.max * mouseY) / (rect.height / 2);
    const rotateY = (-tiltEffectSettings.max * mouseX) / (rect.width / 2);

    setTransition(card); // Ensure transition is set
    card.style.transform = `
      perspective(${tiltEffectSettings.perspective}px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})
    `;
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
  };

  const setTransition = (card) => {
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    clearTimeout(card.transitionTimeoutId);
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  };

  useEffect(() => {
    const card = cardRef.current;
    setTransition(card); // Set initial transition
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
      className="w-full h-full z-10"
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
