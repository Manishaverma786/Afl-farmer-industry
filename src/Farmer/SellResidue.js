import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './NewStyleFile/globalstyle.css'
import { residue } from '../actions/userActions';
import residueimg from '../Farmer/assets/residueimg.jpeg';
import SideBarFarmer from './SideBarFarmer'
import axios from '../api/axios';

function SellResidue() {
  const history = useNavigate();
  const [type_of_residue, setTypeofresidue] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const formData = new FormData();
  
  async function residues(e) {
    e.preventDefault();
    let formdata = {
      type_of_residue: type_of_residue,
      price:price,
      quantity: quantity,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
      console.log(key, value);
    }

    let { data } = await axios.post("residues/", formData);
    console.log("data", data);
    localStorage.setItem("machine_info", JSON.stringify(data));
    history(`/residuedetails`);
  }

  return (
    <>

      <div className='sellResidueWrapper' style={{ background: "rgb(248,248,255)" }}>
        <div className="container-fluid" style={{ height: "100%" }}>
          <div id="wrapper">
          <SideBarFarmer/>
          </div>
          
          <div className="row">
            <div className="col text-center align-self-center">
              <img className="img-fluid" src={residueimg} style={{ width: "500px", height: "500px", marginLeft: "200px", marginBottom: "200px" }} />
            </div>
            <div
              className="col-lg-5 col-xl-5"
              style={{ background: "rgb(248,248,255)", "min-height": "888px" }}
            >
              <h2
                className="text-center"
                style={{ "margin-top": "126px" }}
              >
                Sell Residue
              </h2>
              <form onSubmit={residues} style={{ padding: "68px" }}>
                
              <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
              </label>
              <input
                type="text"
                className="form-control"
                value={type_of_residue}
                placeholder="Type of Residue"
                onChange={(e) => setTypeofresidue(e.target.value)}
              />
                <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
              </label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
                <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
              </label>
              <input
                type="number"
                className="form-control"
                value={price}
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
                <br></br>
                
                  <button
                    className="btn btn-info btn-lg"
                    type="submit" style={{ "backgroundColor": "#172578", "color": "white" }}
                    
                  >
                    {" "}
                    Add Residue
                  </button>
                  </form>
             
                <br></br>
              
              
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default SellResidue