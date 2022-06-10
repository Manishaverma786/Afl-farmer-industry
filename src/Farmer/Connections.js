import SideBarFarmer from './SideBarFarmer'
import React, { useEffect,useState } from "react";
import "./Connection.css";
import axios from "../api/axios";
import { FaWhatsapp } from 'react-icons/fa';

 
const Connections = () => {
  
    const [connections, setConnections] = useState([]);

    const fetchData = () => {
        axios.get("connections")
            .then(response => {
                // console.log("Connection list", response.data);
                setConnections(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    }
  
    useEffect(() => {
        fetchData();
    }, []);
  
    const ShowConnections = () => {
      return (
          <>
              {
                  connections.map((data, i) =>
                      <div className="col-md-4 mb-4 mt-3 ">
                          <div className="card h-100 text-center py-3" style={{ "width": "18rem" }} key={i}>
                              <div className="card-body">
                                  <h5 className="card-title mb-0 fw-bolder">{data.name.toUpperCase()}</h5>
                                  <h6 className="card-title mb-0"> {data.email}</h6>
                                  <p className="card-text lead fw-bold mb-0"> <FaWhatsapp/>{data.phone} </p>
                                  <p className="card-text ">{data.location} </p>
                              </div>
                          </div>
                      </div>
                  )
              }
          </>
      )
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4">
            <SideBarFarmer />
          </div>
          <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
          <h1
            className="text-center border border-1 p-4  shadow p-3 mb-3 bg-body roundeds"
            style={{ marginTop: 0, color: "#172578" }}
          >
            Connections
          </h1>
        </div>
        </div>
        <div className="row ">
          <div className="col-md-9 mt-2" style={{marginLeft: 300 }}>
            <div className="row justify-content-center">{<ShowConnections />}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Connections;