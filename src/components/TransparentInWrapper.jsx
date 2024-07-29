import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="relative p-6 bg-transparent w-full h-full" >
      <div className="absolute inset-0 border-4 rounded-xl border-white pointer-events-none"></div>
      <div className="relative bg-transparent ">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
