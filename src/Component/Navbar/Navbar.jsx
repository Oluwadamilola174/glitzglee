import React from 'react'
import './Navbar.css'
import logo from '../../assets/glitz logoo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Package</li>
            <li>Decoration</li>
            <li>About Us</li>
            <li>Reviews</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar