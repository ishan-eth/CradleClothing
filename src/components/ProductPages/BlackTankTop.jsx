import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import blackTankTop from '../../Assets/images/black-tanktop.png'
import './ProductPages.css'

export default function BlackTankTop() {
    const [selectedSize, setSelectedSize] = useState('M')
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const product = {
            id: 'black-tank-top',
            name: 'Black Tank Top',
            price: 34.99,
            size: selectedSize,
            image: blackTankTop
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
                    <img src={blackTankTop} alt="Black Tank Top" />
                </div>
                
                <div className="product-details">
                    <h1>Black Tank Top</h1>
                    <p className="price">$34.99</p>
                    
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
                            Our sleek Black Tank Top is perfect for intense workouts or casual wear. 
                            Crafted from lightweight, breathable material, it offers maximum mobility 
                            and comfort. The modern cut and moisture-wicking fabric make it an 
                            essential addition to your athletic wardrobe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}