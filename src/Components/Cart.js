import React,{useEffect}from 'react'
import axios from '../api/axios'

const Cart = () => {
    
    const products =()=> axios.get("cart").then(res => {
        console.log("Cart list", res.data)
      })
    
      useEffect(() => {
        products();
      }, []);
  return (
    <div>
      Cart Page
      create a list and Add sum checkout.
    </div>
  )
}

export default Cart
