import React, { useRef, useState } from 'react';
import { ReactComponent as FileUploadIcon } from '../../../Svg/UploadIcon.svg';

const FileUpload = () => {
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name); 
        }
    };

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='border border-[#D0D5DD] rounded-lg w-full p-[10px]'>
            <div className='flex flex-col items-center'>
                <FileUploadIcon
                    className="upload-icon bg-gray-200 rounded-3xl cursor-pointer w-[40px] h-[40px] p-[10px]"
                    onClick={handleIconClick}
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <div className='flex flex-col items-center pt-[10px]'>
            <p 
  onClick={handleIconClick} 
  className='text-sm font-semibold text-center cursor-pointer hover:text-purple-800'
>
  {fileName ? fileName : 'Click to Upload'} 
  <span className='text-sm text-gray-700 font-medium'> or drag and drop</span>
</p>
                <span className='text-sm text-gray-700 text-center text-[#344054]'> SVG, PNG, JPG , JPEG or GIF (max. 800x400px)</span>
            </div>
        </div>
    );
};

export default FileUpload;