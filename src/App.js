import React from 'react';
import { Blogs } from './Containers';
import { HomePage, SignUp, Login } from './Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMachine from './Industry/AddMachine';
import MachineList from './Industry/MachineList';
import Machine from './Industry/Machine';
import Connection from './Industry/Connections/Connection';
import RequestPage from './Industry/RequestPage/RequestPage';
import HomepageI from './Industry/HomepageI';
import Residue from './Industry/Residue';
import Layout from './Industry/Layout';
import Update from './Industry/Update';
import SideBar from './Farmer/SideBarFarmer';
import HomepageFarmer from './Farmer/HomePageFarmer';
import BuyMachines from './Farmer/BuyMachines'
import ResidueDetails from './Farmer/ResidueDetails'
import SellResidue from './Farmer/SellResidue'
// import ChangePassword from './Farmer/ChangePassword'
import Cart from './Farmer/Cart'
import Connections from './Farmer/Connections'
import MachineFarmer from './Farmer/MachineFarmer'
import Profile from './Farmer/Profile'
import Request from './Farmer/Request';
import Settings from './Farmer/Settings'
import AddNewMachine from './Farmer/AddNewMachine'
import RentMachines from './Farmer/RentMachines'
import MoreDetailsIndustryList from './Farmer/MoreDetailsIndustryList';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/industry" element={<Login />} />
          <Route path='homepagei' element={<Layout children={<HomepageI />} />} />
          <Route path="machinelist" element={<Layout children={<MachineList />} />} />
          <Route path="machines/:id" element={<Layout children={<Machine />} />} />
          <Route path="addmachine" element={<Layout children={<AddMachine />} />} />
          <Route path="connections" element={<Layout children={<Connection />} />} />
          <Route path="requestpage" element={<Layout children={<RequestPage title="Requests" />} />} />
          <Route path="residues" element={<Layout children={<Residue title="Residue" />} />} />
          <Route path="update/:id" element={<Layout children={<Update />} />} />

          {/* Farmer */}
          <Route path="homepagefarmer" element={<HomepageFarmer />} />
          <Route path="buy" element={<BuyMachines />} />
          <Route path="residuedetails" element={<SideBar children={<ResidueDetails />} />} />    
          <Route path="sellresidue" element={<SellResidue />} />
          <Route path="cart" element={<Cart />} />
          <Route path="connection" element={<SideBar children={<Connections />} />} />
          <Route path="machine/:id" element={<SideBar children={<MachineFarmer />} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addnewmachine" element={<SideBar children={<AddNewMachine />} />} />
          <Route path="rentmachines"  element={<SideBar children={<RentMachines />} />} />
          <Route path="settings" element={<Settings />} />
          <Route path="requestfarmer" element={<SideBar children={<Request />} />} />
          <Route path="moredetails/:id" element={<MoreDetailsIndustryList />} />
        </Routes>
    </Router>
  );
}

export default App;