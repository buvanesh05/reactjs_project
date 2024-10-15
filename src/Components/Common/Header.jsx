import {React }from 'react';
import { useLocation } from 'react-router-dom';
import notificationIcon from '../../Svg/Dashboardicons/Headericons/notificationIcon.svg';
import redEcllipse from '../../Svg/Dashboardicons/Headericons/redEcllipse.svg';
import GS1verificatedLogo from '../../Svg/GS1verificationLogo.svg';
import chevronRight from '../../Svg/chevronRight.svg'

const Header = () => {
    const location = useLocation();
    const routeHeadings = {
        '/dashboard': 'Dashboard',
        '/dashboard/manageManufacturersAndRetailers': 'Manage Manufacturers and Retailers',
        '/dashboard/manageManufacturersAndRetailers/viewManufacture':'View Detail',
       '/dashboard/manageManufacturersAndRetailers/addRetailer':'Add Retailer',
       '/dashboard/manageManufacturersAndRetailers/addRetailer/viewRetailer':'View Detail',
       '/dashboard/manageManufacturersAndRetailers/addRetailer/viewRetailer/editDetail':'Edit Detail',
       '/dashboard/manageManufacturersAndRetailers/accessManufacture':'View Detail'
       


      };
      const heading = routeHeadings[location.pathname] || 'Default Heading';
      const isAddRetailerPath = location.pathname === '/dashboard/manageManufacturersAndRetailers/addRetailer';
      const isviewManufactures = location.pathname === '/dashboard/manageManufacturersAndRetailers/viewManufacture';
      const isViewDetailPath= location.pathname === '/dashboard/manageManufacturersAndRetailers/addRetailer/viewRetailer';
      const isaccessManufacturePath= location.pathname === '/dashboard/manageManufacturersAndRetailers/accessManufacture';
      const isEditDetailPath= location.pathname === '/dashboard/manageManufacturersAndRetailers/addRetailer/viewRetailer/editDetail';
    return (
        <div className='border-b px-3.5 pt-[15px] pb-[16px]'>
              <div className='header flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className="">
            {(isAddRetailerPath || isViewDetailPath || isEditDetailPath || isviewManufactures || isaccessManufacturePath)? (
                  <div className='flex flex-row'>
                    <span className='text-sm font-semibold leading-[16.94px] text-gray-500 '>
                            Manage Manufacturers and Retailers </span>
                    <span className=" text-sm font-semibold leading-[16.94px] text-header-PrimaryColor flex flex-row "><img src={chevronRight} alt=''/> {heading}</span>
                        
                  </div>
                        
                    ) : (
              
                        <span className='text-sm font-semibold leading-[16.94px] text-header-PrimaryColor'>
                            {heading}
                        </span>
                    )}

            </div>
            <div className='flex flex-row md:gap-4 md:items-center mt-4 md:mt-0'>
                <div className="notifications relative">
                    <a href="#notification">
                        <img src={notificationIcon} alt='notificationIcon' />
                    </a>
                    <span className='absolute top-[10px] right-[11px]'>
                        <img src={redEcllipse} alt='redEcllipse' />
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-semibold text-sm leading-[16.94px] text-header-logoColor'>
                        GS1 India Datakart
                    </span>
                    <span className="profile-name font-normal text-sm leading-[16.94px] text-secondaryColor">Bijoy Peter</span>
                </div>
                <div className='logo-verification'>
                    <a href="#icon">
                        <img src={GS1verificatedLogo} alt='notificationIcon' className='w-10 h-10' />
                    </a>
                </div>
            </div>
        </div>
        </div>
      
    );
};

export default Header;
