import React, { useState } from 'react'
import SideBarFarmer from './SideBarFarmer'
import Tractor from './Tractor';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


function AddNewMachine() {
  const history = useNavigate();
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rent_price, setRent_price] = useState("");
  const [discount, setDiscount] = useState("");

  const formData = new FormData();

  async function addmachine(e) {
    e.preventDefault()
    let formdata = {
      "name": name,
      "description": description,
      
      "discount": discount,
      "rent_price" : rent_price,

      "image": file
    }

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value)
      console.log(key, value);
    }

    let {data} = await axios.post("machines/",  formData);
    console.log("data", data)
    localStorage.setItem("machine_info", JSON.stringify(data));
    history(`/rentmachines`)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <SideBarFarmer />
          <Tractor />
        </div>
        
        <div className="col-md-9 mt-5">
          <div className='col-sm-8 offset-sm-2' style={{ margintop: 100 }}>
            <h1 className='py-3'>Upload Your Machine Details</h1>
            <form onSubmit={addmachine}>
            <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">Name:</label>
            <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Description:</label>
            <textarea type="text" className='form-control' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Features</label> */}
            {/* <textarea type="text" className='form-control' value={fetures} placeholder='features' onChange={(e) => setFetures(e.target.value)} /> */}
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Length:</label>
            <input type="number" className='form-control' value={length} placeholder='length' onChange={(e) =>{ 
              setLength(parseInt(e.target.value))
              // console.log(e.target.value, typeof(e.target.value))
          
          } }/> */}
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Rent_price:</label>
            <input type="number" className='form-control' value={rent_price} placeholder='rent_price' onChange={(e) => setRent_price(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Discount:</label>
            <input type="number" className='form-control' value={discount} placeholder='discount' onChange={(e) => setDiscount(e.target.value)} />
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Warranty:</label>
            <input type="number" className='form-control' value={warranty} placeholder='warranty' onChange={(e) => setWarrenty(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Guarentee:</label>
            <input type="number" className='form-control' value={guarantee} placeholder='guarentee' onChange={(e) => setGuarantee(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Indsutry Number:</label>
            <input type="number" className='form-control' value={industry} placeholder='choose your industry number' onChange={(e) => setIndustry(e.target.value)} /><br /> */}
            <label htmlFor="formFile" className="form-label col-sm-3 col-form-label fw-bolder">Upload Image</label>
            <input  type="file"   onChange={(e) => setFile(e.target.files[0])}></input> <br />
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label fw-bolder">Image</label> */}
            {/* <input type="file" className='form-control' value={file} placeholder='file' onChange={(e) => setFile(e.target.files[0])} /><br /> */}
            {/* <input type="checkbox" value={sell} onChange={(e) => setSell(e.target.checked)} />
            <label htmlFor="sell">Sell</label><br />
            <input type="checkbox" value={rent} onChange={(e) => setRent(e.target.checked)} />
            <label htmlFor="rent"> Rent</label><br /> */}
            <button type='submit' className='btn btn-primary'>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default AddNewMachine;