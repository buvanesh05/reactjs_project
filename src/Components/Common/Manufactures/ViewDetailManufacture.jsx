import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import previousArrow from '../../../Svg/previousArrow.svg';
import editIcon from '../../../Svg/editIcon.svg';
import { ViewDetailManufactureOverview } from './ViewDetailManufactureOverview';
import ExpandedDocumentTable from './ExpandedDocumentTable';

import ViewRetailersDocument from './ViewRetailersDocument';

const ViewDetailManufacture = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); 
    };
  
    const [handleExpand, setHandleExpand] = useState(false);
    const [activeTab, setActiveTab] = useState('Overview');
    
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      setHandleExpand(false);
    };
    
  return (
    <>
      <Header />
      {handleExpand ? (
        <ExpandedDocumentTable />
      ) : (
        <>
    <div>
        <div className='flex flex-row justify-between items-center py-4 px-6'>
            <div className='flex flex-row gap-[10px] items-center'>
              <span className='w-[24px] h-[24px] content-center cursor-pointer'  onClick={handleBackClick}><img src={previousArrow} alt='' className='w-[14px] h-[14px] ' /></span>
              <span className='font-bold text-lg'>View Detail</span>
          
            </div>
            <div>
              <button className='border border-[rgba(234, 236, 240, 1)] py-2.5 px-4 rounded-lg flex flex-row gap-2 items-center' >
                <img src={editIcon} alt="edit" className="" />
                <span className='font-semibold text-sm leading-[16.94px]'>Edit Detail</span>
              </button>
            </div>
          </div>
          <div className='pl-0 pr-6 border-0 shadow-none sm:pl-6'>
            <div className='pt-3 pr-6'>
              <div className='border-b border-[rgba(234, 236, 240, 1)] flex gap-4 items-center h-[51px]'>
                <span
                  className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'Overview' ? 'text-orange-600 underline underline-offset-8' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
                  onClick={() => handleTabClick('Overview')}
                >
                  Overview
                </span>
                <span
                  className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'Documents' ? 'text-orange-600 underline underline-offset-8' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
                  onClick={() => handleTabClick('Documents')}
                >
                  Documents
                </span>
              </div>
              {activeTab === 'Overview' && <ViewDetailManufactureOverview  />}
              {activeTab === 'Documents' && <ViewRetailersDocument setHandleExpand={setHandleExpand} />}
            </div>
         
          </div>
    </div>
    </>
      )}
    </>
  )
}

export default ViewDetailManufacture