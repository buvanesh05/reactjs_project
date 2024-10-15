import React, { useState } from 'react';
import Header from '../../Components/Common/Header';
import { ManufactureState } from '../Common/Manufactures/ManufactureState';
import { Retailers } from '../Common/Manufactures/Retailers';
import { Manufacturers } from '../Common/Manufactures/Manufacturers';
import { ExpandedRetailers } from '../Common/Manufactures/ExpandRetailers';

export const ManageManufactures = () => {
  const [activeTab, setActiveTab] = useState('Manufacturers');
  const [handleExpand, setHandleExpand] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setHandleExpand(false); 
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='border-b px-3.5 pt-[15px] pb-[16px]'>
        <Header />
      </div>
      {handleExpand ? <ExpandedRetailers /> : (<>
      <div className='pl-6 pr-6'>
      <ManufactureState activeTab={activeTab}/>
      </div>
      <div className='pl-0 pr-6 border-0 shadow-none sm:pl-6 pb-[24px]'>
        <div className='pt-3 pr-6'>
          <div className='border-b border-[rgba(234, 236, 240, 1)] flex gap-4 items-center h-[51px] '>
            <span
              className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'Manufacturers' ? 'text-orange-600 underline underline-offset-8' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
              onClick={() => handleTabClick('Manufacturers')}
            >
              Manufacturers
            </span>
            <span
              className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'Retailers' ? 'text-orange-600 underline underline-offset-8' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
              onClick={() => handleTabClick('Retailers')}
            >
              Retailers
            </span>
          </div>
        </div>
        {activeTab === 'Manufacturers' && <Manufacturers />}
        {activeTab === 'Retailers' && <Retailers setHandleExpand={setHandleExpand} />}
      </div>
</>)}
    </div>
  );
};
