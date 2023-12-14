/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'
import ReactLoading from 'react-loading';


const Products = () => {
    
    const dispatch = useDispatch()
    const {data: products , status} = useSelector((state)=> state.product);


    // const [products, setProducts] = useState([])

     useEffect(()=>{

      dispatch(fetchProducts())



      //     const fetchProducts = async ()=>{
      //       const res = await fetch('https://fakestoreapi.com/products') 
      //       const data = await res.json()  
      //       console.log(data)
      //       setProducts(data)
      //     }
      //  fetchProducts()
     },[]) 
     
     const handleAdd = (product)=>{
          dispatch(add(product))
     }

     
     if(status === STATUSES.LOADING){
        
        <ReactLoading type={type} color={color} height={667} width={375} />
    
      
     }
     
  


  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
             <div className='card' key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=> handleAdd()} className="btn">Add To Cart</button>
             </div>
            ))
        }
    </div>
  )
}

export default Products;
