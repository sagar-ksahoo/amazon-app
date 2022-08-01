import React from 'react'
import "./Header.css"
import header_logo from "../images/header-logo.png"

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


const Header = () => {

  const [{basket}, dispatch] = useStateValue();

  
  return (
    <div className='header'>

      <Link to="/" >
          <img 
            src={header_logo} 
            alt="header-logo" 
            className="header_logo" 
          />
      </Link>

        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">

        <Link to='/login'> 
          <div className="header_option">
            <span className="header_line1">Hello User</span>
            <span className="header_line2">Sign In</span>
          </div>
        </Link>

          <div className="header_option">
            <span className="header_line1">Returns</span>
            <span className="header_line2">& Orders</span>
          </div>

          <div className="header_option">
            <span className="header_line1">Your</span>
            <span className="header_line2">Prime</span>
          </div>


        <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_line2 header_basketCount">{basket?.length}</span>
            </div>
        </Link>
          

        </div>

    </div>
  )
}

export default Header