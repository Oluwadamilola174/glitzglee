import React from 'react'
import './Navbar.css'
import logo from '../../assets/glitz logoo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt=""/>
        <ul>
            <li>Home</li>
            <li>Package</li>
            <li>Reviews</li>
            <li>About Us</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar