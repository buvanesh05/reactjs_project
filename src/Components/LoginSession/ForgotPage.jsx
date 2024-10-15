import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assests/images/logo.png';
import Lock from '../../assests/svg/lock.svg';
import FooterBeforeLogin from './FooterBeforeLogin';


const ForgotPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleForgotClick = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        navigate('/verify');
    };

    return (
        <div className="bg-gray-100 flex flex-col gap-[32px]">
            <div className="p-custom flex justify-between flex-wrap">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex justify-center p-[20px]">
                <form 
                    className="bg-white w-[470px] p-[40px] rounded-xl flex flex-col gap-[32px]"
                    onSubmit={handleForgotClick}
                >
                    <div className="flex justify-center">
                        <p className="bg-gray-100 p-[10px] rounded-full">
                            <img src={Lock} alt="Lock" />
                        </p>
                    </div>
                    <div className="text-center flex flex-col gap-[16px]">
                        <span className="font-semibold text-[30px]">Forgot Password</span>
                        <p className="text-gray-500 font-md text-[16px]">
                            Enter your email address and we’ll send a reset link.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-medium text-[14px]">Email Address</p>
                        <input
                            type="email"
                            placeholder="user@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="font-normal max-w-md border border-gray-300 rounded-md w-full px-[12px] py-[8px] placeholder:text-sm"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
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
            <FooterBeforeLogin />
        </div>
    );
};

export default ForgotPage;