import React from 'react'
import "./Home.css"
import amazon_banner from "../images/amazon-banner.jpg"
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home_container">
            <img 
                src={amazon_banner} 
                alt="amazon-prime-banner" 
                className='home_img'
            />
        </div>

        <div className="home_row">
            {/* 2 - Product components*/}

             <Product 
                title = "The Lean Startup"
                price= {29.99}
                image = "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating = {3}
            />
            
            <Product 
                title = "boat storm smartwatch"
                price = {31.25}
                image = "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_600x.png?v=1625046217"
                rating = {5}
            />
        </div>

        <div className="home_row">
            {/* 3 - Product components*/}
            <Product 
                title = "Samsung Galaxy A73 5G"
                price = {525}
                image = "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_Mint.png"
                rating = {5}
            />

            <Product 
                title = "The Realme Smart 32-inch Full HD LED TV"
                price = {212.5}
                image = "https://static.digit.in/product/ebdbc32b0484e12620157875ea778823adb0e744.jpeg"
                rating = {3}
            />

            <Product 
                title = "Sony PS4 pro"
                price = {150}
                image = "https://m.media-amazon.com/images/I/815RnEL9IFL._SL1500_.jpg"
                rating = {4}
            />

        </div>

        <div className="home_row">
            {/* 1 - Product component*/}
            <Product 
                title = "Samsung 8kg fully automatic washing machine"
                price = {450}
                image = "https://media.croma.com/image/upload/v1615902435/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233541_fgxmdm.png"
                rating = {3}
            />
        </div>

    </div>
  )
}

export default Home