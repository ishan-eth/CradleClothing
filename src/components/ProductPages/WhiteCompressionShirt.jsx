import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import whiteTshirt from '../../Assets/images/white-compression.png'
import './ProductPages.css'

export default function WhiteCompressionShirt() {
    const [selectedSize, setSelectedSize] = useState('M')
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const product = {
            id: 'white-compression-shirt',
            name: 'White Compression Shirt',
            price: 49.99,
            size: selectedSize,
            image: whiteTshirt
        }
        addToCart(product)
    }

    return (
        <div className="product-page">
            <button className="back-button" onClick={() => navigate('/')}>
                ← Back to Products
            </button>
            
            <div className="product-content">
                <div className="product-image">
                    <img src={whiteTshirt} alt="White Compression Shirt" />
                </div>
                
                <div className="product-details">
                    <h1>White Compression Shirt</h1>
                    <p className="price">$49.99</p>
                    
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="size-buttons">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    
                    <div className="product-description">
                        <h3>Description</h3>
                        <p>
                            Our White Compression Shirt offers the perfect blend of style and 
                            performance. Made with premium moisture-wicking material, it keeps 
                            you cool and comfortable during intense workouts while maintaining 
                            a clean, professional look.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}