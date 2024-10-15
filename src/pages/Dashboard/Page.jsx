import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../Components/Common/Sidebar';
export const DashboardLayout = () => {
  return (
    <div className='flex flex-row w-full '>
        <Sidebar/>
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  );
};
