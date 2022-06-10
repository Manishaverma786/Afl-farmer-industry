import React, { useEffect, useRef, useCallback } from "react";
import './HomePagei.css';
import SideBar from './SideBar'
import sort from "../Industry/Images/sort.png";
import filter from "../Industry/Images/filter.png";
import BuyerListItem from "./BuyerListItem/BuyerListItem";
import BuyerListItemHeader from "./BuyerListItemHeader/BuyerListItemHeader";
import BuyerListFooter from "./BuyerListFooter/BuyerListFooter";

function Homepagei() {
  const myContainer1 = useRef(null);
  const myContainer2 = useRef(null);

  const handleBlockClick = useCallback(
    (id) => () => {
      if (id === 1) {
        myContainer1.current.classList.add("active");
        myContainer2.current.classList.remove("active");
      } else {
        myContainer2.current.classList.add("active");
        myContainer1.current.classList.remove("active");
      }
    },
    []
  );

  return (
    <div>
      <SideBar/>
    <div className="Homepagei">
      <div className="main_layout">
        <div className="blocks">
          <div
            className="active"
            id="1"
            onClick={handleBlockClick(1)}
            ref={myContainer1}
          >
            <p id="buyersText">Buyers</p>
            <p id="buyersAmt">60</p>
          </div>
          <div id="2" onClick={handleBlockClick(2)} ref={myContainer2}>
            <p id="buyersText">Available Machines</p>
            <p id="buyersAmt">16</p>
          </div>
        </div>
        <div className="table">
          <div className="table_header">
            <p id="tableName">Buyers</p>
            <div className="sortFilter">
              <img src={sort}></img>
              <p>Sort</p>
            </div>
            <div className="sortFilter">
              <img src={filter}></img>
              <p>Filter</p>
            </div>
          </div>
          <div className="table_list">
            <BuyerListItemHeader />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListItem />
            <BuyerListFooter />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Homepagei;
