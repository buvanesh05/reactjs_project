import React, { useState, useEffect } from 'react';
import Logo from '../../assests/images/logo.png';
import Lock from '../../assests/svg/lock.svg';
import Correct from '../../assests/svg/correct.svg';
import Wrong from '../../assests/svg/wrong.svg';
import FooterBeforeLogin from './FooterBeforeLogin';



const Verification = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);

    useEffect(() => {
        const passwordCriteria = [
            /.{8,}/,
            /[A-Z]/,
            /[a-z]/,
            /[0-9]/, 
            /[!@#$%^&*(),.?":{}|<>]/ 
        ];
        const isValid = passwordCriteria.every((regex) => regex.test(password));
        setIsPasswordValid(isValid);

        setDoPasswordsMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPasswordValid && doPasswordsMatch) {
            alert("Password set successfully!");
        } else {
            alert("Password did not match.");
        }
    };

    const getIcon = (condition) => {
        return condition ? <img src={Correct} alt="Correct" className='w-[20px] h-[20px]' /> : <img src={Wrong} alt="Wrong" className='w-[20px] h-[20px] text-red-600' />;
    };

    return (
        <div className=" bg-gray-100 flex flex-col gap-[32px] ">
            <div className='p-custom flex justify-between flex-wrap'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex justify-center p-[20px]">
                <form onSubmit={handleSubmit} className="bg-white w-[464px] p-[40px] rounded-xl flex flex-col gap-[32px]">
                    <div className='flex justify-center'>
                        <p className='bg-gray-100 p-[10px] rounded-full'>
                            <img src={Lock} alt="Lock" className='w-[19px] h-[21px]' />
                        </p>
                    </div>
                    <div className='text-center flex flex-col gap-[16px]'>
                        <span className='font-semibold text-3xl'>Set New Password</span>
                        <p className='text-Example font-md text-[16px]'>Enter your new password</p>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex justify-center flex-col gap-[8px]'>
                            <label className='text-Remember text-[14px] font-medium' htmlFor="password">Password<span className='text-customRed'>*</span></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Password'
                                value={password}
                                onChange={handlePasswordChange}
                                className={`font-normal max-w-md border rounded-md w-full px-[14px] py-[10px] font-semibold placeholder:text-sm`}
                            />
                        </div>
                        <div className='flex justify-center flex-col gap-[8px]'>
                            <label className='text-Remember text-[14px] font-medium' htmlFor="confirm-password">Confirm Password<span className='text-customRed'>*</span></label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className={`font-normal max-w-md border rounded-md w-full px-[14px] py-[10px] font-semibold placeholder:text-sm`}
                            />
                        </div>
                    </div>
                    <div className='bg-Signin text-center rounded-xl'>
                        <button
                            type="submit"
                            className='text-white px-[18px] py-[15px] font-bold text-[16px] cursor-pointer'
                            disabled={!isPasswordValid || !doPasswordsMatch}
                        >
                            Verify
                        </button>
                    </div>
                    <div className="mt-4 text-left">
                        <div className='flex items-center gap-[5px]'>
                            {getIcon(password.length >= 8)}
                            <p className={password.length >= 8 ? 'text-green-600' : 'text-red-600'}>
                                Minimum of 8 Characters
                            </p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            {getIcon(/[A-Z]/.test(password))}
                            <p className={/[A-Z]/.test(password) ? 'text-green-600' : 'text-red-600'}>
                                Combination of uppercase letters
                            </p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            {getIcon(/[a-z]/.test(password))}
                            <p className={/[a-z]/.test(password) ? 'text-green-600' : 'text-red-600'}>
                                Combination of lowercase letters
                            </p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            {getIcon(/[0-9]/.test(password))}
                            <p className={/[0-9]/.test(password) ? 'text-green-600' : 'text-red-600'}>
                                Combination of letters and numbers
                            </p>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            {getIcon(/[!@#$%^&*(),.?":{}|<>]/.test(password))}
                            <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : 'text-red-600'}>
                                Combination of special characters
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <FooterBeforeLogin />
        </div>
    );
};

export default Verification;
