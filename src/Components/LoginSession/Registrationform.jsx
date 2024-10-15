import React, { useState } from 'react';
import Footer from './FooterBeforeLogin';
import Navbar from './NavbarBeforelogin';


const statesInIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      companyType: '',
      companyName: '',
      state: '',
      contactPersonName: '',
      email: '',
      mobile: '',
      password: ''
    });


 
    const [errors, setErrors] = useState({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });

      validateField(name, value);
    };

    const validateField = (name, value) => {
      let error = '';

      switch (name) {
        case 'companyType':
          if (!value) error = 'Company type is required';
          break;
        case 'companyName':
          if (!value) error = 'Company name is required';
          break;
        case 'state':
          if (!value) error = 'State is required';
          break;
        case 'contactPersonName':
          if (!value) error = 'Contact person name is required';
          break;
        case 'email':
          if (!value) {
            error = 'Email address is required';
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = 'Email address is invalid';
          }
          break;
        case 'mobile':
          if (!value) {
            error = 'Mobile number is required';
          } else if (!/^\d{10}$/.test(value)) {
            error = 'Mobile number is invalid';
          }
          break;
        case 'password':
          if (!value) {
            error = 'Password is required';
          } else if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value)) {
            error = 'Password must be at least 8 characters long and contain upper and lowercase letters and numbers';
          }
          break;
        default:
          break;
      }

      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
      }));
    };

    const validate = () => {
      const newErrors = {};

      if (!formData.companyType) newErrors.companyType = 'Company type is required';
      if (!formData.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact person name is required';
      if (!formData.email) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
      }
      if (!formData.mobile) {
        newErrors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Mobile number is invalid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password) || !/\d/.test(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters long and contain upper and lowercase letters and numbers';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log('Form data:', formData);
        setShowSuccessPopup(true);
      }
    };

    const handleClosePopup = (e) => {
      e.preventDefault();
      setShowSuccessPopup(false);
      setFormData({
        companyType: '',
        companyName: '',
        state: '',
        contactPersonName: '',
        email: '',
        mobile: '',
        password: ''
      });
    };

    return (
        <div className="relative bg-gray-100">
            <Navbar />
            <div className="flex justify-center p-[30px] ">
                <form onSubmit={handleSubmit} className="bg-white w-[460px] pt-[25px] pb-[25px] rounded-xl p-[10px] flex flex-col gap-[32px]">
                    <div>
                      <h1 className="text-center  font-bold text-[30px]">Welcome to GS1 Datakart Registration</h1>
                      <p className="font-normal text-center pt-[10px] text-[16px]">Enter your company details</p>
                    </div>
                    <div className="space-y-4 flex flex-col gap-[8px] p-[20px]">
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Company type <span className='text-customRed'>*</span></p>
                        <div className="font-normal max-w-md border border-gray-300 rounded-md w-full">
                          <select
                            name="companyType"
                            value={formData.companyType}
                            onChange={handleChange}
                            className="w-full border-transparent rounded-md focus:border-black focus:outline-none placeholder:text-sm p-[8px]"
                          >
                            <option value="">Select Company Type</option>
                            <option>Manufacturer</option>
                            <option>Saab</option>
                            <option>Fiat</option>
                            <option>Audi</option>
                          </select>
                        </div>
                        {errors.companyType && <p className="text-red-500 text-sm">{errors.companyType}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Company Name <span className='text-customRed'>*</span></p>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder='Eg, Onfleek'
                          className='font-normal max-w-md border border-gray-300 rounded-md w-full placeholder:text-sm p-[8px]'
                        />
                        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">State <span className='text-red-600'>*</span></p>
                        <div className="font-normal max-w-md border border-gray-300 rounded-md w-full">
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full p-2 border-transparent rounded-md focus:border-black focus:outline-none placeholder:text-sm p-[8px]"
                          >
                            <option value="">Select a State</option>
                            {statesInIndia.map((state, index) => (
                              <option key={index} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Contact Person Name <span className='text-customRed'>*</span></p>
                        <input
                          type="text"
                          name="contactPersonName"
                          value={formData.contactPersonName}
                          onChange={handleChange}
                          placeholder='Name'
                          className='font-normal max-w-md border border-gray-300 rounded-md w-full placeholder:text-sm p-[8px]'
                        />
                        {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Email Address <span className='text-red-600'>*</span></p>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder='E-mail address'
                          className='font-normal max-w-md border border-gray-300 rounded-md w-full placeholder:text-sm p-[8px]'
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Mobile Number <span className='text-customRed'>*</span></p>
                        <input
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder='Mobile number'
                          className='font-normal max-w-md border border-gray-300 rounded-md w-full  placeholder:text-sm p-[8px]'
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                      </div>
                      <div className='flex flex-col gap-[6px]'>
                        <p className="font-medium text-sm">Set Password <span className='text-customRed'>*</span></p>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder='Password'
                          className='font-normal max-w-md border border-gray-300 rounded-md w-full  placeholder:text-sm p-[8px]'/>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        <p className="text-gray-500 text-sm">Minimum of 8 characters, Combination of upper and lowercase, Combination of letters and numbers, no special character.</p>
                      </div>
                      <div className='flex gap-[20px] flex-wrap justify-center'>
                        <button type="button" className="bg-gray-200 text-black py-3 px-4 rounded w-[178px] h-[48px]  shadow-xl hover:bg-gray-400">Cancel</button>
                        <button type="submit" className="bg-blue-900 text-white py-3 px-4 rounded w-[178px]  h-[48px]  shadow-xl  hover:bg-blue-500">Register</button>
                      </div>
                    </div>
                </form>
            </div>

            {showSuccessPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
                  <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
                  <p className="mb-4">Your registration was completed successfully. Thank you!</p>
                  <button onClick={handleClosePopup} className="bg-blue-900 text-white py-2 px-4 rounded">OK</button>
                </div>
              </div>
            )}
            <Footer />
        </div>
    );
};

export default RegistrationForm;
