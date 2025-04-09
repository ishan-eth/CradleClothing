import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Mobile.css';

// Import your actual images here
import logo from '../../Assets/images/nav-logo.png';
// If you don't have these icons, replace with ones you do have
import blackTshirt from "../../Assets/images/blackhalfbranded.png";
import whiteTshirt from "../../Assets/images/white-compression.png";
import greyTshirt from "../../Assets/images/grey-oversized.png";
import blackPlain from "../../Assets/images/black-tshirt.png";
import blackTankTop from "../../Assets/images/black-tanktop.png";
import featuredImage from "../../Assets/images/background-hero.jpg";

// For any missing icons, use existing icons you already have in your project
import hamburger from '../../Assets/images/hamburger.png';
// Replace these with icons you actually have
import searchIcon from '../../Assets/images/hamburger.png'; // Placeholder, replace with actual search icon
import cartIcon from '../../Assets/images/cart-icon.png';
import instagramIcon from '../../Assets/images/hamburger.png'; // Placeholder, replace with actual Instagram icon

export default function MobileHome() {
  const navigate = useNavigate();
  const { setIsCartOpen, cartCount } = useCart();
  const [email, setEmail] = useState('');

  const products = [
    {
      id: 'black-compression-shirt',
      name: 'Kanye west wings t-shirt',
      price: 1590,
      image: blackTshirt,
      status: ''
    },
    {
      id: 'black-tank-top',
      name: 'OPUM SLEEVE LESS TEE',
      price: 1199,
      image: blackTankTop,
      status: ''
    },
    {
      id: 'black-compression-half',
      name: 'wings boxy shirt',
      price: 1490,
      image: blackTshirt,
      status: ''
    },
    {
      id: 'wings-grey-signature',
      name: 'Wings Grey Signature Tshirt',
      price: 1290,
      originalPrice: 1600,
      image: greyTshirt,
      status: 'sale'
    },
    {
      id: 'acid-wash-tee',
      name: 'Acid wash tee',
      price: 1490,
      image: whiteTshirt,
      status: ''
    },
    {
      id: 'black-teeth-tshirt',
      name: 'Black teeth tshirt',
      price: 1499,
      image: blackPlain,
      status: ''
    },
    {
      id: 'black-y2k-tshirt',
      name: 'Black y2k tshirt',
      price: 1499,
      image: blackTshirt,
      status: 'sold-out'
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="mobile-container">
      {/* Top Shipping Banner */}
      <div className="shipping-banner">
        Prepaid Orders Get Shipped Faster!
      </div>
      
      {/* Navbar */}
      <div className="mobile-navbar">
        <img src={hamburger} alt="Menu" className="menu-icon" />
        <img src={logo} alt="CRADLE" className="logo" />
        <div className="nav-icons">
          <img src={searchIcon} alt="Search" className="search-icon" />
        <div 
        className="cart-icon-container" 
        onClick={() => {
            console.log("Opening cart...");
            setIsCartOpen(true);
        }}
        style={{ cursor: 'pointer' }}
        >
        <img src={cartIcon} alt="Cart" className="cart-icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        </div>
      </div>

      {/* Shop All Banner */}
      <div className="shop-all-banner">
        <h2>Shop All</h2>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ 
                backgroundColor: 'black',
                objectFit: 'contain'
              }} 
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                {product.originalPrice ? (
                  <>
                    <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>
                      Rs. {product.originalPrice.toFixed(2)}
                    </span>
                    Rs. {product.price.toFixed(2)}
                  </>
                ) : (
                  `Rs. ${product.price.toFixed(2)}`
                )}
                {product.status === 'sale' && <span className="sale-tag">Sale</span>}
                {product.status === 'sold-out' && <span className="sold-out-tag">Sold out</span>}
              </p>
            </div>
          </div>
        ))}
    </div>
      {/* Featured Section */}
      <div
        className="featured-section" 
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <div className="featured-section-content">
          <h2>Exclusive Updates!</h2>
          <p>Follow us on instagram and get the latest updates and discounts!</p>
          <a href="#" className="featured-button">
            Instagram
          </a>
        </div>
      </div>

      {/* Brand Info */}
      <div className="brand-info">
        <h2>WE ARE CRADLE</h2>
        <p>
          Our commitment is to provide unparalleled quality because you deserve nothing but the finest.
          Join us on this journey where your style meets our passion, allowing you to keep flexing with the
          classiest products and services around.
        </p>
        <a href="#" className="shop-all-button" onClick={() => navigate('/shop')}>
          Discover your next favorite!
        </a>
      </div>

      {/* Email Subscription */}
      <div className="email-subscription">
        <h3>Subscribe to our emails</h3>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="submit-button">→</button>
        </form>
      </div>

      {/* Footer */}
      <div className="mobile-footer">
        <div className="social-icons">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </div>
        <div className="footer-links">
          <a href="#">Refund policy</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Shipping policy</a>
          <a href="#">Contact information</a>
        </div>
        <p className="copyright">© 2025, CRADLE</p>
      </div>
    </div>
  );
}