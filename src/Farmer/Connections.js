import React, { Component } from 'react'
import SideBarFarmer from './SideBarFarmer'
export class Connections extends Component {
    
    render() {
        return (
            <div>
            
                <div id="wrapper">

                <SideBarFarmer />

                    <div className="page-content-wrapper pt-3">
                        
                        <div className="container-fluid pt-3">
                        <h2 style={{"textAlign":"center", "color": "#172578"}}> Connections</h2><br></br>
                        
                        <div className='row my-3'>
                        <div className='col-12'>
                            <p>Filter by:-</p>
                        </div>
                            {/* <div className='col-md-3 filterBox'>
                            <select class="form-select">
                            <option selected>--select--</option>
                            <option >Low to High</option>
                            <option >High to Low</option>
                            </select>
                            </div> */}

                            <div className='col-md-3 filterBox'>
                            <select class="form-select">
                            <option selected>Industry</option>
                            <option >Buyer</option>

                            </select>
                            </div>
                        </div>
                            <div class="row">
                                <div class="col">
                                    <div class="card shadow-sm">
                                        <div class="card-header">
                                            <h5 class="mb-0">Connections List</h5>
                                        </div>
                                        <div class="card-body"></div>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th style={{ "width": "75px" }}>Sn.</th>
                                                        <th>Name</th>
                                                        <th>Type</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Industry 1<br /></td>
                                                        <td>Industry</td>
                                                        <td>Harvester</td>
                                                        <td>150000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Buyer 1</td>
                                                        <td>Buyer</td>
                                                        <td>Residue</td>
                                                        <td>1000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right" style={{ "margin-right": "50px" }}>
                  <img src="assets/img/AFL.jpg" style={{ width: "108px", marginTop: "400px" }} />
                </div>
            </div>
        )
    }
}

export default Connections