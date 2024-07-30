import React, { useState, useEffect } from 'react';

const DotGrid = ({ color = 'lime', dotSize = 3, gridX = 50, gridY = 20, activePercentage = 5 }) => {
  const [activeDots, setActiveDots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveDots = [];
      const numberOfActiveDots = Math.floor((gridX * gridY * activePercentage) / 100);
      for (let i = 0; i < numberOfActiveDots; i++) {
        newActiveDots.push(Math.floor(Math.random() * gridX * gridY));
      }
      setActiveDots(newActiveDots);
    }, Math.random() * 3000 + 1000); // Randomize interval between 1000 and 4000 ms

    return () => clearInterval(interval);
  }, [gridX, gridY, activePercentage]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridX}, ${dotSize}px)`, gap: '10px' }}>
      {Array.from({ length: gridX * gridY }).map((_, index) => (
        <div
          key={index}
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: activeDots.includes(index) ? color : 'rgba(128, 128, 128, 0.2)',
            // boxShadow: activeDots.includes(index) ? `5px 5px 10px ${color}, 5px 5px 20px ${color}` : 'none',
            transition: 'background-color 1s, box-shadow 1s',
          }}
        />
      ))}
    </div>
  );
};

export default DotGrid;
