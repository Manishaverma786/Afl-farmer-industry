import SideBarFarmer from './SideBarFarmer'
import React, { useEffect } from "react";
import "./Connection.css";
import axios from "../api/axios";

 
const Connection = () => {
  const fetchData = () => {
      axios.get("connections")
          .then(response => {
              console.log("Connection list", response.data);
          });
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
        <div className="container">
            <div className="row py-4 justify-content-evenly" >
                <div className="col-md-4">
                    <SideBarFarmer />
                </div>
                <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
                    <h1 className='text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Connections</h1>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-6" style={{ marginLeft: 275 }}>
                        {/* <div className="row justify-content-center">{<ShowConnections />}</div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Connection;