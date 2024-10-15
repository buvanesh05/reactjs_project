import React, { useState } from 'react';
import filterlines from '../../../Svg/filter-lines.svg';

export const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');


   

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
 
 <div class="flex flex-row gap-2 mb-3">
        <select id="statusFilter" class="p-2 border rounded-lg">
          <option value="">
            <span>
              <img src={filterlines} class="inline-block mr-2" alt="Filter" />
              Filter
            </span>
          </option>
          ${Object.keys(statusColors).map(status => `<option value="${status}">${status}</option>`).join('')}
        </select>
      </div>
 
  );
};
