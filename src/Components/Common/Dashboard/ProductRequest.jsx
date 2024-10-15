import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import {productData} from '../../../Constants/Data'

export const ProductRequest = () => {
  

  const handleCount = productData.length;

  useEffect(() => {
    $('#dataTable').DataTable();
    $('.dt-search input[type="search"]').attr('placeholder', 'Search...');
    const customLayout = `
      <div class="flex flex-row items-center gap-[3px] py-3 pl-3">
        <h2 class="text-xl font-semibold">Product List</h2>
        <span class="text-[#026AA2] rounded-full bg-[#F0F9FF] py-0.5 px-2 font-medium text-xs leading-[14.52px]">${handleCount} Products</span>
      </div>
    `;
    $('.dt-length').html(customLayout);
  }, [handleCount]);

  return (
    <div className="container pt-3 px-4">
      <div className="overflow-x-auto data-table border rounded-t-lg border-[#EAECF0]">
        <table id="dataTable" className="bg-white border border-collapse border-[#EAECF0] table-auto clientSideInfotable">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">GTIN Number</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Product Name</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Product Description</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Company Name</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Packaging Type</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Priority</th>
              
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr key={index} className="border border-slate-100">
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{product.gtinNumber}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{product.productName}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{product.productDescription}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{product.companyName}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">{product.packagingType}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                   <img src={product.priority} alt="Priority Arrow" className="w-4 h-4" />
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductRequest;
