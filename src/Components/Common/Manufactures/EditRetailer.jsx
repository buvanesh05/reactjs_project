import React from 'react'
import Header from '../Header'
import previousArrow from '../../../Svg/previousArrow.svg'
import AddRetailersForm from './AddRetailersForm'
const EditRetailer = () => {
  return (
    <div>
        <div>
        <Header/>
        </div>
        <div className='flex flex-row gap-[10px] items-center py-4 px-6'>
        <span className='w-[24px] h-[24px] content-center' ><img src={previousArrow} alt='' className='w-[14px] h-[14px]'/></span>
        <span className='font-bold text-lg'>Edit Retailer</span>
       </div>

      <div><AddRetailersForm/></div>
    </div>
  )
}

export default EditRetailer