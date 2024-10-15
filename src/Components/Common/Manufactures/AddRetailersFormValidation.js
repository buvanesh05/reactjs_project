// validateForm.js
const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.retailerName) {
      errors.retailerName = 'Retailer Name is required';
    }
  
    if (!formData.ipAddress) {
   
    } else if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(formData.ipAddress)) {
      errors.ipAddress = 'Invalid IP Address format';
    }
  
    if (!formData.dailyLimit) {
     
    } else if (isNaN(formData.dailyLimit)) {
      errors.dailyLimit = 'Daily Limit must be a number';
    }
  
    if (!formData.productLimit) {
  
    } else if (isNaN(formData.productLimit)) {
      errors.productLimit = 'Product Limit must be a number';
    }
    if (!formData.email) {
      errors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid.";
    }
  
    if (!formData.lineAddress1) {
      errors.lineAddress1 = "Line Address 1 is required.";
    }
  
    if (!formData.city) {
      errors.city = "City is required.";
    }
    if (!formData.userName || formData.userName.trim() === "") {
      errors.userName = "User Name is required.";
    }
  

    if (!formData.password || formData.password.trim() === "") {
      errors.password = "Password is required.";
    }
    return errors;
  };
export  default validateForm;
