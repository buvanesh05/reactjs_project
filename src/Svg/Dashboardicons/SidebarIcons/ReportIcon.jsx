import React from 'react';

export const ReportIcon = ({ isActive }) => {
  return (
    <svg 
       width="16"
      height=  "16"
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12.2133 7.99996C13.9467 7.99996 14.6667 7.33329 14.0267 5.14662C13.5933 3.67329 12.3267 2.40662 10.8533 1.97329C8.66667 1.33329 8 2.05329 8 3.78662V5.70662C8 7.33329 8.66667 7.99996 10 7.99996H12.2133Z" 
        stroke={isActive ? "#FF692E" : "#D0D5DD"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.333 9.80001C12.713 12.8867 9.75296 15.1267 6.38629 14.58C3.85963 14.1733 1.82629 12.14 1.41296 9.61334C0.872961 6.26001 3.09963 3.30001 6.17296 2.67334" 
        stroke={isActive ? "#FF692E" : "#D0D5DD"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
