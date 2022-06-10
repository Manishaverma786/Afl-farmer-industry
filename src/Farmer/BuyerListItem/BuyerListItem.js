import React from "react";
import './BuyerListItem.css';
import industry from "../Images/industry.png";


const BuyerListItem = () => (
  <div className="itemHolder">
    <img src={industry}></img>
    <div className="nameStatus">
      <span>Namco Industries</span>
      <p>Updated 1 day ago</p>
    </div>
    <div className="locationTime">
      <span>1 Ludhiana</span>
      <p>6:30 PM</p>
    </div>
    <div className="distance">2 km</div>
    {/* <img id="menu" src={menu}></img> */}
  </div>
);
export default BuyerListItem;
