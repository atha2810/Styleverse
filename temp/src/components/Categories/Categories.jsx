
 
 import React from 'react'
 import "./Categories.scss"
import { Link } from 'react-router-dom'

 
 const Categories = () => {
   return (
    <div className="categories"  id='category'>
    <div className="col">
      <div className="row">
        <img src='https://images.pexels.com/photos/11232184/pexels-photo-11232184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        <button>
            <Link to="/products/1" className='link'>Sale</Link>
        </button>
      </div>
      <div className="row">
      <img src='https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      <button>
            <Link to="/products/1" className='link'>Women</Link>
        </button>
      </div>
    </div>
    <div className="col">
      <div className="row">
      <img src='https://images.pexels.com/photos/15551777/pexels-photo-15551777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      <button>
            <Link to="/products/1" className='link'>New Season</Link>
        </button>
      </div>
    </div>
    <div className="col col-l">
      <div className="row">
        <div className="col">
          <div className="row">
          <img src='https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <button>
            <Link to="/products/2" className='link'>Men</Link>
        </button>
          
          </div>
        </div>
        <div className="col">
          <div className="row">
          <img src='https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=400' alt=''/>
          <button>
            <Link to="/products/4" className='link'>Accesories</Link>
        </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img src="https://images.pexels.com/photos/9660931/pexels-photo-9660931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
      <button>
            <Link to="/products/3" className='link'>Shoes</Link>
        </button>
      </div>
    </div>
  </div>
   )
 }
 
 export default Categories
 