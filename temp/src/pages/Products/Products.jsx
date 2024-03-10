    import React, { useState } from 'react'
    import "./Products.scss"
    import List from '../../components/List/List'
    import { useParams } from 'react-router-dom'
    import useFetch from '../../hooks/useFetch';
    
    const Products = () => {
      const catId = parseInt(useParams().id);
      const [maxPrice, setMaxPrice] = useState(10000);
      const [sort, setSort] = useState(null);
      const [selectedSubCats, setSelectedSubCats] = useState([]);

     
      const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${catId}`
        
      );

      function handleChange(e) {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
          isChecked
            ? [...selectedSubCats, value]
            : selectedSubCats.filter((item) => item !== value)
        );
      }
      return (
        <div className='products'>
          <div className="left">
            <div className="filterItem">
              <h2>Product Categories</h2>
            {data?.map((item)=>( 
            <div className="inputItem" key={item.id}>
                <input type="checkbox" id={item.id}
                value={item.id} onChange={handleChange}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
              ))}

            </div>
            <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type='range' min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
            </div>
           
          </div>
          <div className="right">
          <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
            
              /> 
            <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
          </div>
        </div>
      )
    }
    
    export default Products
    