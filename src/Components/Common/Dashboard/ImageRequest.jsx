import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { ImageRequestData } from '../../../Constants/Data';

const ImageRequest = () => {
    const handleCount = ImageRequestData.length;

    useEffect(() => {
        $('#dataTable').DataTable();
        $('.dt-search input[type="search"]').attr('placeholder', 'Search...');
        const customLayout = `
            <div class="flex flex-row items-center gap-[3px] py-3 pl-3">
                <h2 class="text-xl font-semibold">Image List</h2>
                <span class="text-[#026AA2] rounded-full bg-[#F0F9FF] py-0.5 px-2 font-medium text-xs leading-[14.52px]">${handleCount} Images</span>
            </div>
        `;
        $('.dt-length').html(customLayout);
    }, [handleCount]);

    return (
        <div className="container pt-3 pl-4">
            <div className="overflow-x-auto data-table border rounded-t-lg border-[#EAECF0]">
                <table id="dataTable" className="min-w-full bg-white border border-collapse border-[#EAECF0] table-auto">
                    <thead className="bg-[#F9FAFB]">
                        <tr>
                            <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Company Name / GCP</th>
                            <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Brand Name</th>
                            <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Product Name/GTIN</th>
                            <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ImageRequestData.map((item, index) => (
                            <tr key={index} className="border border-slate-100">
                                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{item.companyName} ({item.gcp})</td>
                                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{item.brandName}</td>
                                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{item.productName} ({item.gtin})</td>
                                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ImageRequest;
