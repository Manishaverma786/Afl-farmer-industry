import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'


function Update() {

  const { id } = useParams();
  const history = useNavigate();
  const [file, setFile] = useState([])
  const [name, setName] = useState("")
  const [sell_price, setSell_price] = useState("")
  const [rent_price, setRent_price] = useState("")
  const [description, setDescription] = useState("")
  const [length, setLength] = useState("")
  const [weight, setWeight] = useState("")
  const [discount, setDiscount] = useState("")
  const [warranty, setWarrenty] = useState("")
  const [guarantee, setGuarantee] = useState("")
  const [for_sale, setFor_sale] = useState("false")
  const [for_rent, setFor_rent] = useState("false")

  const formData = new FormData();

  const getProductDetails = async () => {
    const { data } = await axios.get(`/machines/${id}`)
    // console.log(data)
    setName(data.name)
    setSell_price(data.sell_price)
    setRent_price(data.rent_price)
    setDescription(data.description)
    setDiscount(data.discount)
    setLength(data.details.length)
    setWeight(data.details.weight)
    setWarrenty(data.warranty)
    setGuarantee(data.guarantee)
    setFile(data.image)
    setFor_rent(data.for_rent)
    setFor_sale(data.for_sale)

  }

  useEffect(() => {
    getProductDetails()
  }, [])


  async function updateProduct(e) {
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
      // "image": file
    }

    if(typeof(file)!=="string"){
      formdata["image"] = file
      console.log('hello')
    }
    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value)
      console.log(key, value);
    }


    let { data } = await axios.patch(`/machines/${id}`, formData);
    console.log("data", data)
    alert('details updated succesfully')
    history(`/machinelist`)
  }
  return (
    <>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Update Your Machine Details</h1>
          <div className="row justify-content-center"><form onSubmit={updateProduct}>
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
            <input type="checkbox" checked={for_sale} onChange={(e) => setFor_sale(e.target.checked)} />
            <label htmlFor="sell" className="col-sm-3 col-form-label mt-2 px-2 fw-bolder">For Sale</label><br />
            <input type="checkbox" checked={for_rent} onChange={(e) => setFor_rent(e.target.checked)} />
            <label htmlFor="for_rent" className="col-sm-3 col-form-label mt-1 px-2 fw-bolder" > For Rent</label><br />
            <label htmlFor="formFile" className="form-label col-sm-3 col-form-label fw-bolder mt-2">Uplaod Image: </label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> <br />
            <img src={file} style={{ width: 400, height: 300 }} alt=" Current Uploaded" />
            <p style={{ marginLeft: 160 }}>Uploaded Image</p>
            <button type='submit' className='btn btn-primary mt-2'>Update Product</button>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Update;