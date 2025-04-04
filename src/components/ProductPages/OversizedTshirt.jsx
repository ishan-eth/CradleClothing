import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import greyTshirt from '../../Assets/images/grey-oversized.png'
import './ProductPages.css'

export default function OversizedTShirt() {
    const [selectedSize, setSelectedSize] = useState('M')
    const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const product = {
            id: 'oversized-tshirt',
            name: 'Oversized TShirt',
            price: 39.99,
            size: selectedSize,
            image: greyTshirt
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
                    <img src={greyTshirt} alt="Oversized TShirt" />
                </div>
                
                <div className="product-details">
                    <h1>Oversized TShirt</h1>
                    <p className="price">$39.99</p>
                    
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
                            Embrace comfort and style with our Oversized TShirt. This relaxed-fit 
                            design features premium cotton material and a contemporary cut that's 
                            perfect for casual wear. The oversized silhouette provides maximum 
                            comfort while maintaining a fashionable edge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}