import React from 'react'

export const ManufactureState = ({ activeTab }) => {
  return (
    <div className='flex justify-between items-center flex-wrap '>
        <div className='flex  flex-col gap-2'>
            <span className='text-lg font-semibold text-[#101828]'>
            Manage Manufacturer and Retailers
            </span>
            <span className='font-medium text-base  text-[#667085]'>Manage all your users</span>
        </div>
        <div>
        <div className='max-w-[315px] max-h-[82px]'>
        {activeTab === 'Manufacturers' ? (
             <table className="table-auto sm:max-w-[315px] sm:max-h-[82px] w-[215px] border-separate border-spacing-0 border rounded border-[rgba(242, 244, 247, 1)]">
              
                <tbody>
                    <tr>
                        <td >
                            <div className="pt-4">
                                <ul className="flex flex-wrap md:flex-nowrap gap-2  px-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-[#027A48] rounded-full mr-2"></span>
                                            <span className="text-xs font-normal text-[#475467] leading-[14.52px]">Active</span>
                                        </div>
                                    </li>
                                  
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-[#B42318] rounded-full mr-2"></span>
                                            <span className="text-xs font-normal text-[#475467] leading-[14.52px]">Rejected/Expired</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap md:flex-nowrap gap-1 px-4 pb-4 pt-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-[#027A48] h-8 flex items-center w-[195px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">4234</span>
                                        </div>
                                    </li>
                                  
                                    <li className="flex items-center w-[96px] sm:w-auto">
                                        <div className="bg-[#B42318] h-8 flex items-center w-[84px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">333</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                  
                </tbody>
            </table>
             ) : (
            <table className="table-auto sm:max-w-[315px] sm:max-h-[82px] w-[215px] border-separate border-spacing-0 border rounded border-[rgba(242, 244, 247, 1)]">
              
              <tbody>
                  <tr>
                      <td >
                          <div className="pt-4">
                              <ul className="flex flex-wrap md:flex-nowrap gap-2  px-4">
                                  <li className="flex items-center w-full sm:w-auto">
                                      <div className="flex items-center">
                                          <span className="w-2.5 h-2.5 bg-[#027A48] rounded-full mr-2"></span>
                                          <span className="text-xs font-normal text-[#475467] leading-[14.52px]">Active</span>
                                      </div>
                                  </li>
                                
                                  <li className="flex items-center w-full sm:w-auto">
                                      <div className="flex items-center">
                                          <span className="w-2.5 h-2.5 bg-[#344054] rounded-full mr-2"></span>
                                          <span className="text-xs font-normal text-[#475467] leading-[14.52px]">In-Active</span>
                                      </div>
                                  </li>
                              </ul>
                              <ul className="flex flex-wrap md:flex-nowrap gap-1 px-4 pb-4 pt-4">
                                  <li className="flex items-center w-full sm:w-auto">
                                      <div className="bg-[#027A48] h-8 flex items-center w-[195px] h-[19px] rounded py-0.5 px-2">
                                          <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                          <span className="text-white text-semibold font-medium">723</span>
                                      </div>
                                  </li>
                                
                                  <li className="flex items-center w-[96px] sm:w-auto">
                                      <div className="bg-[#344054] h-8 flex items-center w-[84px] h-[19px] rounded py-0.5 px-2">
                                          <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                          <span className="text-white text-semibold font-medium">38</span>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </td>
                  </tr>
                
              </tbody>
          </table>
          )}
        </div>
        </div>
    </div>
  )
}
