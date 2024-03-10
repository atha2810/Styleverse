

 import React from 'react'
 import "./Contact.scss"
 
 const Contact = () => {
   return (
     <div className='contact'>
       <div className="wrapper">
        <span>BE IN TOUCH WITH US : </span>
        <div className="mail">
            <input type='email' placeholder='Enter your Email'></input>
            <button>Join Us</button>
        </div>
        <div className="icons">
        <img src={process.env.PUBLIC_URL + '/socials/facebook.png'} alt="" style={{height:'35px',width:'35px'}}/>
        <img src={process.env.PUBLIC_URL + '/socials/instagram.png'} alt="" style={{height:'35px',width:'35px'}}/>
        <a href='https://www.linkedin.com/in/atharva-lakhamade-80b626219/' target="_blank">
        <img src={process.env.PUBLIC_URL + '/socials/linkedin.png'} alt="" style={{height:'35px',width:'35px'}}/></a>
        <img src={process.env.PUBLIC_URL + '/socials/twitter.png'} alt="" style={{height:'35px',width:'35px'}}/>
        </div>
       </div>
     </div>
   )
 }
 
 export default Contact
 