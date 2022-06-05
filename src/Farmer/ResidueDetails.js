import SideBarFarmer from "./SideBarFarmer";
import { useParams } from 'react-router';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from "../api/axios";

const ResidueDetails = () => {
    const { id } = useParams();
  const [residues, setResidue] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get("residues").then((response) => {
      console.log("residues list", response.data);
      setResidue(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
//   function deleteResidue(id) {
//     axios.delete(`/residues/${id}`, {
//     }).then((response) => {
//         console.log(response.data)
//     })
//     navigate(`/residuedetails`);
// }
  const ShowResidue = () => {
    return (
      <>
        {residues.map((residue, i) => (
          <div className="col-md-4 mb-4 mt-3 ">
            <div
              className="card h-40 text-center py-3"
              style={{ width: "18rem" }}
              key={i}
            >
              <div class="card-body">
                <h5 class="card-title mb-0">{residue.type_of_residue}</h5>
                <h6 class="card-title mb-0"> Quantity: {residue.quantity}</h6>
                <p class="card-text lead fw-bold">{residue.price}₹ </p>
                {/* <button className="btn btn-outline-dark px-4 py-2" onClick={() => deleteResidue(residues.id)}>
                                Delete
                            </button> */}
                {/* <div class="btn btn-primary" onClick={() => { createorder(residue.id) }}>Buy</div> */}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <SideBarFarmer />
        </div>
        <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
          <h1
            className="text-center border border-1 p-4  shadow p-3 mb-3 bg-body roundeds"
            style={{ marginTop: 100, color: "#172578" }}
          >
            Residues
          </h1>
        </div>
        <div className="row ">
          <div className="col-md-9 mt-2" style={{ marginLeft: 300 }}>
            <div className="row justify-content-center">{<ShowResidue />}</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidueDetails;
