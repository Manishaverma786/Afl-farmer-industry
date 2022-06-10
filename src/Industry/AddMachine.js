import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


function AddMachine() {
  const history = useNavigate();
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [sell_price, setSell_price] = useState("");
  const [rent_price, setRent_price] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [discount, setDiscount] = useState("");
  const [warranty, setWarrenty] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [for_sale, setFor_sale] = useState("false");
  const [for_rent, setFor_rent] = useState("false");

  const formData = new FormData();

  async function addmachine(e) {
    e.preventDefault()
    let formdata = {
      "name": name,
      "sell_price": sell_price,
      "rent_price": rent_price,
      "description": description,
      "details": JSON.stringify({
        "length": length,
        "weight": weight
      }),
      "discount": discount,
      "warranty": warranty,
      "guarantee": guarantee,
      "for_sale": for_sale,
      "for_rent": for_rent,
      "image": file
    }

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value)
      // console.log(key, value);
    }

    await axios.post("machines/", formData)
      // console.log("data", data)
      alert('Machine Added Successfully')
      history(`/machinelist`)
    
  }
  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Upload Your Machine Details</h1>
          <div className="row justify-content-center"><form onSubmit={addmachine}>
            <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">Name:</label>
            <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Sell Price:</label>
            <input type="number" className='form-control' value={sell_price} placeholder='Sell_Price' onChange={(e) => setSell_price(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Rent Price:</label>
            <input type="number" className='form-control' value={rent_price} placeholder='Rent_Price' onChange={(e) => setRent_price(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Description:</label>
            <textarea type="text" className='form-control' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Length:</label>
            <input type="number" className='form-control' value={length} placeholder='length' onChange={(e) => {
              setLength(parseInt(e.target.value))

            }} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Weight:</label>
            <input type="number" className='form-control' value={weight} placeholder='weight' onChange={(e) => setWeight(parseInt(e.target.value))} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Discount:</label>
            <input type="number" className='form-control' value={discount} placeholder='discount' onChange={(e) => setDiscount(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Warranty:</label>
            <input type="number" className='form-control' value={warranty} placeholder='warranty' onChange={(e) => setWarrenty(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Guarentee:</label>
            <input type="number" className='form-control' value={guarantee} placeholder='guarentee' onChange={(e) => setGuarantee(e.target.value)} />
             <label htmlFor="formFile" className="form-label col-sm-3 col-form-label fw-bolder mt-2">Uplaod Image: </label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> <br />
             <input type="checkbox" value={for_sale} onChange={(e) => setFor_sale(e.target.checked)} />
            <label htmlFor="sell">For Sale</label><br />
            <input type="checkbox" value={for_rent} onChange={(e) => setFor_rent(e.target.checked)} />
            <label htmlFor="for_rent"> For Rent</label><br />
            <button type='submit' className='btn btn-primary'>Add Product</button>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddMachine;