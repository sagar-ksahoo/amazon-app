import React from 'react'
import "./CheckoutProduct.css"

const CheckoutProduct = ({id,image,title,price,rating}) => {
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="checkout-img" className="checkoutProduct_img" />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>

            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>🌟</p>
                    ))
                }
            </div>

            <button>Remove from Basket</button>

        </div>

    </div>
  )
}

export default CheckoutProduct