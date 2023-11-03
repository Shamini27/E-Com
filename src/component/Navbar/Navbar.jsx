import React from 'react';
import './navbar.css'; 
import profIcon from '../../assets/img/user-icon.png'
import Logo from "../../assets/img/logo-white.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div>
            
        </div>
      </div>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
      <div className="profile-icon">
        <img src={profIcon} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
