import React, { useEffect, useMemo, useState } from "react";
import './HomePageFarmer.css';
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SideBarFarmer from './SideBarFarmer'
import sort from "../Industry/Images/sort.png";
import filter from "../Industry/Images/filter.png";
import { Link } from 'react-router-dom';
import axios from "../api/axios";

const HomePageFarmer = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [machines, setMachines] = useState([]);
  const [filter, setFilter] = useState("for_sale=true");

  var filterdata = useMemo(() => {
    return machines.filter((x) => x.status === filter);
  }, [filter, machines]);

  const machine = () => {
    axios.get("machines").then((response) => {
      const machineList = response.data;
      console.log(machineList);
      setMachines(machineList);
      setLoading(true);
      setLoading(false);
    });
  };
  useEffect(() => {
    machine();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  function handleClick(id) {
    history(`/moredetails/${id}`);
  }


  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          {/* <button type="button" class="btn btn-outline-dark me-2" onClick={() => setFilter("All")}>All</button> */}
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter("for_sale=true")}
          >
            For sale
          </button>
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            onClick={() => setFilter("for_rent=true")}
          >
            For rent
          </button>

        </div></>
    );
  }
  {
    machines.map((data,i) => {
      return (
        <>
          <div className="col-md-4 mb-4 mt-3 ">
            <div className="card h-100 text-center py-4" key={i}>
              <img
                src={data.image}
                className="card-img-top"
                alt={machines.name}
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title mb-0">
                  {data.name.substring(0, 12)}
                </h5>
                <p class="card-text lead fw-bold">
                  {data.sell_price}₹ {machines.id}
                </p>
                <p className="card-text">
                  {data.description.substring(0, 20)}...
                </p>
                <div class="btn btn-primary"> Add to Cart</div>
                <br></br>
                <br></br>
                <div
                  class="btn btn-primary"
                  onClick={() => {
                    handleClick(machines.id);
                  }}
                >
                  {" "}
                  more details
                </div>
              </div>
            </div>
          </div>
        </>
      );
    })
  }


  return (
    <div>
      <div className="container py-5 mt-4">
        <div className="row">
          <div className="col-3">
            <SideBarFarmer />
          </div>
          <div className="col-9 mb-5">
            <h1 className="display-6 fw-bolder text-center" style={{ "color": "#172578" }}>Machines List</h1>
            <hr />
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageFarmer;