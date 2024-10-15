import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { RetailersData } from '../../../Constants/Data';
import filterlines from '../../../Svg/filterlines.svg';
import linearexport from '../../../Svg/linearexport.svg';
import AdditionIcon from '../../../Svg/AdditionIcon.svg';

export const Retailers = ({setHandleExpand }) => {
  const navigate = useNavigate();


  const statusColors = {
    "Active": "text-[#027A48]",
    "In-Active": "text-slate-500",
  };

  const statusBgColors = {
    "Active": "bg-[#ECFDF3]",
    "In-Active": "bg-gray-50"
  };

  const handleExpand = () => {
    setHandleExpand(true)
    // navigate('expand');
  };
  const handleaddRetailer = () => {
    navigate('addRetailer');
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
      <div class="flex flex-row  py-[12px] relative cursor-pointer">
          <div class="relative z-10">
            <img src="${filterlines}" class="absolute left-2 top-1/2 transform -translate-y-1/2 ">
            <select id="nameFilter" class="cursor-pointer py-2.5 pl-8 pr-4 border border-[#D0D5DD] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-[8px] w-[95px] h-[40px] appearance-none">
              <option value="" class="cursor-pointer text-sm font-semibold leading-[16.94px] text-[#344054]">
                Filter
              </option>
              ${RetailersData.map(item => `<option value="${item.name}">${item.name}</option>`).join('')}
            </select>
          </div>
      </div>
    `;
      $('.dt-layout-cell.dt-layout-end:first').append(filterDropdown);

      // Adding the Expand Button
      const expandTable = `
        <div class="w-[40px] h-[40px] border border-[#D0D5DD] p-2.5 rounded-lg cursor-pointer" >
          <button id="expandButton" class="w-[20px] h-[20px]"><img src="${linearexport}" alt="expand screen "/></button>
        </div>`;
      $('.dt-layout-cell.dt-layout-end:first').append(expandTable);
      $('#expandButton').on('click', handleExpand);

      // Adding the Create Retailers Button
      const createRetailers = `
        <div  class="w-[143px] h-[40px] bg-[#F26334] border border-[#F26334] rounded-lg mr-6">
          <button id="createRetailersButton" class="flex items-center gap-3 py-2.5 px-4 text-white font-semibold leading-[16.94px] text-sm">
            <img src="${AdditionIcon}" alt="createRetailers" />
            <span>Add Retailer</span>
          </button>
        </div>
      `;
      $('.dt-layout-cell.dt-layout-end:first').append(createRetailers);
      $('#createRetailersButton').on('click', handleaddRetailer);

      
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
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.name}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.userId}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.emailId}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.startDate}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.endDate}
                </td>
                <td className={`border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50`}>
                  <span className={`py-0.5 px-2 rounded-[16px] ${statusColors[item.status]} ${statusBgColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-base font-semibold leading-[16.94px] py-4 px-6 hover:bg-slate-50">
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
