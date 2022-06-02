import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './BuyerListItemHeader.css';

const BuyerListItemHeader = () => (
  <div className="header">
    <div id="heading1">Buyer Name</div>
    <div id="heading2">Location</div>
    <div id="heading3">Distance</div>
  </div>
);

BuyerListItemHeader.propTypes = {};

BuyerListItemHeader.defaultProps = {};

export default BuyerListItemHeader;
