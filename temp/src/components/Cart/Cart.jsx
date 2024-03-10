

 import React from 'react'
 import "./Cart.scss"
 import {useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
 
 const Cart = () => {

const products = useSelector(state=>state.cart.products)
const dispatch = useDispatch()

const totalPrice = () =>{
  let total = 0;
    products.forEach((item) => 
    (total+=item.quantity*item.price));
    return total.toFixed(2);
}
const stripePromise = loadStripe('pk_test_51N12KlSGEwvH80mnqE50kL8U8ZK9XN56k0Gg3w3GsRQ6pBDlgZzmR7p2r8tVecKb54UIGwQ07mlKpr4HEobR5Q4w00QRcG1q3g');
const handlePayments = async()=>{
  try {
    const stripe = await stripePromise;
    const res = await makeRequest.post("/orders",{
      products,
    });

    await stripe.redirectToCheckout({
      sessionId:res.data.stripeSession.id,
    })

  } catch (err) {
    console.log(err)
  }
}
   return (
     <div className='cart'>
       <h1>Products in your cart</h1>
       {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                    {item.quantity} x ₹{item.price}
                </div>
            </div>
            <img className='delete' onClick={()=>dispatch(removeItem(item.id))} src={process.env.PUBLIC_URL + '/cartIcon/delete.png'} alt="" style={{height:"30px",width:"30px"}}/>
        </div>
       ))}

       <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
       </div>
       <button onClick={handlePayments}>PROCEED TO CHECKOUT</button>
       <span className="reset" onClick={()=>dispatch(resetCart())}>
        Reset Cart
       </span>
     </div>
   )
 }
 
 export default Cart
 