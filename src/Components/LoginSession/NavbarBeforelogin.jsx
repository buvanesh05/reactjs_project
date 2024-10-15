import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assests/images/logo.png';


const NavbarBeforelogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginClick = () => {
        navigate('/');
    };
    const logoOnlyRoutes = ['/verification', '/forgot', '/verify'];

    return (
        <div>
            <div className='p-custom flex justify-between flex-wrap'>
                <img src={Logo} alt="Logo" />
                {!logoOnlyRoutes.includes(location.pathname) && (
                    <div className='flex gap-[16px]'>
                        {location.pathname === '/register' ? (
                            <>
                                <span className='m-auto text-[16px] font-md'>Already have an account?</span>
                                <button
                                    className='border-[2px] border-blue-900 font-semibold text-[14px] rounded-xl bg-white hover:bg-gray-200 hover:shadow-xl w-66 h-33 p-navbutton'
                                    onClick={handleLoginClick}
                                >   Login
                                </button>
                            </>
                        ) : (
                            <>
                                <span className='m-auto text-[16px] font-md'>Don’t Have an Account?</span>
                                <button
                                    className='font-semibold text-[14px] border-[2px] border-blue-900 rounded-xl bg-white hover:bg-gray-200 hover:shadow-xl w-66 h-33 p-navbutton'
                                    onClick={handleRegisterClick}
                                >
                                    Register
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarBeforelogin;