import React from 'react';
import { LearnmoreIcon } from '../../../Svg/LearnmoreIcon';



export const ProductReport = () => {
    return (
        <div className='max-w-[315px]'>
             <table className="table-auto sm:max-w-[315px] w-[215px] border-separate border-spacing-0 border rounded border-[rgba(242, 244, 247, 1)]">
                <thead>
                    <tr className="">
                        <th className="text-lg font-bold mb-4 pt-3 pr-4 pb-3 pl-4 text-left border-b-[1px] border-[rgba(242, 244, 247, 1)]">
                            <div className="flex justify-between  item-center">

                                <div className=' gap-2 flex'>
                                <span className="text-base font-semibold leading-[19.36px]">Products Report</span>
                                <span className="text-blue-400 rounded-full bg-blue-100 py-0.5 px-2 font-normal text-xs leading-[14.52px]">1.2M</span>
                                </div>
                               <LearnmoreIcon/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <td className="border-b-[1px] border-[rgba(242, 244, 247, 1)]">
                            <div className="pt-4">
                                <ul className="flex flex-wrap md:flex-nowrap gap-2  px-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-teal-500 rounded-full mr-2"></span>
                                            <span className="text-xs font-normal text-gray-700 leading-[14.52px]">Approved</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                                            <span className="text-xs font-normal text-gray-700 leading-[14.52px]">Pending</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-rose-400 rounded-full mr-2"></span>
                                            <span className="text-xs font-normal text-gray-700 leading-[14.52px]">Rejected</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap md:flex-nowrap gap-1 px-4 pb-4 pt-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-teal-500 h-8 flex items-center w-[117px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">908K</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-yellow-400 h-8 flex items-center w-[62px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">70K</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-[96px] sm:w-auto">
                                        <div className="bg-rose-400 h-8 flex items-center w-[96px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">50K</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b-[1px] border-[rgba(242, 244, 247, 1)]'>
                        <td className=" ">
                            <div className="pt-4">
                                <ul className="flex flex-wrap md:flex-nowrap gap-[13px] px-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-teal-500 rounded-full"></span>
                                            <span className="text-xs leading-[14.52px] font-normal text-gray-700 ml-2">Published</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="flex items-center">
                                            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                                            <span className="text-xs leading-[14.52px] font-normal text-gray-700 ml-2">Un Published</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap md:flex-nowrap gap-1 px-4 pb-4 pt-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                    <div className="bg-teal-500 h-8 flex items-center w-[157px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">19M</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-gray-400  h-8 flex items-center w-[86px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded mr-2"></span>
                                            <span className="text-white text-sm font-medium">200K</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
           
    );
};
