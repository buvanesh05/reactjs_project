import React from 'react'
import HmImage from '../../../Svg/HmImage.svg'
import infocircle from '../../../Svg/info-circle.svg'
import editIcon from '../../../Svg/editIcon.svg'
import validateForm from './AddRetailersFormValidation'
import { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addRetailer } from '../../../Helpers/auth/RetailerSlice';




const AddRetailersForm = () => {
  const [formData, setFormData] = useState({
    retailerName: '',
    retailerType: '',
    retailerParentName: '',
    status: '',
    startDate: '',
    endDate: '',
    category: '',
    subCategory: '',
    selectTeam: '',
    accessType: '',
    downloadAccess: '',
    ipAddress: '',
    dailyLimit: '',
    productLimit: '',
    adminMailFlag: '',
    storeProductViewLog: '',
    email: '',
    lineAddress1: '',
    lineAddress2: '',
    pincode: '',
    country: '',
    state: '',
    district: '',
    city: '',
    hostName: '',
    userName: '',
    password: '',
    port: '',
    ftpPath: '',
    secureFtp: ''
  });

  const [errors, setErrors] = useState({});
  const [selectedImage, setSelectedImage] = useState(HmImage); 
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'image/jpeg') {
        setError('Only JPG images are allowed.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5 MB.');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
 
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  

    if (Object.keys(validationErrors).length === 0) {

      dispatch(addRetailer(formData)); 
  

      setFormData({
        retailerName: '',
        retailerType: '',
        retailerParentName: '',
        status: '',
        startDate: '',
        endDate: '',
        category: '',
        subCategory: '',
        selectTeam: '',
        accessType: '',
        downloadAccess: '',
        ipAddress: '',
        dailyLimit: '',
        productLimit: '',
        adminMailFlag: '',
        storeProductViewLog: '',
        email: '',
        lineAddress1: '',
        lineAddress2: '',
        pincode: '',
        country: 'India',
        state: '',
        district: '',
        city: '',
        hostName: '',
        userName: '',
        password: '',
        port: '',
        ftpPath: '',
        secureFtp: ''
      });
  
      navigate('viewRetailer', { state: { formData } });
  
      console.log('Form data submitted:', formData);
    } else {
      
      console.log('Validation failed. Form not submitted.');
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addRetailer(formData)); 
  //   setFormData({
  //     retailerName: '',
  //     retailerType: '',
  //     retailerParentName: '',
  //     status: '',
  //     startDate: '',
  //     endDate: '',
  //     category: '',
  //     subCategory: '',
  //     selectTeam: '',
  //     accessType: '',
  //     downloadAccess: '',
  //     ipAddress: '',
  //     dailyLimit: '',
  //     productLimit: '',
  //     adminMailFlag: '',
  //     storeProductViewLog: '',
  //     email: '',
  //     lineAddress1: '',
  //     lineAddress2: '',
  //     pincode: '',
  //     country: 'India',
  //     state: '',
  //     district: '',
  //     city: '',
  //     hostName: '',
  //     userName: '',
  //     password: '',
  //     port: '',
  //     ftpPath: '',
  //     secureFtp: ''
  //   });
  //   const validationErrors = validateForm(formData);
  //   setErrors(validationErrors);
  //   navigate('viewRetailer', { state: { formData } });

  //   if (Object.keys(validationErrors).length === 0) {
     
  //     console.log('Form data submitted:', formData);
  //   }
  // };


    return (
      <div className='px-6 pt-3'> 
        <form className="" onSubmit={handleSubmit}>
      <div className='border-b border-[#EAECF0]'>
          <h2 className="text-xl font-semibold mb-6">Add Retailer</h2>
        
              <div className="flex flex-wrap items-center
                gap-y-6 gap-x-8 justify-between">
                  <div className="w-[341px] h-[58px] ">
                      <label className="block text-sm font-medium text-[#344054] ">Retailer Name<span className='text-rose-600'>*</span></label>
                      <input type="text" name="retailerName"
            value={formData.retailerName}
            onChange={handleChange} className="h-[38px] mt-[6px] block w-full py-2 px-3 border rounded-lg shadow-sm focus:bg-[#F2F4F7]" placeholder="Enter Retailer Name" />
            {errors.retailerName && <span className="text-red-500 text-xs  mb-1">{errors.retailerName}</span>}
                  </div>
                  
        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Retailer Parent Name</label>
          <select
            name="retailerParentName"
            value={formData.retailerParentName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Parent Name</option>
            <option value="QV Organics LLP">QV Organics LLP</option>
          </select>
          {errors.retailerParentName && (
            <span className="text-red-500">{errors.retailerParentName}</span>
          )}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
          </select>
          {errors.status && <span className="text-red-500">{errors.status}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-smfocus:bg-[#F2F4F7]"
          />
          {errors.startDate && <span className="text-red-500">{errors.startDate}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          />
          {errors.endDate && <span className="text-red-500">{errors.endDate}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Category</option>
            <option value="Agriculture Supplies">Agriculture Supplies</option>
          </select>
          {errors.category && <span className="text-red-500">{errors.category}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Sub Category</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Sub Category</option>
            <option value="Bio Fertilizer">Bio Fertilizer</option>
          </select>
          {errors.subCategory && <span className="text-red-500">{errors.subCategory}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Select Team</label>
          <select
            name="selectTeam"
            value={formData.selectTeam}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Team</option>
            <option value="MDM">MDM</option>
          </select>
          {errors.selectTeam && <span className="text-red-500">{errors.selectTeam}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Access Type</label>
          <select
            name="accessType"
            value={formData.accessType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Access Type</option>
            <option value="Demo">Demo</option>
          </select>
          {errors.accessType && <span className="text-red-500">{errors.accessType}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Download Access</label>
          <select
            name="downloadAccess"
            value={formData.downloadAccess}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Download Access</option>
            <option value="Demo">Demo</option>
          </select>
          {errors.downloadAccess && (
            <span className="text-red-500">{errors.downloadAccess}</span>
          )}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">IP Address/es</label>
          <input
            type="text"
            name="ipAddress"
            value={formData.ipAddress}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
            placeholder="Enter IP Address"
          />
          {errors.ipAddress && <span className="text-red-500">{errors.ipAddress}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Daily Limit</label>
          <input
            type="text"
            name="dailyLimit"
            value={formData.dailyLimit}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
            placeholder="Enter Daily Limit"
          />
          {errors.dailyLimit && <span className="text-red-500">{errors.dailyLimit}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Product Limit</label>
          <input
            type="text"
            name="productLimit"
            value={formData.productLimit}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
            placeholder="Enter Product Limit"
          />
          {errors.productLimit && <span className="text-red-500">{errors.productLimit}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Admin Mail Flag</label>
          <select
            name="adminMailFlag"
            value={formData.adminMailFlag}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Admin Mail Flag</option>
            <option value="Demo">Demo</option>
          </select>
          {errors.adminMailFlag && <span className="text-red-500">{errors.adminMailFlag}</span>}
        </div>

        <div className="w-[341px] h-[58px]">
          <label className="block text-sm font-medium text-[#344054]">Store Product View Log</label>
          <select
            name="storeProductViewLog"
            value={formData.storeProductViewLog}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
          >
            <option value="">Select Store Product View Log</option>
            <option value="Demo">Demo</option>
          </select>
          {errors.storeProductViewLog && (
            <span className="text-red-500">{errors.storeProductViewLog}</span>
          )}
        </div>
        <div className="pt-[24px] flex flex-row pb-[40px] gap-[25px] pl-4">
      <span>
        <label className="block text-sm font-medium text-[#344054] mb-4">Upload Logo</label>
        <div className='relative'>
          <div className="w-[100px] h-[100px] outline-[#D0D5DD] outline-dashed outline-2 outline-offset-[12px] flex items-center justify-center">
            <img src={selectedImage} alt="Upload Logo" className="w-full h-full object-cover" />
          </div>
          <div className='border border-[#D0D5DD] rounded-md p-2 max-w-[36px] max-h-[36px] absolute right-[-21px] bottom-[-28px] bg-white'>
            <label htmlFor="file-upload" className="cursor-pointer">
              <img src={editIcon} alt="edit" className="w-full h-full" />
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".jpg"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </span>

      <div className="max-w-[314px] border border-[#D0D5DD] gap-[12px] rounded-xl p-4 flex flex-row items-center">
        <div className='border border-[#EAECF0] rounded-md p-2 w-[40px] h-[40px]'>
          <img src={infocircle} alt='note' className='w-[16px] h-[16px]' />
        </div>
        <div>
          <span className='font-semibold text-sm text-[#344054]'>Note</span>
          <p className="mt-2 text-sm text-[#475467]">Kindly upload the image based on the below format.</p>
          <p className="text-sm text-[#475467]">.jpg file only</p>
          <p className="text-sm text-[#475467]">.max of 5mb</p>
        </div>
      </div>
    </div>              
      </div>
      </div>
      {/* contact details */}
      <div className="Contact-form">
              <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
        
        <div className="flex flex-wrap items-center gap-y-6 gap-x-8 justify-between">
          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">
              Email Address<span className='text-rose-600'>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter Email Address"
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">
              Line Address 1<span className='text-rose-600'>*</span>
            </label>
            <textarea
              type="text"
              name="lineAddress1"
              value={formData.lineAddress1}
              onChange={handleChange}
              className=" resize-none text-balance  line-clamp-3  mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter Line Address 1"
            />
            {errors.lineAddress1 && <span className='text-red-500'>{errors.lineAddress1}</span>}
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">Line Address 2</label>
            <textarea
              type="text"
              name="lineAddress2"
              value={formData.lineAddress2}
              onChange={handleChange}
              className="  resize-none text-balance  line-clamp-3 mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter Line Address 2"
            />
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter Pincode"
            />
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
            >
              <option>India</option>
              {/* Other countries... */}
            </select>
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter State"
            />
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter District"
            />
          </div>

          <div className="w-[341px]">
            <label className="block text-sm font-medium text-[#344054]">
              City<span className='text-rose-600'>*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]"
              placeholder="Enter City"
            />
            {errors.city && <span className='text-red-500'>{errors.city}</span>}
          </div>

        </div>
      </div>

             
            <div>
              {/* ftp details */}
            <div className="w-full border-t border-[#EAECF0] mt-6 pt-6 pb-[24px]">
              <h3 className="text-lg font-semibold mb-4">FTP Details</h3>
              <div className="flex flex-wrap items-center
                gap-y-6 gap-x-8 justify-between">
                <div className="w-[341px]">
                  <label className="block text-sm font-medium text-[#344054]">Host Name</label>
                  <input type="text" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]" placeholder="Enter Host Name" />
                </div>
                <div className="w-[341px]">
          <label className="block text-sm font-medium text-[#344054]">User Name</label>
          <input 
            type="text" 
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7] ${errors.userName ? 'border-red-500' : ''}`}
            placeholder="Enter User Name" 
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
        </div>
        <div className="w-[341px]">
          <label className="block text-sm font-medium text-[#344054]">Password</label>
          <input 
            type="password" 
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7] ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Enter Password" 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            autoComplete="new-password" />
          
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
                <div className="w-[341px]">
                  <label className="block text-sm font-medium text-[#344054]">Port</label>
                  <input type="text" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]" placeholder="Enter Port" />
                </div>
                <div className="w-[341px]">
                  <label className="block text-sm font-medium text-[#344054]">FTP Path</label>
                  <input type="text" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]" placeholder="Enter FTP Path" />
                </div>
                <div className="w-[341px]">
                  <label className="block text-sm font-medium text-[#344054]">Secure FTP</label>
                  <select className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:bg-[#F2F4F7]">
                    <option>Select Secure FTP</option>
                 
                  </select>
                </div>
              </div>
            </div>
            </div>
            <div className='flex flex-row flex-wrap justify-between items-center border-t border-[#EAECF0] pt-[14px] pr-6 pl-6 pb-[24px]'>
              <span>(<span className='text-rose-600'>*</span>) Required Fields</span>
              <span className='flex flex-row  justify-between items-center gap-[16px]'>
            <button type="cancel" className="px-4 py-2.5 border border-[#D0D5DD] rounded-lg hover:bg-grey-700"><span className='font-semibold text-sm leading-[16.98px]'>cancel</span></button>
            <button type="submit" className="bg-[#F26334] border border-[#F26334] text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 hover:border-indigo-700">Submit</button>
            </span>
            </div>
     
      </form>
  </div>
      );
    };
    


export default AddRetailersForm