import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductIcon } from '../../Svg/Dashboardicons/SidebarIcons/ProductIcon';
import { Gs1logo } from '../../Svg/Gs1logo';
import {DashboardIcon} from '../../Svg/Dashboardicons/SidebarIcons/DashboardIcon';
import UserIcon from '../../Svg/Dashboardicons/SidebarIcons/UserIcon';
import { DevloperApiIcon } from '../../Svg/Dashboardicons/SidebarIcons/DevloperApiIcon';
import { BrandIcon } from '../../Svg/Dashboardicons/SidebarIcons/BrandIcon';
import { SettingIcon } from '../../Svg/Dashboardicons/SidebarIcons/SettingIcon';
import { UtilityIcon } from '../../Svg/Dashboardicons/SidebarIcons/UtilityIcon';
import { SupportIcon } from '../../Svg/Dashboardicons/SidebarIcons/SupportIcon';
import { Resources } from '../../Svg/Dashboardicons/SidebarIcons/Resources';
import { MessageIcon } from '../../Svg/Dashboardicons/SidebarIcons/MessageIcon';
import { DropdownArrow } from '../../Svg/Dashboardicons/SidebarIcons/DropdownArrow';


export const Sidebar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isSetupOpen, setSetupOpen] = useState(false);
  const [isUtilityOpen, setUtilityOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [hoveredItem, setHoveredItem] = useState('');

  const toggleDropdown = (setOpen) => {
    setOpen(prev => !prev);
  };
  const handleClick = (item) => {
    setActiveItem(item);
    
    
  };
  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem('');
  };

  return (
    <div className="bg-blue-custom text-white flex flex-col max-w-[230px] ">
      <nav className="flex-1 pl-4 pr-4 overflow-auto no-scrollbar">
        <div className="flex items-center justify-start py-6 pl-[15px]">
          <Gs1logo className="h-10 w-10" />
        </div>

        <div className="">
          <span className="px-4 py-2 text-[8px] font-semibold uppercase hidden md:block">General</span>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 gap-2.5 rounded ${activeItem === 'dashboard' ? 'text-[#FF692E]' : 'text-white'} hover:text-[#FF692E]`}
                onClick={() => handleClick('dashboard')}
                onMouseEnter={() => handleMouseEnter('dashboard')}
                onMouseLeave={handleMouseLeave}
              >
                <DashboardIcon isActive={activeItem === 'dashboard' || hoveredItem === 'dashboard'} />
                <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Dashboard</span>
              </Link>
            </li>
            <li>
            <Link
                to="manageManufacturersAndRetailers"
                className={`flex items-center px-4 py-2 gap-2.5 rounded ${activeItem === 'manageManufacturersAndRetailers' ? 'text-[#FF692E]' : 'text-white'} hover:text-[#FF692E]`}
                onClick={() => handleClick('manageManufacturersAndRetailers')}
                onMouseEnter={() => handleMouseEnter('manageManufacturersAndRetailers')}
                onMouseLeave={handleMouseLeave}
              >
                <UserIcon isActive={activeItem === 'manageManufacturersAndRetailers' || hoveredItem === 'manageManufacturersAndRetailers'} />
                <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Manage Manufacturers and Retailer</span>
              </Link>
            
            </li>
            <li>
              <a
                href="#brand"
                className="flex items-center px-4 py-2 gap-2.5 text-white rounded hover:text-[#FF692E]"
                onMouseEnter={() => handleMouseEnter('brand')}
                onMouseLeave={handleMouseLeave}
              >
                <BrandIcon isActive={hoveredItem === 'brand'} />
                <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Brand</span>
              </a>
            </li>
            <li>
              <span className="flex items-end justify-between">
                <a
                  href="#products"
                  className="flex gap-2.5 items-center justify-between px-4 py-2 text-white rounded hover:text-[#FF692E]"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ProductIcon isActive={hoveredItem === 'products'} />
                  <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Products</span>
                </a>
                <DropdownArrow
                  isOpen={isProductsOpen}
                  onClick={() => toggleDropdown(setProductsOpen)}
                  isActive={hoveredItem === 'products'}
                  className="cursor-pointer"
                />
              </span>
              {isProductsOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  <li>
                    <a
                      href="#product1"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('product1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Product 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#product2"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('product2')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Product 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span className="flex items-end justify-between">
                <a
                  href="#report"
                  className="flex gap-2.5 items-center justify-between px-4 py-2 text-white rounded hover:text-[#FF692E]"
                  onMouseEnter={() => handleMouseEnter('report')}
                  onMouseLeave={handleMouseLeave}
                >
                  <SupportIcon isActive={hoveredItem === 'report'} />
                  <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Report</span>
                </a>
                <DropdownArrow
                  isOpen={isReportOpen}
                  onClick={() => toggleDropdown(setReportOpen)}
                  isActive={hoveredItem === 'report'}
                  className="cursor-pointer"
                />
              </span>
              {isReportOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  <li>
                    <a
                      href="#report1"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('report1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Report 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#report2"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('report2')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Report 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>


        <div className="mt-6">
          <h2 className="px-4 py-2 text-[8px] font-semibold uppercase hidden md:block">Configuration</h2>
          <ul className="flex flex-col gap-2.5">
          <li>
              <span className="flex items-end justify-between">
                <a
                  href="#setup"
                  className="flex gap-2.5 items-center justify-between px-4 py-2 text-white rounded hover:text-[#FF692E]"
                  onMouseEnter={() => handleMouseEnter('setup')}
                  onMouseLeave={handleMouseLeave}
                >
                  <SettingIcon isActive={hoveredItem === 'setup'} />
                  <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Setup</span>
                </a>
                <DropdownArrow
                  isOpen={isSetupOpen}
                  onClick={() => toggleDropdown(setSetupOpen)}
                  isActive={hoveredItem === 'setup'}
                  className="cursor-pointer"
                />
              </span>
              {isSetupOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  <li>
                    <a
                      href="#setup1"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('setup1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Setup 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#setup2"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('setup2')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Setup 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span className="flex items-end justify-between">
                <a
                  href="#utility"
                  className="flex gap-2.5 items-center justify-between px-4 py-2 text-white rounded hover:text-[#FF692E]"
                  onMouseEnter={() => handleMouseEnter('utility')}
                  onMouseLeave={handleMouseLeave}
                >
                  <UtilityIcon isActive={hoveredItem === 'utility'} />
                  <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Utility</span>
                </a>
                <DropdownArrow
                  isOpen={isUtilityOpen}
                  onClick={() => toggleDropdown(setUtilityOpen)}
                  isActive={hoveredItem === 'utility'}
                  className="cursor-pointer"
                />
              </span>
              {isUtilityOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  <li>
                    <a
                      href="#utility1"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('utility1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Utility 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#utility2"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('utility2')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Utility 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
           
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="px-4 py-2 text-[8px] font-semibold uppercase hidden md:block">Help</h2>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="#support" className="flex gap-2.5 items-center  px-4 py-2 text-white rounded hover:text-orange-500"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}>
              <SupportIcon isActive={hoveredItem === 'support'}/>
                <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Support</span>
              </a>
            </li>
            <li>
              <a
                href="#developerApi"
                className="flex items-center px-4 py-2 gap-2.5 text-white rounded hover:text-[#FF692E]"
                onMouseEnter={() => handleMouseEnter('developerApi')}
                onMouseLeave={handleMouseLeave}
              >
                <DevloperApiIcon isActive={hoveredItem === 'developerApi'} />
                <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Developer API</span>
              </a>
            </li>
            <li>
              <span className="flex items-end justify-between">
                <a
                  href="#resources"
                  className="flex gap-2.5 items-center justify-between px-4 py-2 text-white rounded hover:text-[#FF692E]"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Resources isActive={hoveredItem === 'resources'} />
                  <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Resources</span>
                </a>
                <DropdownArrow
                  isOpen={isResourcesOpen}
                  onClick={() => toggleDropdown(setResourcesOpen)}
                  isActive={hoveredItem === 'resources'}
                  className="cursor-pointer"
                />
              </span>
              {isResourcesOpen && (
                <ul className="pl-8 flex flex-col gap-2">
                  <li>
                    <a
                      href="#resources1"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('resources1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Resources 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resources2"
                      className="flex items-center px-4 py-2 text-white rounded hover:text-[#FF692E]"
                      onMouseEnter={() => handleMouseEnter('resources2')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className=" font-medium text-xs leading-[14.52px] hidden md:block">Resources 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="pt-[173px] pb-[146px]">
            <button className="w-[35px] sm:w-[143px] rounded-[60px] bg-blue-900 border border-blue-800 pt-[9px] pb-[9px] pr-[9px] pl-[9px] flex items-center gap-[13px]">
              <MessageIcon/>
              <span className="font-normal text-sm leading-[16.94px] hidden sm:inline">Chat with us</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
