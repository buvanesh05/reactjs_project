import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { RetailersData } from '../../../Constants/Data';
import filterlines from '../../../Svg/filterlines.svg';


export const ExpandedRetailers = () => {

  const statusColors = {
    "Active": "text-[#027A48]",
    "In-Active": "text-slate-500",
  };
  const statusBgColors = {
    "Active": "bg-[#ECFDF3]",
    "In-Active": "bg-gray-50"
  };

  const [selectedName, setSelectedName] = useState('');
  const handleCount = RetailersData.length;

  useEffect(() => {
    const table = $('#dataTable').DataTable();

    $('.dt-search input[type="search"]').attr('placeholder', 'Search...');

    const customLayout = `
      <div class="flex flex-row items-center gap-[3px] py-3 pl-3">
        <h2 class="text-xl font-semibold">Retailers List</h2>
        <span class="text-[#026AA2] rounded-full bg-[#F0F9FF] py-0.5 px-2 font-medium text-xs leading-[14.52px]">
          ${handleCount} Retailers
        </span>
      </div>
    `;
    $('.dt-length').html(customLayout);

    if ($('.dt-layout-cell.dt-layout-end:first').find('#nameFilter').length === 0) {
      const filterDropdown = `
      <div class="flex flex-row pr-[24px] py-[12px] relative ">
          <div class="relative z-10">
            <img src="${filterlines}" class="absolute left-2 top-1/2 transform -translate-y-1/2 ">
            <select id="nameFilter" class="py-2.5 pl-8 pr-4 border border-[#D0D5DD] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-[8px] w-[95px] h-[40px] appearance-none">
              <option value="" class="text-sm font-semibold leading-[16.94px] text-[#344054]">
                Filter
              </option>
              ${RetailersData.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}
            </select>
          </div>
      </div>
    `;
      $('.dt-layout-cell.dt-layout-end:first').append(filterDropdown);
    }

    $('#nameFilter').on('change', function () {
      setSelectedName($(this).val());
      table.draw();
    });

    $.fn.dataTable.ext.search.push((settings, data) => {
      if (!selectedName) {
        return true;
      }

      const nameColumnIndex = 0;
      const name = data[nameColumnIndex].trim();

      return name === selectedName;
    });

    table.draw();

    return () => {
      $.fn.dataTable.ext.search.pop();
      $('#nameFilter').off('change');
    };
  }, [selectedName, handleCount]);

  return (
    <div className="container pt-3 px-4">
      <div className="overflow-x-auto data-table border rounded-t-lg border-[#EAECF0]">
        <table id="dataTable" className="min-w-full bg-white border border-collapse border-[#EAECF0] table-auto clientSideInfotable">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                Name
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                User ID
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                Email ID
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                Start Date
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                End Date
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                status
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {RetailersData.map((item, index) => (
              <tr key={index} className="border border-slate-100">
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.name}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.userId}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.emailId}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.startDate}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.endDate}
                </td>
                <td className={`border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6`}>
                  <span className={`py-0.5 px-2 rounded-[16px] ${statusColors[item.status]} ${statusBgColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-base font-semibold leading-[16.94px] py-4 px-6">
                 <span><a href="view"> {item.viewDetails} </a> </span> <span><a href="edit">{item.editDeatils}</a></span> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
