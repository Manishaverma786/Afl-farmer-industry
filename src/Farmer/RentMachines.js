import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import SideBarFarmer from "./SideBarFarmer";
import axios from "../api/axios";
const RentMachines = () => {
  const history = useNavigate();

  const [filter, setFilter] = useState([]);
  const [loading, setLoadiing] = useState(false);

  useEffect(async () => {
    setLoadiing(true);
    const { data } = await axios.get("machines/?own=true");
    setFilter(data);
    console.log(data);
    setLoadiing(false);
  }, []);

  console.log(filter, "----------");

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
    history(`/machine/${id}`);
  }
  const ShowProducts = () => {
    return (
      <>
        {filter.map((machines) => {
          return (
            <>
              <div className="col-md-4 mb-4 mt-3 ">
                <div className="card h-100 text-center py-4" key={machines.id}>
                  <img
                    src={machines.image}
                    className="card-img-top"
                    alt={machines.name}
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {machines.name.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">
                      {machines.rent_price}₹ {machines.id}
                    </p>
                    <p className="card-text">
                      {machines.description.substring(0, 20)}...
                    </p>
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
        })}
      </>
    );
  };

  return (
    <>
    <div className="container">
      <div className="row py-4 justify-content-evenly" >
        <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-3 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>My Products
        </h1>
        <div>
        <Link to="/addnewmachine" style={{ textDecoration: 'none' }}>
            {/* <button
              className="btn btn-info btn-dark btn-lg"
              style={{
                position: "absolute",
                color: "white",
                marginBottom: "500px",
                left: "90%",
                "-ms-transform": "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
              }}
            >
              {" "}
              Add Residue
            </button> */}
            <button className="btn btn-outline-dark px-4 py-2 d-flex ms-auto p-2">
            Add Machine
            </button>
          </Link>
        </div>
        <div className="row justify-content-center mt-2"> {loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  </>
     
  );
};

{
  /* <Link to="/addnewmachine">
                <button
                  className="btn btn-info btn-lg"
                  style={{
                    position: "absolute",
                    backgroundColor: "#172578",
                    color: "white",
                    margintop: "150px",
                    left: "50%",
                    "-ms-transform": "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {" "}
                  Add New Machine
                </button>
              </Link> */
}

export default RentMachines;
