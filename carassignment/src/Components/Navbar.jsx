import React from 'react'
import Style from '../Styles/navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={Style.box} >

        <Link to="/">Market Place</Link>
        <Link to="/oem">Add car (With OEM Specs)</Link>
        <Link to="/dealerinventory">Your Inventory</Link>
        <Link to="/auth">SignUp/Login</Link>
    </div>
  )
}

export default Navbar