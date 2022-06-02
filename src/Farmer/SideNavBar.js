import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideNavBar extends Component {
  render() {
    return (
    <div>
      <div style={{"backgroundColor":"#172578"}} id="sidebar-wrapper">
           <ul class="sidebar-nav">
              <li class="sidebar-brand" style={{"height": "170px"}}> <a class="text-center text-white" href="#" style={{"padding-top": "35px"}}><img class="img-fluid bg-white border rounded-circle" src="assets/img/User_New.png" style={{"width": "111px"}}/><p>Name</p></a></li>
              <li>
                <br></br>
                <br></br>
              {/* <Link to="/profile"><button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Edit Profile&nbsp;<i className="fa fa-pencil" style={{"margin-left": "8px"}}></i></button></Link> */}
              <Link class="text-white" to="/homepagefarmer"><i class="fa fa-pie-chart mr-3"></i>Home</Link>
              <Link class="text-white" to="/buy"><i class="fa fa-plus-circle mr-3"></i>Products</Link>
              <Link class="text-white" to="/sellresidue"><i class="fa fa-calendar-o mr-3"></i> Sell Residue</Link>
              <Link class="text-white" to="/connection"><i class="fa fa-users mr-3"></i>Connections</Link>
              <Link class="text-white" to="/settings"><i class="fa fa-gear mr-3"></i>Settings</Link>
              <Link class="text-white" to="/"><i class="fa fa-sign-out mr-3"></i>Exit</Link>
              </li>
              <li> </li>
              <li> </li>
          </ul>
      </div>
    </div>
    )
  }
}

export default SideNavBar

