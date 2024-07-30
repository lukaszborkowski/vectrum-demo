"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const curtainVariants = {
  hidden: { opacity: 1, y: '0%' },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: '0', transition: { duration: 1 } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

export const Curtain = ({brand}) => {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 1600); // Czas trwania kurtyny w milisekundach (1.2 sekundy w tym przypadku)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showCurtain && (
        <motion.div
          className="curtain"
          variants={curtainVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={styles.curtain}
        >
          <motion.img
            src={brand?.logo ?? '/logoInno.png'}
            alt="Logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{...styles.logo}}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
  curtain: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Kolor tła kurtyny, możesz dostosować
    zIndex: 9999,
  },
  logo: {
    width: '300px', // Rozmiar loga, możesz dostosować
    height: 'auto',
  },
};
