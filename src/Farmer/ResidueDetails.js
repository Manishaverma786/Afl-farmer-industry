import SideBarFarmer from './SideBarFarmer'
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const ResidueDetails = () => {

    const [residues, setResidue] = useState([]);

    const fetchData = () => {
        axios.get("residues")
            .then(response => {
                console.log("residues list", response.data);
                setResidue(response.data);
            });
    }
    useEffect(() => {
        fetchData();

    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <SideBarFarmer />
                </div>
                <div className="col-md-6">
                    <h1 className='text-center border border-1 p-4  shadow p-3 mb-3 bg-body roundeds' style={{ marginTop: 100, color: "#172578 "}}>Residues</h1>
                </div>
                <div className="row ">
                    <div className="col-md-9" style={{marginLeft:300}}>
                        <table className="table table-hover p-3">
                            <thead>
                                <tr className="table p-3" style={{"backgroundColor":"#172578","color":"white"}}>
                                    <th scope="col">id</th>
                                    <th scope="col">Type Of residue</th>
                                    <th scope="col">Quantity(kg)</th>
                                    <th scope="col">Price(₹)</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    residues.map((residue, i) =>
                                        <tr key={i} >
                                            <td>{residue.id}</td>
                                            <td>{residue.type_of_residue}</td>
                                            <td>{residue.quantity}</td>
                                            <td>{residue.price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResidueDetails
