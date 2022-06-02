import React from 'react'

import SideBarFarmer from './SideBarFarmer'

const Cart = () => {
  return (
    <>


<SideBarFarmer/>


<div className=' cart1'>
    <div className='block1'>
    <div className='shoppinghead'>
        <h1 className='shoppingTag'>Shopping Cart</h1>
        <h1 className='shoppingTag'>3 items</h1>
    </div>
 

    <table className='productCartDetails'>
        <tr className=' listnameblock'>
        <th className='listname'>PRODUCT DETAILS</th>
        <th className='listname'>QUANTITY</th>
        <th className='listname'>PRICE</th>
        <th className='listname'>TOTAL</th>
        </tr>

        <tr className='pDetails pDetails1'>
            <td className='col col1 pimage'>

            <div className='imgBlock'>
                        <img src='assets/img/Teslaa.png' alt='img'/>

            </div>
            <div className='itemDetails'>
            <p className='pname'>Teslaa</p>
            <p className='pbrand'>Car</p>
            <p className='remove'>Remove</p>
        </div>

        </td>
            <td className='col col2'>
            <div className='pQtyBox'>
                    <button onClick={()=>alert('clicked')}>-</button><p className='pQty'>2</p><button onClick={()=>alert('clicked')}>+</button>
                </div>
            </td>
            <td className='col col3'>

            <div className='price'>
                <p>$120.00</p>
            </div>

            </td>
            <td className='col col4'>

            <div className='totalprice'>
                <p>$120.00</p>
            </div>

            </td>

        </tr>

        <tr className='pDetails pDetails2'>
            <td className='col col1 pimage'>

            <div className='imgBlock'>
            <img src='assets/img/Teslaa.png' alt='img'/>
            </div>
            <div className='itemDetails'>
            <p className='pname'>Teslaa</p>
            <p className='pbrand'>Car</p>
            <p className='remove'>Remove</p>
        </div>

        </td>
            <td className='col col2'>
            <div className='pQtyBox'>
                    <button onClick={()=>alert('clicked')}>-</button><p className='pQty'>2</p><button onClick={()=>alert('clicked')}>+</button>
                </div>
            </td>
            <td className='col col3'>

            <div className='price'>
                <p>$120.00</p>
            </div>

            </td>
            <td className='col col4'>

            <div className='totalprice'>
                <p>$120.00</p>
            </div>

            </td>

        </tr>


        <tr className='pDetails pDetails2'>
            <td className='col col1 pimage'>

            <div className='imgBlock'>
            <img src='assets/img/Teslaa.png' alt='img'/>

            </div>
            <div className='itemDetails'>
            <p className='pname'>Teslaa</p>
            <p className='pbrand'>Car</p>
            <p className='remove'>Remove</p>
        </div>

        </td>
            <td className='col col2'>
            <div className='pQtyBox'>
                    <button onClick={()=>alert('clicked')}>-</button><p className='pQty'>2</p><button onClick={()=>alert('clicked')}>+</button>
                </div>
            </td>
            <td className='col col3'>

            <div className='price'>
                <p>$120.00</p>
            </div>

            </td>
            <td className='col col4'>

            <div className='totalprice'>
                <p>$120.00</p>
            </div>

            </td>

        </tr>


        <tr className='pDetails pDetails2'>
            <td className='col col1 pimage'>

            <div className='imgBlock'>
                        <img src='assets/img/Teslaa.png' alt='img'/>

            </div>
            <div className='itemDetails'>
            <p className='pname'>Teslaa</p>
            <p className='pbrand'>Car</p>
            <p className='remove'>Remove</p>
        </div>

        </td>
            <td className='col col2'>
            <div className='pQtyBox'>
                    <button onClick={()=>alert('clicked')}>-</button><p className='pQty'>2</p><button onClick={()=>alert('clicked')}>+</button>
                </div>
            </td>
            <td className='col col3'>

            <div className='price'>
                <p>$120.00</p>
            </div>

            </td>
            <td className='col col4'>

            <div className='totalprice'>
                <p>$120.00</p>
            </div>

            </td>

        </tr>


        <tr className='pDetails pDetails2'>
            <td className='col col1 pimage'>

            <div className='imgBlock'>
                        <img src='assets/img/Teslaa.png' alt='img'/>

            </div>
            <div className='itemDetails'>
            <p className='pname'>Teslaa</p>
            <p className='pbrand'>Car</p>
            <p className='remove'>Remove</p>
        </div>

        </td>
            <td className='col col2'>
            <div className='pQtyBox'>
                    <button onClick={()=>alert('clicked')}>-</button><p className='pQty'>2</p><button onClick={()=>alert('clicked')}>+</button>
                </div>
            </td>
            <td className='col col3'>

            <div className='price'>
                <p>$120.00</p>
            </div>

            </td>
            <td className='col col4'>

            <div className='totalprice'>
                <p>$120.00</p>
            </div>

            </td>

        </tr>

    </table>


    </div>


    <div className='block2'>
    <div className='shoppinghead'>
        <h1 className='shoppingTag'>Order Summary</h1>
    </div>


    <table className='checkoutTable'>
        <tr className='row1'>
            <td className='col col1'>ITEM 3</td>
            <td className='col col2 colP-right'>$7484.09</td>
        </tr>
        <tr className='row2 summeryPricerow'>
            <td className='col col3'>Starting Subtotal</td>
            <td className='col col4 colP-right'>$7484.09</td>

        </tr>

        <tr className='row2 summeryPricerow'>
            <td className='col col5'>Shipping Fee</td>
            <td className='col col6 colP-right'>$7484.09</td>

        </tr>

        <tr className='row2 summeryPricerow'>
            <td className='col col7'>Estimated Tax</td>
            <td className='col col8 colP-right'>$7484.09</td>

        </tr>

    </table>

<div className='boderTB'>
<div className='checkoutTotalPrice'>

    <span>Order Total</span>
    <span>$718.09</span>
</div>
</div>

<div className='promoBlock'>
    <input type='text' placeholder='Add a promo code'></input>
    <button className='apply' onClick={()=>alert('clicked')}>Apply</button>
    <button className='checkout' onClick={()=>alert('clicked')}>CHECKOUT</button>

</div>
<div className='checkoutpaymentBtn'>
    <img className='' src='assets/img/cart2.png' alt='img'/>
</div>
<div className='imgCard'>
    
</div>


    </div>



</div>

    </>
  )
}
export default Cart;