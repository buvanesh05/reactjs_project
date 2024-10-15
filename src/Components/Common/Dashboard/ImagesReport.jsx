import React from 'react';
import { LearnmoreIcon } from '../../../Svg/LearnmoreIcon';

export const ImagesReport = () => {
    return (
        <div className="">
            <table className="sm:w-[315px] w-[245px] sm:h-[126px] border-separate border-spacing-0 border rounded border-[rgba(242, 244, 247, 1)]">
                <thead>
                    <tr>
                        <th className="text-lg font-bold mb-4 p-2 text-left border-b-[1px] border-[rgba(242, 244, 247, 1)]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <span className="text-base font-semibold leading-[19.36px]">Images Report</span>
                                    <span className="text-blue-400 rounded-full bg-blue-100 py-0.5 px-2 font-normal text-xs leading-[14.52px]">300</span>
                                </div>
                                <LearnmoreIcon />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="p-4">
                                <ul className="flex flex-wrap gap-2.5 mb-4">
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
                                <ul className="flex flex-wrap gap-4">
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-teal-500 h-8 flex items-center w-[117px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">908K</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-yellow-400 h-8 flex items-center w-[2px] h-[19px] rounded py-0 px-0">
                                            <span className="bg-white rounded-full"></span>
                                        </div>
                                    </li>
                                    <li className="flex items-center w-full sm:w-auto">
                                        <div className="bg-rose-400 h-8 flex items-center w-[96px] h-[19px] rounded py-0.5 px-2">
                                            <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                            <span className="text-white text-semibold font-medium">50K</span>
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
