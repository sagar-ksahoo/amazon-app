import React from 'react'
import "./Checkout.css"
import checkout_ad from "../images/checkout_ad.jpg"
import Subtotal from './Subtotal'


const Checkout = () => {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img 
                src={checkout_ad} 
                alt="checkout-ad"
                className='checkout_ad' 
            />

            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout