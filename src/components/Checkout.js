import React from 'react'
import "./Checkout.css"
import checkout_ad from "../images/checkout_ad.jpg"
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'


const Checkout = () => {

  const [{basket}, dispatch] = useStateValue();

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

                    {/* Checkout Products */}

                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))
                    }

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