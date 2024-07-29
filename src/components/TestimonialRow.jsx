
// App.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'tailwindcss/tailwind.css';

const testimonials = [
  "Testimonial 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Testimonial 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Testimonial 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Testimonial 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Testimonial 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
];

export const TestimonialRow = ({  direction }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const tween = gsap.to(rowRef.current, {
      translateX: direction === 'left' ? "-1000px" : "1000px",
      ease: 'none',
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      tween.kill();
    };
  }, [direction]);

  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4" ref={rowRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-w-max bg-gray-200 p-4 rounded shadow">
            {testimonial}
          </div>
        ))}
      </div>
    </div>
  );
};