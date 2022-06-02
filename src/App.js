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
import SideBar from './Industry/SideBar';
import Residue from './Industry/Residue';
import Prefillform from './Industry/prefillform';
import  HomepageFarmer from './Farmer/HomePageFarmer';
import BuyMachines from './Farmer/BuyMachines'
import ResidueDetails from './Farmer/ResidueDetails'
import SellResidue from './Farmer/SellResidue'
// import ChangePassword from './Farmer/ChangePassword'
import Cart from './Farmer/Cart'
import Connections from './Farmer/Connections'
import MachineFarmer from './Farmer/MachineFarmer'
import Profile from './Farmer/Profile'
import Rent from './Farmer/Rent'
import Request from './Farmer/Request';
import Settings from './Farmer/Settings'
import AddNewMachine from './Farmer/AddNewMachine'
import RentMachines from './Farmer/RentMachines'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/industry" element={<Login />} />
        <Route path='/homepagei' element={<HomepageI />} />
        <Route path='/sidebar' element={<SideBar />} />
        <Route path="machinelist" element={<MachineList />} />
        <Route path="machines/:id" element={<Machine />} />
        <Route path="addmachine" element={<AddMachine />} />
        <Route path="connections" element={<Connection />} />
        <Route path="requestpage" element={<RequestPage />} />
        <Route path="residues" element={<Residue/>} />
        <Route path='/prefillform' element={<Prefillform/>} />
        
      {/* Farmer */} 
      <Route path="homepagefarmer" element={<HomepageFarmer />} />
      <Route path="buy" element={<BuyMachines />} />
      <Route path="residuedetails" element={<ResidueDetails />} />
      <Route path="sellresidue" element={<SellResidue />} />
      {/* <Route path="changepassword" element={<ChangePassword />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="connection" element={<Connections/>} />
      <Route path="machine/:id" element={<MachineFarmer />} />
      <Route path="profile" element={<Profile />} />
      <Route path="rent" element={<Rent />} />
      <Route path="addnewmachine" element={<AddNewMachine />} />
      <Route path="rentmachines" element={<RentMachines />} />
      <Route path="settings" element={<Settings />} />
      <Route path="requestfarmer" element={<Request />} />

      </Routes>
    </Router>
  );
}

export default App;