


 import React from 'react'
 import './Footer.scss'
 
 function Footer() {
   return (
     <div className='footer'>
{/* -------- Upper Part of Footer ------ */}
      <div className='top'>
{/* -------- Categories ------ */}          
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
{/* -------- Links ------ */}          
        <div className="item">
       <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
{/* -------- About ------ */}          
        <div className="item" id='about'>
          <h1>About</h1>
          <span>
          Welcome to Style-Verse, your one-stop-shop for the latest fashion trends. We offer a variety of high-quality clothing, shoes, and accessories for men and women at affordable prices. Elevate your style game and browse our collection today!
          </span>
        </div>
{/* -------- contact ------ */}          
        <div className="item" id='contact'>
          <h1>Contact</h1>
          <span>
            Phone no: 8855976533<br/>
            Email id: atharva19510@gmail.com
            </span>
        </div>
      </div>
{/* -------- Bottom part of Footer ------ */}      
      <div className='bottom'>
        <div className="left">
          <span className="logo">STYLE-VERSE</span>
          <span className="copyright">© Copyright 2023 , All rights reserved | made by Atharva Lakhamade <img src='/images/love.png' alt='/' style={{height:'13px',width:'13px',color:'red'}}/></span>
        </div>
        <div className="right">
          <img src='/images/payment.png' alt='/'/>
        </div>
      </div>
    
     </div>
   )
 }
 
 export default Footer
 