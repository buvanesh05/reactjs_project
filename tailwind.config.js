/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '30px': '30px',
      }, 
      padding: {
        custom: '24px 32px 24px 32px',
        navbutton:'8px 14px 8px 14px',
        SigninButton:'14px, 18px, 15px, 18px',
      },
      colors: {
        'blue-custom': '#002C6C',
        'header-logoColor': '#344054',
        'header-PrimaryColor':'#244F9A',
        'secondaryColor':'#475467',
        'customRed': '#B42318',
       ' customGray':'#667085',
        'Remember':' #344054',
        'Example':'#475467',
        'Signin':'#002B6C',
      },
      screens: {
        '1280-1321px': { 'min': '1280px', 'max': '1321px' },
      },
      maxWidth: {
        '178px': '178px',
        '66' : '66px',
        '524':'524px'
      }, 
      maxHeight:{
        '33':'33px',
      },
    },
  },
  plugins: [],
}
