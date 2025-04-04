import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import blackTshirt from '../../Assets/images/blackhalfbranded.png'
import './ProductPages.css'

export default function BlackCompressionShirt() {
    const [selectedSize, setSelectedSize] = useState('M')
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const product = {
            id: 'black-compression-shirt',
            name: 'Black Compression Shirt',
            price: 49.99,
            size: selectedSize,
            image: blackTshirt
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
                    <img src={blackTshirt} alt="Black Compression Shirt" />
                </div>
                
                <div className="product-details">
                    <h1>Black Compression Shirt</h1>
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
                            Our premium Black Compression Shirt is designed for maximum 
                            comfort and performance. Made with high-quality moisture-wicking 
                            fabric, it provides excellent support during workouts while 
                            maintaining a sleek, modern look.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}