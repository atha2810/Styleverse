
  import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import {useSelector} from "react-redux"

  
  function Navbar() {

    const [open,setOpen] = useState(false);
    const products = useSelector(state=>state.cart.products)
    return (
      <div className='navbar'>
        <div className="wrapper">

{/* -------- left side of Navbar ------ */}
        <div className="left">
        <div className="item">
          <Link className="link" to="/">HomePage</Link>
        </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Shoes</Link>
          </div>
        </div>
{/* -------- Middle of Navbar ------ */}        
        <div className="center">
          <Link className="link" to="/" id='logo'>STYLE-VERSE</Link>
        </div>
{/* -------- right side of Navbar ------ */}        
        <div className="right">
        
        <div className="item">
          <a className="link" href="#about">About</a>
        </div>
        <div className="item">
          <a className="link" href="#contact">Contact</a>
        </div>
        <div className="item">
          <a  className="link" href="#category">Categories</a>
        </div>
{/* -------- Icons ------ */}        
        <div className="icons">
        <img src='/images/magnifying-glass.png' style={{height:'22px',width:'22px'}} alt='/'/>
        <img src='/images/user.png' style={{height:'22px',width:'22px'}} alt='/'/>
        <img src='/images/love.png' style={{height:'22px',width:'22px'}} alt='/'/>
        <div className='cartIcon'  onClick={()=>setOpen(!open)}><img src='/images/shopping-cart.png' style={{height:'22px',width:'22px'}} alt='/'/>
        <span>{products.length}</span>
        </div>
        
        </div>

        </div>
        
        </div>
        {open && <Cart/>}
      </div>
    )
  }
  
  export default Navbar
  