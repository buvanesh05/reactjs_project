import React, { useState } from 'react';

export const DropdownArrow = ({ isActive, isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the stroke color based on state
  const strokeColor = isActive
    ? "#FF692E"
    : isHovered
    ? "#FF692E" // Change this to your desired hover color
    : "white";

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}  // Set hovered state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hovered state on mouse leave
    >
      <path
        d={isOpen ? "M15 12.5L10 7.5L5 12.5" : "M1 1.5L6 6.5L11 1.5"}
        stroke={strokeColor} // Use the calculated stroke color
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
