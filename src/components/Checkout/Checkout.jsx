import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Checkout.css'

export default function Checkout() {
    const navigate = useNavigate()
    const { cartItems, cartTotal } = useCart()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle payment processing
        alert('Order placed successfully!')
        navigate('/')
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="continue-shopping">
                    Continue Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            
            <div className="checkout-content">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="checkout-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                                <h4>{item.name}</h4>
                                <p>Size: {item.size}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <h3>Total: ${cartTotal.toFixed(2)}</h3>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="form-section">
                        <h3>Shipping Information</h3>
                        <div className="form-row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                        <div className="form-row">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="ZIP Code"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Payment Information</h3>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            maxLength="16"
                            required
                        />
                        <div className="form-row">
                            <input
                                type="text"
                                name="expiryDate"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                maxLength="5"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                maxLength="3"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="place-order">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}