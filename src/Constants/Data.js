
import PriorityUpwardArrow from '../Svg/Dashboardicons/ProductRequest/PriorityUpwardArrow.svg'
import PrioritydownwardArrow from '../Svg/Dashboardicons/ProductRequest/PrioritydownwardArrow.svg';
import GCPsImage from '../Svg/Dashboardicons/DashboardStates/linear_book_square.svg';
import RetailersImage from '../Svg/Dashboardicons/DashboardStates/user.svg';
import BrandsImage from '../Svg/Dashboardicons/DashboardStates/linear_book_square.svg';
import ProductsImage from '../Svg/Dashboardicons/DashboardStates/products.svg';
import BaseUsersImage from '../Svg/Dashboardicons/DashboardStates/linear_drop.svg';
import LicensesImage from '../Svg/Dashboardicons/DashboardStates/diamondIcon.svg';
import Downloadicon from '../Svg/Downloadicon.svg'

export const productData = [
    {
      gtinNumber: '8901760020078',
      productName: 'Green Tea',
      productDescription: 'Instant Tea',
      companyName: 'A2Zya Milk and Organic Products Private Limited',
      packagingType: 'Promotional',
      priority: PriorityUpwardArrow,
    },
    {
      gtinNumber: '8906176550054',
      productName: 'Cooking Oil',
      productDescription: 'Rice purpose oil',
      companyName: 'A2Zya Milk and Organic Products Private Limited',
      packagingType: 'Primary',
      priority: PriorityUpwardArrow,
    },
    {
      gtinNumber: '8901072000102',
      productName: 'Bubble',
      productDescription: 'Bubble gum (chewing gum)',
      companyName: 'A2Zya Milk and Organic Products Private Limited',
      packagingType: 'Intermediate',
      priority: PrioritydownwardArrow,
    },
    {
      gtinNumber: 'NA',
      productName: 'Biscuit',
      productDescription: 'Wheat based biscuit',
      companyName: 'A2Zya Milk and Organic Products Private Limited',
      packagingType: 'Substitute',
      priority: PrioritydownwardArrow,
    },
    {
      gtinNumber: '8901072000098',
      productName: 'Coffee powder',
      productDescription: 'Coffee powder',
      companyName: 'A2Zya Milk and Organic Products Private Limited',
      packagingType: 'Primary',
      priority: PriorityUpwardArrow,
    },
  ];

