import React from 'react';

const ViewDetailOverview = ({ formData }) => {
  const getValueOrNA = (value) => (value ? value : 'NA');

  return (
    <div className='p-6'>
      <div className='border-b border-[#F2F4F7] pb-[40px]'>
      <p className='text-lg font-semibold py-[24px]'>Retailer Details</p>
      <div className='grid grid-cols-4 gap-5'>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Retailer Name</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.retailerName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Retailer Type</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.retailerType)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Retailer Parent Name</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.retailerParentName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Retailer Name</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.retailerName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Start Date</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.startDate)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>End Date</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.endDate)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Category</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.category)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Sub Category</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.subCategory)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Select Team</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.selectTeam)}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Access Type</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.accessType)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Download Access</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.downloadAccess)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>IP Address/es</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.ipAddress)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Daily Limit</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.dailyLimit)}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Product Limit</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.productLimit)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Admin Mail Flag</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.adminMailFlag)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Store Product view Log</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.storeProductViewLog)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Logo</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.logo)}</p>
        </div>
      </div>
      </div>
     <div className='border-b border-[#F2F4F7] pb-[40px]'>
     <p className='text-lg font-semibold py-[24px] '> Login Details</p>
      <div className='grid grid-cols-4 gap-5'>
      <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>User Id</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.userName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Password</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.password)}</p>
        </div>
      </div>
     </div>
     <div>
      <div className='border-b border-[#F2F4F7] pb-[40px]'>
      <p className='text-lg font-semibold py-[24px]'> Contact Details</p>
     <div  className='grid grid-cols-4 gap-5'>
     <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Email Address</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.userName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Line Address 1</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.lineAddress1)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Line Address 2</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.lineAddress2)}</p>
        </div>
         <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Pincode</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.pincode)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Country</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.country)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>State</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.state)}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>District</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.district)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>City</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.city)}</p>
        </div>
     </div>
     </div>
      </div >
     <div className='border-b border-[#F2F4F7] pb-[40px]'>
      <p className='text-lg font-semibold py-[24px]'> FTP Details</p>
     <div  className='grid grid-cols-4 gap-5'>
     <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Api ID</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA()}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Api Key</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA()}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Host Name</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.hostName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>User Name</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.userName)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Password</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.password)}</p>
        </div> 
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Port</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.port)}</p>
        </div> 
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>FTP Path</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.ftpPath)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-medium text-sm text-[#475467]'>Secure FTP</p>
          <p className='font-semibold text-sm text-[#101828]'>{getValueOrNA(formData.secureFtp)}</p>
        </div>
     </div></div>
     
     
    </div>
  );
};

export default ViewDetailOverview;
