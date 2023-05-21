import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const item = useSelector((state) => state.cart)
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <span className="logo">Redux Store</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
            <span className='cartCount'>cart items : {item.length}</span>
        </div>
    </div>
  )
}
