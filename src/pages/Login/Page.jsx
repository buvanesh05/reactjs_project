import React from 'react';
import Footer from '../../Components/LoginSession/FooterBeforeLogin';
import Navbar from '../../Components/LoginSession/NavbarBeforelogin';
import Login from '../../Components/LoginSession/LoginComponent';


const LoginPage = () => {


    return (
        <div className="bg-gray-100">
            <Navbar />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginPage;