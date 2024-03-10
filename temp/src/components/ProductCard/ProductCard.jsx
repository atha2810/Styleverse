
 import React from 'react'
 import "./ProductCard.scss"
 import {Link} from "react-router-dom";

 
 const ProductCard = ({item}) => {
   return (
         <Link className='link' to={`/product/${item.id}`}>
       <div className='productCard'>
        <div className="image">
          {item?.attributes.isNew && <span>New Product</span>}
       <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt='' className='mainImage'/>
       <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} alt='' className='secondImage'/>
       </div>
       <h2>{item?.attributes.title}</h2>
       <div className="prices">
        <h3>₹{item.oldPrice || item?.attributes.price + 150}</h3>
        <h3>₹{item?.attributes.price}</h3>
       </div> 

     </div>
     </Link>
   )
 }
 
 export default ProductCard
 