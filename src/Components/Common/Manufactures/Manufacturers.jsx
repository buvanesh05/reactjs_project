import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { useNavigate } from 'react-router-dom';
import { manufacturersData } from '../../../Constants/Data';
import filterlines from '../../../Svg/filterlines.svg';

export const Manufacturers = () => {
  
  const [selectedStatus, setSelectedStatus] = useState('');
  const navigate = useNavigate();

  const statusColors = {
    "New Registration Request": "text-[#B54708]",
    "Renewal Request": "text-[#B54708]",
    "Modified Date": "text-[#026AA2]",
    "Changes Updated": "text-[#B54708]",
    "Expired": "text-[#B42318]",
    "Rejected Renewal": "text-[#B42318]",
    "Active": "text-[#027A48]",
    "Pending": "text-secondary"
  };

  const statusBgColors = {
    "New Registration Request": "bg-[#FFFAEB]",
    "Renewal Request": "bg-[#FFFAEB]",
    "Modified Date": "bg-[#F0F9FF]",
    "Changes Updated": "bg-[#FFFAEB]",
    "Expired": "bg-[#FEF3F2]",
    "Rejected Renewal": "bg-[#FEF3F2]",
    "Active": "bg-[#ECFDF3]",
    "Pending": "bg-gray-100"
  };

  const handleCount = manufacturersData.length;

  useEffect(() => {
    const table = $('#dataTable').DataTable();

    $('.dt-search input[type="search"]').attr('placeholder', 'Search...');

    const customLayout = `
      <div class="flex flex-row items-center gap-[3px] py-3 pl-3">
        <h2 class="text-xl font-semibold">Manufacturers List</h2>
        <span class="text-[#026AA2] rounded-full bg-[#F0F9FF] py-0.5 px-2 font-medium text-xs leading-[14.52px]">
          ${handleCount} Manufacturers
        </span>
      </div>
    `;
    $('.dt-length').html(customLayout);
    if ($('.dt-layout-cell.dt-layout-end:first').find('#statusFilter').length === 0) {

      const filterDropdown = `
      <div class="flex flex-row pr-[24px] py-[12px] relative ">
          <div class="relative z-10">
            <img src="${filterlines}" class="absolute left-2 top-1/2 transform -translate-y-1/2 ">
            <select id="statusFilter" class="py-2.5 pl-8 pr-4 border border-[#D0D5DD] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-[8px] w-[95px] h-[40px] appearance-none">
              <option value="" class="text-sm font-semibold leading-[16.94px] text-[#344054]" >
                Filter
              </option>
              ${Object.keys(statusColors).map(status => `<option value="${status}">${status}</option>`).join('')}
            </select>
          </div>
      </div>
    `;
    $('.dt-layout-cell.dt-layout-end:first').append(filterDropdown);
    }

    $('#statusFilter').on('change', function () {
      setSelectedStatus($(this).val());
      table.draw();  
    });

   
    $.fn.dataTable.ext.search.push((settings, data) => {
      if (!selectedStatus) {
        return true; 
      }

      const statusColumnIndex = 2;
      const status = data[statusColumnIndex].trim(); 

      return status === selectedStatus;
    });

    table.draw();

    return () => {
      $.fn.dataTable.ext.search.pop();
      $('#statusFilter').off('change');
    };
  }, [selectedStatus,handleCount,]);
  const handleViewManufacture = () => {
    navigate('viewManufacture');
  };
  const handleAccessAccount=()=>{
    navigate('accessManufacture')
  }
  

  return (
   
      <div className="overflow-auto data-table border  rounded-t-lg border-[#EAECF0]">
        <table id="dataTable" className="min-w-full bg-white border border-collapse border-[#EAECF0] table-auto clientSideInfotable">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[441px]">
                Company Name / GCP
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[154px]">
                Registration Type
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[213px]">
                Status
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[176px]">
                Subscription Type
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[148px]">
                Registration Date
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[148px]">
               Duration(Year)
              </th>
               <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[148px]">
                Activation Date
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[148px]">
              De-Activation Date
              </th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467] w-[148px]">
             Action 
              </th>
            </tr>
          </thead>
          <tbody>
            {manufacturersData.map((item, index) => (
              <tr key={index} className="border border-slate-100">
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.companyName} ({item.gcp})
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.registrationType}
                </td>
                <td className={`border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50`}>
                  <span className={`py-0.5 px-2 rounded-[16px] ${statusColors[item.status]} ${statusBgColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.subscriptionType}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.registrationDate}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  {item.duration}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item.activationDate}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6">
                  {item. deActivationDate}
                </td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm  font-medium leading-[16.94px] py-4 px-6 hover:bg-slate-50">
                  <span className=' text-sm  font-semibold leading-[16.94px] text-zinc-950 !important hover:text-indigo-600 hover:cursor-pointer'onClick={handleViewManufacture}>{item.viewDetails}</span><span className=' font-semibold hover:text-indigo-600 hover:cursor-pointer' onClick={handleAccessAccount}>{item.AcessAccount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
  );
};
