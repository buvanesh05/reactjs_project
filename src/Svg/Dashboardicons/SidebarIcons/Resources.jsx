import React from 'react';

export const Resources = ({ isActive }) => {
  return (
    <svg 
    width="16"
    height=  "16" 
      viewBox="0 0 14 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M8.33366 1.51318V4.26688C8.33366 4.64025 8.33366 4.82693 8.40632 4.96954C8.47024 5.09498 8.57222 5.19697 8.69766 5.26088C8.84027 5.33354 9.02696 5.33354 9.40033 5.33354H12.154M9.66699 8.66683H4.33366M9.66699 11.3335H4.33366M5.66699 6.00016H4.33366M8.33366 1.3335H4.86699C3.74689 1.3335 3.18683 1.3335 2.75901 1.55148C2.38269 1.74323 2.07673 2.04919 1.88498 2.42552C1.66699 2.85334 1.66699 3.41339 1.66699 4.5335V11.4668C1.66699 12.5869 1.66699 13.147 1.88498 13.5748C2.07673 13.9511 2.38269 14.2571 2.75901 14.4488C3.18683 14.6668 3.74689 14.6668 4.86699 14.6668H9.13366C10.2538 14.6668 10.8138 14.6668 11.2416 14.4488C11.618 14.2571 11.9239 13.9511 12.1157 13.5748C12.3337 13.147 12.3337 12.5869 12.3337 11.4668V5.3335L8.33366 1.3335Z" 
        stroke={isActive ? "#FF692E" : "#D0D5DD"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
