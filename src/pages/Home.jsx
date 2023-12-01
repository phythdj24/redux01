/* eslint-disable no-unused-vars */
import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <h2 className='heading'>Welcome To The Redux ToolKit Store</h2>
            <section>
                <h3>Products</h3>
                  <Products />
            </section>
    </div>
  )
}

export default Home