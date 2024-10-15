import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Key from '../../assests/svg/key.svg';
import Navbar from './NavbarBeforelogin';
import Footer from './FooterBeforeLogin'

const Authentication = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otp.includes("")) {
            setError("Please enter the complete 4-digit OTP.");
            return;
        }

        setError("");
        console.log("Entered OTP:", otp.join(""));

        navigate('/verification');
    };

    return (
        <div className="bg-gray-100 flex flex-col gap-[20px]">
            <Navbar />
            <div className="flex justify-center p-[30px]">
                <form className="bg-white w-[532px] p-[40px] rounded-xl flex flex-col gap-[32px]" onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <p className="bg-gray-100 p-[10px] rounded-full">
                            <img src={Key} alt="Lock" />
                        </p>
                    </div>
                    <div className="text-center flex flex-col gap-[16px]">
                        <span className="font-semibold text-[30px]">Authenticate Your Account</span>
                        <p className="text-gray-500 font-normal text-[16px]">
                            Please confirm your account by entering the authentication
                            code sent to your email address <span className="text-md font-semibold text-black">ha*****@gmail.com</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex justify-center gap-[6px]">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={value}
                                    onChange={e => handleChange(e.target, index)}
                                    className="font-normal py-[10px] px-[17px] w-[50px] border border-gray-300 rounded-md font-semibold text-center"
                                />
                            ))}
                        </div>
                        {error && <p className="text-center text-red-500 text-sm font-normal">{error}</p>}
                        <p className="text-center text-gray-500 text-sm font-normal">Didn’t get a code? <span className="text-blue-900 font-semibold cursor-pointer">Click to resend.</span></p>
                    </div>
                    <div className="bg-Signin text-center rounded-xl">
                        <button
                            type="submit"
                            className="text-white px-[18px] py-[15px] font-bold text-[16px]"
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Authentication;