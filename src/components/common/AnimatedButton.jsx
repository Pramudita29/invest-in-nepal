import React from 'react';
import { motion } from 'framer-motion';

// Named export
export const AnimatedButton = ({ text, link }) => {
  return (
    <motion.a
      href={link}
      className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#8B0000] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};
