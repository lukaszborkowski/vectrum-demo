import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const AnimatedSpan = ({ children, sequential = true, delay = 0 }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const letters = spanRef.current.querySelectorAll('.letter');
    
    if (sequential) {
      gsap.fromTo(
        letters,
        { y: '100%', opacity: 0, filter: 'blur(10px)' },
        {
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.05,
          duration: 0.5,
          delay,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.fromTo(
        letters,
        { y: '100%', opacity: 0, filter: 'blur(10px)' },
        {
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: { amount: 0.5, from: 'random' },
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [children, sequential]);

  const letters = children.split('').map((char, index) => (
    <span key={index} className="letter inline-block">
      {char}
    </span>
  ));

  return (
    <span ref={spanRef} className="inline-block overflow-hidden">
      {letters}
    </span>
  );
};
