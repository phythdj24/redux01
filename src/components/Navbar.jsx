/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
       <span className='logo'>REDUX STORE</span>  
       <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
      

        <span className='cartCount'>
            Cart Items: 0
        </span>
       </div>

    </div>
  )
}

export default Navbar