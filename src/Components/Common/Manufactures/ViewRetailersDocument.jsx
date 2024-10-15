import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { ViewDocumentList } from '../../../Constants/Data';
import filterlines from '../../../Svg/filterlines.svg';
import linearexport from '../../../Svg/linearexport.svg';
import UploadIcon from '../../../Svg/UploadIcon.svg';
import Sidebar from '../Manufactures/FileUpload'

const ViewRetailersDocument = ({ setHandleExpand }) => {
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleExpand = () => {
    setHandleExpand(true);
  };

  const handleCount = ViewDocumentList.length;

  useEffect(() => {
    const table = $('#dataTable').DataTable();

    $('.dt-search input[type="search"]').attr('placeholder', 'Search...');

    const customLayout = `
      <div class="flex flex-row items-center gap-[3px] py-3 pl-3">
        <h2 class="text-xl font-semibold">Document List</h2>
        <span class="text-[#026AA2] rounded-full bg-[#F0F9FF] py-0.5 px-2 font-medium text-xs leading-[14.52px]">
          ${handleCount} Documents
        </span>
      </div>
    `;
    $('.dt-length').html(customLayout);

    if ($('.dt-layout-cell.dt-layout-end:first').find('#nameFilter').length === 0) {
      const filterDropdown = `
      <div class="flex flex-row pr-[24px] py-[12px] relative cursor-pointer">
          <div class="relative z-10">
            <img src="${filterlines}" class="absolute left-2 top-1/2 transform -translate-y-1/2 ">
            <select id="nameFilter" class="cursor-pointer py-2.5 pl-8 pr-4 border border-[#D0D5DD] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] rounded-[8px] w-[95px] h-[40px] appearance-none">
              <option value="" class="cursor-pointer text-sm font-semibold leading-[16.94px] text-[#344054]">
                Filter
              </option>
              ${ViewDocumentList.map(item => `<option value="${item.DocumentType}">${item.DocumentType}</option>`).join('')}
            </select>
          </div>
      </div>
    `;
      $('.dt-layout-cell.dt-layout-end:first').append(filterDropdown);

      // Adding the Expand Button
      const expandTable = `
        <div class="w-[40px] h-[40px] border border-[#D0D5DD] p-2.5 rounded-lg cursor-pointer ml-[0px] mr-[20px]" >
          <button id="expandButton" class="w-[20px] h-[20px]"><img src="${linearexport}" alt="expand screen "/></button>
        </div>`;
      $('.dt-layout-cell.dt-layout-end:first').append(expandTable);
      $('#expandButton').on('click', handleExpand);

      // Adding the Upload Button
      const uploadDocument = `
      <div class="w-[182px] border border-[#D0D5DD] p-2.5 rounded-lg cursor-pointer ml-[0px] mr-[20px]" >
          <button id="documentUpload" class="flex flex-row items-center gap-[8px]">
            <img src="${UploadIcon}" alt="Upload Icon" />
            <span class="text-sm font-semibold text-[#344054]">Upload Document</span>
          </button>
        </div>`;
      $('.dt-layout-cell.dt-layout-end:first').append(uploadDocument);
      $('#documentUpload').on('click', () => setSidebarOpen(true));
  
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
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Document Type</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Document Name/Description</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Service Type</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Uploaded Date</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Uploaded By</th>
              <th className="border border-[#EAECF0] font-medium text-xs leading-[14.52px] py-3 px-2 text-[#475467]">Action</th>
            </tr>
          </thead>
          <tbody>
            {ViewDocumentList.map((item, index) => (
              <tr key={index} className="border border-slate-100">
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 text-[#101828]">{item.DocumentType}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 text-[#101828]">{item.DocumentNameDescription}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 text-[#101828]">{item.ServiceType}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 text-[#101828]">{item.UploadedDate}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-sm font-medium leading-[16.94px] py-4 px-6 text-[#101828]">{item.UploadedBy}</td>
                <td className="border-r-[1px] border-[rgba(242, 244, 247, 1)] text-base font-semibold leading-[16.94px] py-4 px-6 cursor-pointer">
                  <img src={item.Action} alt='' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Document Upload Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default ViewRetailersDocument;
