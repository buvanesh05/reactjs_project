import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import refresh from '../../assests/svg/refresh.svg';
import RightArrow from '../../assests/svg/RightArrow.svg';

const LoginComponent = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        captchaAnswer: ''
    });

    const [rememberMe, setRememberMe] = useState(false);
    const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
    const navigate = useNavigate();

    function generateCaptcha() {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        return `${a} + ${b}`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleRefreshCaptcha = () => {
        setGeneratedCaptcha(generateCaptcha());
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgot');
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="bg-gray-100">
            <div className="flex justify-center p-[30px]">
                <form className="bg-white w-[524px] py-[40px] px-[35px] rounded-xl p-[10px] flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-[16px] text-center'>
                        <h2 className='font-bold text-[30px]'>Login</h2>
                        <p className='text-[16px] font-normal text-Remember'>Enter your credentials to access your account</p>
                    </div>
                    <div className='flex justify-center flex-col gap-[8px]'>
                        <label className='text-customGray text-sm font-medium' htmlFor="email">Email Address/Mobile Number <span className='text-customRed'>*</span></label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder='Email or Mobile Number'
                            value={form.email}
                            onChange={handleChange}
                            className='font-normal max-w-md border border-gray-300 rounded-md w-full p-1 font-semibold placeholder:text-sm p-[8px]'
                        />
                    </div>
                    <div className='flex justify-center flex-col gap-[8px]'>
                        <label className='text-customGray text-sm font-medium' htmlFor="password">Password<span className='text-customRed'>*</span></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={form.password}
                            onChange={handleChange}
                            className='font-normal max-w-md border border-gray-300 rounded-md w-full p-1 font-semibold placeholder:text-sm p-[8px]'
                        />
                    </div>
                    <div className='flex justify-center flex-col gap-[8px]'>
                        <label className='text-customGray text-sm font-medium' htmlFor="captchaAnswer">Captcha<span className='text-customRed'>*</span></label>
                        <div className='flex gap-[30px]'>
                            <input
                                type="text"
                                id="captchaAnswer"
                                name="captchaAnswer"
                                value={form.captchaAnswer}
                                onChange={handleChange}
                                className='font-normal max-w-md border border-gray-300 rounded-md w-full p-1 font-semibold bg-gray-100 placeholder:text-sm p-[8px]'
                            />
                            <div className='flex gap-[16px]'>
                                <input
                                    type="text"
                                    name="captcha"
                                    value={generatedCaptcha}
                                    readOnly
                                    className='font-normal max-w-md border border-gray-300 rounded-md w-full p-1 font-semibold text-center'
                                />
                                <img src={refresh} alt="Refresh" onClick={handleRefreshCaptcha} className="cursor-pointer" />
                            </div>
                        </div>
                        <p className='text-Example text-[14px] text-normal'>Solve the math problem. For example, 1+3 = 4</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='px-[10px] flex gap-[10px]'>
                            <input
                                className='m-auto w-[16px] h-[16px] p-[8px]'
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            />
                            <label htmlFor="rememberMe" className='text-Remember text-[14px] font-medium m-0'>Remember Me</label>
                        </div>
                        <a href="#" onClick={handleForgotPasswordClick} className="cursor-pointer font-semibold text-[14px] text-blue-900 underline">Forgot password</a>
                    </div>
                    <button type="submit" className='bg-Signin flex justify-between rounded-xl'>
                        <span className='text-white text-left px-[18px] py-[15px] font-bold text-[16px]'>Sign in</span>
                        <span className='text-white text-left px-[18px] py-[15px] font-bold text-[16px] mt-1'><img src={RightArrow} alt="Right Arrow" /></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
