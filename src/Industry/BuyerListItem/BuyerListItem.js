import React from "react";
import './BuyerListItem.css';
import Alex from "../Images/Alex.png";
import menu from "../Images/menu.svg";

const BuyerListItem = () => (
  <div className="itemHolder">
    <img src={Alex}></img>
    <div className="nameStatus">
      <span>Chadler Bing</span>
      <p>Updated 1 day ago</p>
    </div>
    <div className="locationTime">
      <span>1 Ludhiana</span>
      <p>6:30 PM</p>
    </div>
    <div className="waiting">High</div>
    <img id="menu" src={menu}></img>
  </div>
);
export default BuyerListItem;
