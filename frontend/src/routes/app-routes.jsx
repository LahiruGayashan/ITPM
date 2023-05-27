import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Home,
  OderOne,
  OderList,
  HarvestAdd,
  OderUpdate,
  Oder,
  Centers,
  CenterDetails,
  VehicleSign_up,
  AdminLogin,
  AdminSignup,
} from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oderone/:id" element={<OderOne />} />
          <Route path="/oderlist" element={<OderList />} />
          <Route path="/oderupdate/:id" element={<OderUpdate />} />
          <Route path="/oderadd" element={<HarvestAdd />} />
          <Route path="/oder" element={<Oder />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/centerdetails" element={<CenterDetails />} />
          <Route path="/vehicle_signup" element={<VehicleSign_up />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
