// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.png'; // Adjust the path based on where you place your cart image

const Navbar = ({ isVeg, toggleOption }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/customize">Customize</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cart-container">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
        </Link>
        <button onClick={toggleOption} className="toggle-button">
          {isVeg ? 'Switch to Non-Veg' : 'Switch to Veg'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;