import React from "react";
import './BuyerListFooter.css';
import drop from "../Images/drop.svg";
import left from "../Images/left.svg";
import right from "../Images/right.svg";

const BuyerListFooter = () => (
  <div className="footerTable">
    <div className="header-left"></div>
    <div id="footerItem1" className="footerRow">
      <p id="rowsPerPage">Rows per page: 8</p>
      <img id="dropIcon" src={drop}></img>
    </div>
    <div className="footerRow">
      <p id="rowsPerPage">1-8 of 1240</p>
      <img id="leftIcon" src={left}></img>
      <img id="rightIcon" src={right}></img>
    </div>
  </div>
);

export default BuyerListFooter;
