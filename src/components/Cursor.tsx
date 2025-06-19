import React from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

const Cursor: React.FC<CursorProps> = ({ position, isHovering }) => {
  return (
    <>
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className={`w-full h-full rounded-full border-2 ${
          isHovering ? 'border-gold bg-gold/20' : 'border-electric bg-electric/20'
        } backdrop-blur-sm`} />
      </motion.div>

      <motion.div
        className="fixed w-2 h-2 pointer-events-none z-50"
        animate={{
          x: position.x - 4,
          y: position.y - 4
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35
        }}
      >
        <div className={`w-full h-full rounded-full ${
          isHovering ? 'bg-gold' : 'bg-electric'
        }`} />
      </motion.div>
    </>
  );
};

export default Cursor;