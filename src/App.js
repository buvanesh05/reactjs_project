import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from './pages/Dashboard/Page';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { ManuafactrersAndReatilers } from './pages/ManuafactrersAndReatilers/Page';
import ForgotPage from './Components/LoginSession/ForgotPage';
import Registration from './Components/LoginSession/Registrationform';
import Login from './pages/Login/Page';
import Verification from './Components/LoginSession/Verification';
import Authentication from './Components/LoginSession/Authentication';
import AddRetailers from './Components/Common/Manufactures/AddRetailers';
import ViewRetailersDetails from './Components/Common/Manufactures/ViewRetailersDetails';
import EditRetailer from './Components/Common/Manufactures/EditRetailer';
import ViewDetailManufacture from './Components/Common/Manufactures/ViewDetailManufacture';
import { AccessAccount } from './Components/Common/Manufactures/AccessAccount';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard layout and routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manageManufacturersAndRetailers" element={<ManuafactrersAndReatilers />} />
          <Route path="manageManufacturersAndRetailers/addRetailer" element={<AddRetailers />} />
          <Route path="manageManufacturersAndRetailers/addRetailer/viewRetailer" element={<ViewRetailersDetails />} />
          <Route path="manageManufacturersAndRetailers/addRetailer/viewRetailer/editDetail" element={<EditRetailer />} />
          <Route path="manageManufacturersAndRetailers/viewManufacture" element={<ViewDetailManufacture />} />
          <Route path="manageManufacturersAndRetailers/accessManufacture" element={<AccessAccount />} />
        </Route>

        {/* Authentication routes */}
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verify" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} /> {/* You may want to add a separate component for signup */}
      
      </Routes>
    </Router>
  );
}

export default App;
