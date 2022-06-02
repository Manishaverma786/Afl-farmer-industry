import React, { Component } from 'react'
import Tractor1 from '../Farmer/assets/Tractor1.png';

export class Tractor extends Component {
    render() {
        return (
            <div className="row">
              <img className="img-fluid" src={Tractor1} style={{ position: "fixed",  width: "300px", height: "300px", marginLeft: "190px", marginTop: "100px" }} />
            </div>
        
        )
    }
}

export default Tractor