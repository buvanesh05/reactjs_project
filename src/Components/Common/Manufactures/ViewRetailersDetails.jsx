import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import editIcon from '../../../Svg/editIcon.svg';
import previousArrow from '../../../Svg/previousArrow.svg';
import ViewDetailOverview from './ViewDetailOverview';
import ViewRetailersDocument from './ViewRetailersDocument';
import ExpandedDocumentTable from './ExpandedDocumentTable';

const ViewRetailersDetails = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-2);  
    };
  
  const [handleExpand, setHandleExpand] = useState(false);
  const statusColors = {
    "Active": "text-[#027A48]",
    "In-Active": "text-slate-500",
  };

  const statusBgColors = {
    "Active": "bg-[#ECFDF3]",
    "In-Active": "bg-gray-50"
  };
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Overview');
  const { formData } = location.state || {};

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setHandleExpand(false);
  };
  const handleEditBtn = () => {
    navigate('editDetail');
  };
  return (
    <>
      <Header />
      {handleExpand ? (
        <ExpandedDocumentTable />
      ) : (
        <>
          <div className='flex flex-row justify-between items-center py-4 px-6'>
            <div className='flex flex-row gap-[10px] items-center'>
              <span className='w-[24px] h-[24px] content-center cursor-pointer'  onClick={ handleBackClick}><img src={previousArrow} alt='' className='w-[14px] h-[14px]' /></span>
              <span className='font-bold text-lg'>View Detail</span>
              <span className={`py-0.5 px-2 rounded-[16px] ${statusColors[formData.status]} ${statusBgColors[formData.status]}`}>
                {formData.status}
              </span>
            </div>
            <div>
              <button className='border border-[rgba(234, 236, 240, 1)] py-2.5 px-4 rounded-lg flex flex-row gap-2 items-center' onClick={handleEditBtn}>
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
            </div>
            {activeTab === 'Overview' && <ViewDetailOverview formData={formData} />}
            {activeTab === 'Documents' && <ViewRetailersDocument setHandleExpand={setHandleExpand} />}
          </div>
        </>
      )}
    </>
  );
};

export default ViewRetailersDetails;
