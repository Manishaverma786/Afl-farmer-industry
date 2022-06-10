import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './BuyerListItemHeader.css';

const BuyerListItemHeader = () => (
  <div className="header">
    <div id="heading1">Ticket Details</div>
    <div id="heading2">Place</div>
    <div id="heading3">Waiting</div>
  </div>
);

BuyerListItemHeader.propTypes = {};

BuyerListItemHeader.defaultProps = {};

export default BuyerListItemHeader;