export const ImageRequestData = [
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'COCA COLA',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  },
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'COKE',
    productName: 'Commercial Coke Drinking',
    gtin: '8906110374456',
    category: 'Food'
  },
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'DIA',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  },
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'DIET COKE',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  },
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'REAL',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  },
  {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'REAL',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  }, {
    companyName: 'CAUVERY PETROCHEMICALS (P) LTD',
    gcp: '890601209',
    brandName: 'REAL',
    productName: 'Coca Cola 100ml',
    gtin: '8906110374470',
    category: 'Food'
  },
  {
    companyName: 'KRISHNA FOODS',
    gcp: '89041293',
    brandName: 'GSK',
    productName: 'GSK Chilli Masala',
    gtin: '89061106786453',
    category: 'Food'
  },
  {
    companyName: 'KRISHNA FOODS',
    gcp: '89041293',
    brandName: 'GSK',
    productName: 'GSK Chilli Masala',
    gtin: '89061106786453',
    category: 'Food'
  },{
    companyName: 'KRISHNA FOODS',
    gcp: '89041293',
    brandName: 'GSK',
    productName: 'GSK Chilli Masala',
    gtin: '89061106786453',
    category: 'Food'
  }
  
];
export  const Dashboardstates = [
  { title: 'GCPs', value: 4567, image: GCPsImage },
  { title: 'Retailers', value: 761, image: RetailersImage },
  { title: 'Brands', value: '233K', image: BrandsImage },
  { title: 'Products', value: '1.2M', image: ProductsImage },
  { title: 'Base Users', value: 3567, image: BaseUsersImage },
  { title: 'Premium Users', value: 1000, image: LicensesImage }
];
export const manufacturersData = [
  {
    id: 1,
    companyName: "VEZLAY FOOD PVT.LTD",
    gcp: '890604171',
    registrationType: "Indian GCP",
    status: "New Registration Request",
    subscriptionType: "Premium",
    registrationDate: "30-10-2023",
    duration: "3 Years",
    activationDate: "NA",
    deActivationDate: "NA",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 2,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Renewal Request",
    subscriptionType: "Premium",
    registrationDate: "12-10-2023",
    duration: "2 Years",
    activationDate: "NA",
    deActivationDate: "NA",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 3,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Modified Date",
    subscriptionType: "Premium",
    registrationDate: "12-10-2023",
    duration: "2 Years",
    activationDate: "NA",
    deActivationDate: "NA",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 4,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Changes Updated",
    subscriptionType: "Base",
    registrationDate: "12-10-2023",
    duration: "3 Years",
    activationDate: "15-09-2021",
    deActivationDate: "15-09-2024",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 5,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Expired",
    subscriptionType: "Base + Traceability",
    registrationDate: "12-10-2023",
    duration: "2 Years",
    activationDate: "10-09-2021",
    deActivationDate: "10-09-2023",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 6,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Rejected Renewal",
    subscriptionType: "Premium",
    registrationDate: "12-10-2023",
    duration: "1 Year",
    activationDate: "02-09-2023",
    deActivationDate: "02-09-2024",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 7,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Active",
    subscriptionType: "Premium",
    registrationDate: "12-10-2023",
    duration: "1 Year",
    activationDate: "02-09-2023",
    deActivationDate: "02-09-2024",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 8,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Active",
    subscriptionType: "Premium",
    registrationDate: "12-10-2023",
    duration: "1 Year",
    activationDate: "02-09-2023",
    deActivationDate: "02-09-2024",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 9,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Active",
    subscriptionType: "Base",
    registrationDate: "12-10-2023",
    duration: "1 Year",
    activationDate: "02-09-2023",
    deActivationDate: "02-09-2024",
    viewDetails:"view Detail",
    AcessAccount:"Access Account"
  },
  {
    id: 10,
    companyName: "Tru Native F&B Pvt Ltd",
    gcp: '890601209',
    registrationType: "Indian GCP",
    status: "Active",
    subscriptionType: "Traceability",
    registrationDate: "12-10-2023",
    duration: "1 Year",
    activationDate: "29-08-2023",
    deActivationDate: "29-08-2024",
    viewDetails:"view Detail",
    AccessAccount:"Access Account"
  }
];
export const RetailersData=  [
  {
    name: "Reliance / Jio Mart",
    userId: "Reliance",
    emailId: "arpits.jain@ril.com",
    startDate: "01-06-2015",
    endDate: "30-10-2019",
    status: "In-Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
   
  },
  {
    name: "Future Value Retail",
    userId: "futureretail",
    emailId: "pravin.ravdekar@futureretail.in",
    startDate: "30-08-2015",
    endDate: "30-10-2019",
    status: "In-Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
    
  },
  {
    name: "Nuvo Logistics Pvt Ltd. (PepperTap.com)",
    userId: "peppertap",
    emailId: "shubham.mittal@peppertap.com",
    startDate: "03-08-2015",
    endDate: "15-09-2019",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
  },
  {
    name: "GS1 India (Test)",
    userId: "gs1",
    emailId: "pawan.singh@gs1india.org",
    startDate: "31-12-2015",
    endDate: "11-09-2020",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
  
  },
  {
    name: "GS1 India",
    userId: "gs1india",
    emailId: "pawan.singh@gs1india.org",
    startDate: "27-08-2015",
    endDate: "05-09-2020",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
   
  },
  {
    name: "METRO CASH & CARRY INDIA LTD",
    userId: "metro",
    emailId: "md.shafeequrrahman@metro.co.in",
    startDate: "11-02-2015",
    endDate: "30-06-2019",
    status: "In-Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
    
  },
  {
    name: "Jiffstore Software Labs Pvt Ltd",
    userId: "jiffstore",
    emailId: "shameel@jiffstore.com",
    startDate: "21-05-2015",
    endDate: "31-08-2019",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
    
  },
  {
    name: "MN&C Supply Links Pvt. Ltd.",
    userId: "localbanya",
    emailId: "swatil@localbanya.com",
    startDate: "29-09-2015",
    endDate: "15-09-2019",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
    
  },
  {
    name: "Flipkart Internet Private Limited",
    userId: "flipkart",
    emailId: "karthik.v@flipkart.com",
    startDate: "13-05-2015",
    endDate: "15-09-2019",
    status: "In-Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
   
  },
  {
    name: "Grofers",
    userId: "grofers",
    emailId: "pos.catalogue@grofers.com",
    startDate: "11-02-2015",
    endDate: "10-08-2019",
    status: "Active",
    viewDetails:"view Detail",
    editDeatils:"Edit Detail",
  },
];
 export const NewRetailersData=[]
export const ViewDocumentList=[
  {
  DocumentType:"Balance Sheet/CA Certificate/VAT Return",
  DocumentNameDescription:"8908021987_BL_653a24cd6de1c.pdf",
  ServiceType:"New Registration",
  UploadedDate:"27-10-2023",
  UploadedBy:"Manufacturer",
  Action:Downloadicon
},
{
  DocumentType:"UAN",
  DocumentNameDescription:"uan_Copy.pdf",
  ServiceType:"New Registration",
  UploadedDate:"27-10-2023",
  UploadedBy:"Manufacturer",
  Action:Downloadicon
},
{
  DocumentType:"Welcome Kit",
  DocumentNameDescription:"wlcm.pdf",
  ServiceType:"New Registration",
  UploadedDate:"27-10-2023",
  UploadedBy:"Manufacturer",
  Action:Downloadicon
},
{
  DocumentType:"Invoice",
  DocumentNameDescription:"invc.pdf",
  ServiceType:"New Registration",
  UploadedDate:"27-10-2023",
  UploadedBy:"Manufacturer",
  Action:Downloadicon
},
{
  DocumentType:"Receipt",
  DocumentNameDescription:"rcpt.pdf",
  ServiceType:"New Registration",
  UploadedDate:"27-10-2023",
  UploadedBy:"Manufacturer",
  Action:Downloadicon
}

]