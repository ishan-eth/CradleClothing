import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Mobile.css';

// Import your actual images here
import logo from '../../Assets/images/nav-logo.png';
// If you don't have these icons, replace with ones you do have
import hamburger from '../../Assets/images/hamburger.png';
// Replace these with icons you actually have
import searchIcon from '../../Assets/images/hamburger.png'; // Placeholder, replace with actual search icon
import cartIcon from '../../Assets/images/cart-icon.png';
import instagramIcon from '../../Assets/images/hamburger.png'; // Placeholder, replace with actual Instagram icon

import blackTshirt from "../../Assets/images/blackhalfbranded.png";
import whiteTshirt from "../../Assets/images/white-compression.png";
import greyTshirt from "../../Assets/images/grey-oversized.png";
import blackPlain from "../../Assets/images/black-tshirt.png";
import blackTankTop from "../../Assets/images/black-tanktop.png";

export default function MobileProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { addToCart, setIsCartOpen, cartCount } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [email, setEmail] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Product catalog with full details
  const productsData = {
    'black-compression-shirt': {
      id: 'black-compression-shirt',
      name: 'Kanye west wings t-shirt',
      price: 1590,
      image: blackTshirt,
      description: 'Our premium Black Compression Shirt is designed for maximum comfort and performance. Made with high-quality moisture-wicking fabric.',
      care: 'Machine wash cold, tumble dry low, do not iron print',
      shipping: 'Orders ship within 2-3 business days. Free shipping on orders over Rs. 2,000'
    },
    'black-tank-top': {
      id: 'black-tank-top',
      name: 'OPUM SLEEVE LESS TEE',
      price: 1199,
      image: blackTankTop,
      description: 'Sleek black tank top perfect for intense workouts or casual wear.',
      care: 'Machine wash cold, tumble dry low',
      shipping: 'Orders ship within 2-3 business days. Free shipping on orders over Rs. 2,000'
    },
    'wings-grey-signature': {
      id: 'wings-grey-signature',
      name: 'Wings Grey Signature Tshirt',
      price: 1290,
      originalPrice: 1600,
      image: greyTshirt,
      description: 'Signature grey t-shirt with embroidered wings logo.',
      care: 'Machine wash cold, tumble dry low, do not iron print',
      shipping: 'Orders ship within 2-3 business days. Free shipping on orders over Rs. 2,000'
    },
    'acid-wash-tee': {
      id: 'acid-wash-tee',
      name: 'Acid wash tee',
      price: 1490,
      image: whiteTshirt,
      description: 'Trendy acid wash t-shirt with unique pattern and premium feel.',
      care: 'Hand wash cold, hang dry, do not iron print',
      shipping: 'Orders ship within 2-3 business days. Free shipping on orders over Rs. 2,000'
    },
    'black-teeth-tshirt': {
      id: 'black-teeth-tshirt',
      name: 'Black teeth tshirt',
      price: 1499,
      image: blackPlain,
      description: 'Bold graphic teeth design on premium black cotton.',
      care: 'Machine wash cold, tumble dry low, do not bleach',
      shipping: 'Orders ship within 2-3 business days. Free shipping on orders over Rs. 2,000'
    }
  };

  // Get current product
  const product = productsData[productId] || productsData['black-compression-shirt'];

  // Related products
  const relatedProducts = Object.values(productsData)
    .filter(p => p.id !== productId)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });
    // No alert here either
    navigate('/checkout');
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
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
          <div className="cart-icon-container" onClick={() => setIsCartOpen(true)}>
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>

      {/* Back to Products */}
      <div style={{ padding: '15px' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '5px',
            cursor: 'pointer',
            padding: 0
          }}
        >
          ← Back to Products
        </button>
      </div>

      {/* Product Detail */}
      <div className="product-detail">
        {/* Product Slider */}
        <div className="product-slider">
          <img src={product.image} alt={product.name} className="slider-image" />
          <div className="slider-nav">
            <div className="slider-dot active"></div>
            <div className="slider-dot"></div>
            <div className="slider-dot"></div>
            <div className="slider-dot"></div>
            <div className="slider-dot"></div>
          </div>
        </div>

        {/* Product Info */}
        <h1 className="product-title">{product.name}</h1>
        <p className="product-detail-price">
          {product.originalPrice ? (
            <>
              <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
                Rs. {product.originalPrice.toFixed(2)}
              </span>
              Rs. {product.price.toFixed(2)}
            </>
          ) : (
            `Rs. ${product.price.toFixed(2)}`
          )}
        </p>
        <p className="shipping-info">Shipping calculated at checkout.</p>

        {/* Size Selector */}
        <div className="size-selector">
          <h3>Size</h3>
          <div className="size-options">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <div 
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy it now
        </button>

        {/* Accordions */}
        <div className="product-accordion">
          <div className="accordion-item">
            <button 
              className="accordion-button"
              onClick={() => toggleAccordion('size')}
            >
              Size Chart
              <span>{activeAccordion === 'size' ? '−' : '+'}</span>
            </button>
            {activeAccordion === 'size' && (
              <div className="accordion-content">
                <p>S: Chest 36", Length 27"</p>
                <p>M: Chest 38", Length 28"</p>
                <p>L: Chest 40", Length 29"</p>
                <p>XL: Chest 42", Length 30"</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className="accordion-button"
              onClick={() => toggleAccordion('details')}
            >
              Details
              <span>{activeAccordion === 'details' ? '−' : '+'}</span>
            </button>
            {activeAccordion === 'details' && (
              <div className="accordion-content">
                <p>{product.description}</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className="accordion-button"
              onClick={() => toggleAccordion('care')}
            >
              Care Instructions
              <span>{activeAccordion === 'care' ? '−' : '+'}</span>
            </button>
            {activeAccordion === 'care' && (
              <div className="accordion-content">
                <p>{product.care}</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button 
              className="accordion-button"
              onClick={() => toggleAccordion('shipping')}
            >
              Shipping
              <span>{activeAccordion === 'shipping' ? '−' : '+'}</span>
            </button>
            {activeAccordion === 'shipping' && (
              <div className="accordion-content">
                <p>{product.shipping}</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h3>People Also Buy</h3>
          <div className="related-items">
          {relatedProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-item"
                onClick={() => handleProductClick(product.id)}
              >
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
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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