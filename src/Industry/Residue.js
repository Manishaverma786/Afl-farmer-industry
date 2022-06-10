import SideBar from './SideBar';
import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; 

const Residue = () => {

    const [residues, setResidues] = useState([]);

    const fetchData = () => {
        axios.get("residues")
            .then(response => {
                console.log("residues list", response.data);
                setResidues(response.data);
            });
    }
    const createorder = (id) => {
        axios.post("residue-orders/", {
            residue: id
        })
            .then(response => {
                let orders = response.data;
                console.log("Order", orders);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const ShowResidue = () => {
        return (
            <>
                {
                    residues.map((residue, i) =>
                        <div className="col-md-4 mb-4 mt-3 ">
                            <div className="card h-40 text-center py-3" style={{ "width": "18rem" }} key={i}>
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{residue.type_of_residue}</h5>
                                    <h6 class="card-title mb-0"> Quantity: {residue.quantity}</h6>
                                    <p class="card-text lead fw-bold">{residue.price}₹ </p>
                                    <div class="btn btn-primary" onClick={() => { createorder(residue.id) }}>Buy</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <SideBar />
                </div>
                <div className="col-md-9 col-sm-6" style={{ marginLeft: 300 }}>
                    <h1 className='text-center border border-1 p-4  shadow p-3 mb-3 bg-body roundeds' style={{ marginTop: 100 }}>Residues</h1>
                </div>
                <div className="row ">
                    <div className="col-md-9 mt-2" style={{ marginLeft: 300 }}>
                        <div className="row justify-content-center">{<ShowResidue />}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Residue;
