import { Link } from 'react-router-dom'
import React from 'react'

import "./Navbar.css"

import icon from "./Logo.png"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <div>
                    <img src={icon} alt="" width="200px" />
                </div>

                <ul className='nav-item-list'>

                    <li>Home</li>
                    <Link to="/laptop"><li>Laptop</li></Link>
                    <Link to="/"><li>Mobile Phones</li></Link>
                    <Link to="/headphones"><li>Headphones</li></Link>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar
