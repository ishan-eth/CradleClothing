import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import blackPlain from '../../Assets/images/black-tshirt.png'
import './ProductPages.css'

export default function RegularTShirt() {
    const [selectedSize, setSelectedSize] = useState('M')
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const product = {
            id: 'regular-tshirt',
            name: 'Regular TShirt',
            price: 29.99,
            size: selectedSize,
            image: blackPlain
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
                    <img src={blackPlain} alt="Regular TShirt" />
                </div>
                
                <div className="product-details">
                    <h1>Regular TShirt</h1>
                    <p className="price">$29.99</p>
                    
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
                            Our classic Regular TShirt is a wardrobe essential. Made from 
                            100% premium cotton, this shirt offers the perfect blend of 
                            comfort and durability. The standard fit suits all body types 
                            and is ideal for everyday wear.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}