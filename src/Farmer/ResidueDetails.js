import { Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const ResidueDetails = () => {
  const { id } = useParams();
  const [residues, setResidue] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {

    axios.get("residues").then((response) => {
      console.log("residues list", response.data);
      setResidue(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  function deleteResidue(id) {
    axios.delete(`/residues/${id}`, {
    }).then((response) => {
      console.log(response.data)
    })
    navigate(`/residuedetails`);
    fetchData();
  }
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
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => deleteResidue(residue.id)}>
                  Delete
                </button>
                {/* <div class="btn btn-primary" onClick={() => { createorder(residue.id) }}>Buy</div> */}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Residues
          </h1>
          <div>
            <Link to="/sellresidue" style={{ textDecoration: 'none' }}>
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
              Add Residue
              </button>
            </Link>
          </div>
          <div className="row justify-content-center mt-4">{<ShowResidue />}</div>
        </div>
      </div>
    </>
  );
};

export default ResidueDetails;
