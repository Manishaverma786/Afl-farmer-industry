import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewStyleFile/newnavbar.css'
import { Link, useNavigate } from 'react-router-dom';
import shoppingcarticon from '../Farmer/assets/shoppingcarticon.png';

const NewNavbar = () => {
    let navigate = useNavigate()
  return (<>
  
  
  <div className='navbarWrapper' style={{ "height": "50px"}}>

  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  {/* <div class="page-content-wrapper pt-3"> 
      <div class="container-fluid pt-3">
            <div class="row">
                <div class="col">
                    <div class="btn-group" style={{"width": "141px", "marginLeft": "500px"}}><Link to="/sellresidue"><button class="btn btn-primary" style={{"backgroundColor":"#172578"}} type="button">Sell Residue</button></Link>
                </div>
            </div>
            <div class="col">
                <div class="btn-group" style={{"width": "80px"}}><button class="btn btn-primary" style={{"backgroundColor":"#172578"}} type="button">Buy/Rent</button><button class="btn btn-primary dropdown-toggle dropdown-toggle-split" style={{"backgroundColor":"#172578"}} data-toggle="dropdown" type="button"></button>
                    <div class="dropdown-menu"><Link to="/buy"><a class="dropdown-item" href="#">Buy</a></Link><Link to="/Rent"><a class="dropdown-item" href="#">Rent</a></Link>
                    </div>
                </div>
            </div>
      </div>
    </div>

              
            
          </div> */}
    {/* <div className='profileBox' style={{'marginRight':'500px'}}>  <a onClick={()=>{navigate('/cart')}} ><i class="fa fa-shopping-cart mr-3"></i> </a>
    
  </div> */}

  

<span><img style={{width: "105px"}} src='assets/img/AFL.jpg' alt='img' /> </span>

                    <Link to="/cart">
                      {" "}
                      <img
                        src= {shoppingcarticon}
                        style={{ width: "50px", textAlign: "right",marginLeft:"1000px"}}
                      />{" "}
                    </Link>
                  
  </div>
  
  </>)
}

export default NewNavbar