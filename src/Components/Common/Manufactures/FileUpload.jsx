import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { FiInfo } from "react-icons/fi";
import DocumentUpload from '../Manufactures/DocumentUpload';

const Fileupload = ({ isOpen, onClose }) => {
  
    const [fileType, setFileType] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productSubCategory, setProductSubCategory] = useState('');
    const [gtinQuantity, setGtinQuantity] = useState('');
    const [errors, setErrors] = useState({});

    const handleFileTypeChange = (e) => setFileType(e.target.value);

    const validate = () => {
        const newErrors = {};
        if (!fileType) newErrors.fileType = 'File Type is required';
        if (!productCategory) newErrors.productCategory = 'Product Category is required';
        if (!productSubCategory) newErrors.productSubCategory = 'Product Sub Category is required';
        if (!gtinQuantity) newErrors.gtinQuantity = 'GTIN Quantity is required';
        else if (isNaN(gtinQuantity)) newErrors.gtinQuantity = 'GTIN Quantity must be a number';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!"); // Add alert message here
            console.log({ fileType, productCategory, productSubCategory, gtinQuantity });
            onClose();
        }
    };

    const handleCancel = () => {
        setFileType('');
        setProductCategory('');
        setProductSubCategory('');
        setGtinQuantity('');
        setErrors({});
        onClose();
    };

    return (
        <div
            className={`fixed top-0 right-0 bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } w-[600px] h-[768px] z-50`}
        >
            <div className='p-[20px] border-b border-gray-300'>
                <div className="flex justify-between">
                    <p className='text-md font-semibold'>Upload Document</p>
                    <button onClick={handleCancel} className="text-gray-600 hover:text-gray-900">
                        <HiX size={24} />
                    </button>
                </div>
            </div>
            <div className="p-[20px] flex flex-col gap-[24px]">
                <span className='text-sm font-semibold text-[#101828]'>Document Detail</span>

                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                    <div>
                        <span className='text-sm font-medium text-[#344054]'>Document Type <span className='text-rose-900'>*</span></span>
                        <select
                            className={`mt-1 p-2 border ${errors.fileType ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-lg w-full bg-white`}
                            value={fileType}
                            onChange={handleFileTypeChange}
                        >
                            <option value="" disabled >CSD Letter</option>
                            <option value="pdf">PDF</option>
                            <option value="doc">DOC</option>
                            <option value="xls">XLS</option>
                            <option value="ppt">PPT</option>
                        </select>
                        {errors.fileType && <p className="text-red-500 text-sm">{errors.fileType}</p>}
                    </div>
                    <div>
                        <span className='text-sm font-medium text-[#344054]'>Document Name/Description </span>
                        <input 
                            type='text' 
                            placeholder='e.g., csd.pdf'  
                            className={`mt-1 p-2 border border-[#D0D5DD] rounded-lg w-full bg-white`}
                        />
                    </div>
                    <div className='border-b border-[#EAECF0]'>
                        <span className='text-sm font-medium text-[#344054]'>File Upload</span>
                    </div>

                    <div>
                        <div>
                            <span><DocumentUpload /></span>
                        </div>
                    </div>

                    <div className='flex justify-between content-center '>
                        <div>
                            <p className='text-sm font-medium'>
                                (<span className='text-red-600 text-sm font-medium text-[#344054]'>*</span>) Required fields
                            </p>
                        </div>

                        <div className='flex gap-4 '>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className='border border-[#D0D5DD] rounded-lg bg-white font-medium py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-transform'
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className='bg-[#F26334] text-white font-md py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-300 active:scale-95 transition-transform'
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Fileupload;
