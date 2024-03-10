
 
  
  import React, { useState } from 'react'
  import "./Product.scss"
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
  
  function Product() {
    const id = useParams().id;
     const[selectImg,setSelectImg] = useState("img")
    const[quantity,setQuantity] = useState(1)
    
    const dispatch = useDispatch()
     
    const { data, loading, error } = useFetch(
      `/products/${id}?populate=*`
    );
   
    return (
      <div className='product'>
      {loading? "loading" : (<><div className="left">
        <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectImg("img")}
              /> 
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
        </div>
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className='price'>₹{data?.attributes?.price}</span>
          <p>
          {data?.attributes?.desc}
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity((prev)=> prev === 1 ? 1 :prev-1)}> - </button>
              {quantity}
            <button onClick={()=>setQuantity((prev)=>prev+1)}> + </button>
          </div>

          <div className="add">
            <button onClick={()=>dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
            }))}>
            <img src={process.env.PUBLIC_URL + '/productIcons/add-cart.png'} alt="" style={{height:"20px",width:"20px"}}/> ADD TO CART
            </button>
          </div>
          <div className="links">
            <div className="item">
            <img src={process.env.PUBLIC_URL + '/productIcons/heart.png'} alt="" style={{height:"20px",width:"20px"}}/> ADD TO WISHLIST
            </div>
            <div className="item">
            <img src={process.env.PUBLIC_URL + '/productIcons/justice-scale.png'} alt="" style={{height:"20px",width:"20px"}}/> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Denim</span>
            <span>Product Type: jacket</span>
            <span>Tag: jacket,Men, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
        
          </div>
        </div></>)}
      </div>
    )
  }
  
  export default Product
  