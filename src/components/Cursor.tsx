import React from 'react';

interface CursorProps {
  position: { x: number; y: number };
  isHovering: boolean;
}

const Cursor: React.FC<CursorProps> = () => {
  // cursor UI removed; component intentionally renders nothing
  return null;
};

export default Cursor;