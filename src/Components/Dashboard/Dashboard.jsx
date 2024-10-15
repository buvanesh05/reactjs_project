import React, { useState } from 'react';
import Header from '../Common/Header';
import DashboardStats from '../Common/Dashboard/DashboardSates';
import { ProductReport } from '../Common/Dashboard/ProductReport';
import { ImagesReport } from '../Common/Dashboard/ImagesReport';
import { ProductRequest } from '../Common/Dashboard/ProductRequest';
import ImageRequest from '../Common/Dashboard/ImageRequest';

export const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('productRequest');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='gap-4 flex flex-col'>
            <div>
                <Header />
            </div>
            <div className='pl-0 pr-6 flex flex-col sm:flex-row sm:pl-6 gap-4 sm:flex-wrap lg:flex-wrap xl:flex-nowrap 1280-1321px:flex-wrap'>
                <DashboardStats />
                <ProductReport />
                <ImagesReport />
            </div>
            <div className='pl-0 pr-6 border-0 shadow-none sm:pl-6'>
                <div className='pt-3 pr-6'>
                    <div className='border-b border-[rgba(234, 236, 240, 1)] flex gap-4 items-center h-[51px]'>
                        <span
                            className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'productRequest' ? 'text-orange-600 underline underline-offset-[22px]' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
                            onClick={() => handleTabClick('productRequest')}
                        >
                            Product Request
                        </span>
                        <span
                            className={`font-semibold text-sm leading-[16.94px] cursor-pointer ${activeTab === 'imageRequest' ? 'text-orange-600 underline underline-offset-[22px]' : 'text-slate-700 hover:text-orange-600 hover:underline hover:underline-offset-8'}`}
                            onClick={() => handleTabClick('imageRequest')}
                        >
                            Image Request
                        </span>
                    </div>
                </div>
                {activeTab === 'productRequest' && <ProductRequest />}
                {activeTab === 'imageRequest' && <ImageRequest />}
            </div>
        </div>
    );
};
