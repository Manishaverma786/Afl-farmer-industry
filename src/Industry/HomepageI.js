<<<<<<< HEAD
import React, { useState } from "react";
import './HomePagei.css';
import Request from '../Components/MachineRequest'
import Residue from '../Components/MachineResidue'
=======
import React, { useEffect, useRef, useCallback, useState } from "react";
import './HomePagei.css';
import SideBar from './SideBar'
import Request from './RequestPage/RequestPage'
import Residue from './Residue'
>>>>>>> 2dc1961d0fbb2756ad223327097153eab8360884

function Homepagei() {
  const [active, setActive] = useState('Request')

  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <div className="col-md-6 col-sm-12">
<<<<<<< HEAD
            <h1 className='text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds' onClick={() => setActive("Request")} style={{ marginTop: 100, color: "#172578 " }}
=======
            <h1 className='text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds' onClick={() => setActive("Request") } style={{ marginTop: 100, color: "#172578 " }}
>>>>>>> 2dc1961d0fbb2756ad223327097153eab8360884
            >Requests</h1>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className='text-center border border-1 p-4  shadow p-3 mt-3 mb-5 bg-body roundeds' onClick={() => setActive("Residue")} style={{ marginTop: 100, color: "#172578 " }}
            >Residue</h1>
          </div>
          <div>
<<<<<<< HEAD
              {active === "Request" && <Request />}
              {active === "Residue" && <Residue />}
=======
              {active == "Request" && <Request />}
              {active == "Residue" && <Residue />}
>>>>>>> 2dc1961d0fbb2756ad223327097153eab8360884
            </div>
        </div>
      </div>
    </>
  );
}

export default Homepagei;
