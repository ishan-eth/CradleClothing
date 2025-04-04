import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import hamburger from "../../Assets/images/hamburger.png"
import logo from "../../Assets/images/nav-logo.png";
import cartIcon from "../../Assets/images/cart-icon.png";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav1">
        <img
          src={hamburger}
          alt="hamburger-menu"
          width="30px"
          height="24px"
          id="hamburger"
        />
      </div>
      <div className="nav2">
        <img src={logo} width="150px" id="logo" alt="logo" />
      </div>
      <div className="nav3">
        <p onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</p>
        <p id="shop" onClick={() => navigate('/shop')} style={{ cursor: 'pointer' }}>Shop</p>
        <div className="cart-icon-container" onClick={() => setIsCartOpen(true)}>
          <img src={cartIcon} alt="cart-icon" width="30px" height="auto"/>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </div>
  );
}