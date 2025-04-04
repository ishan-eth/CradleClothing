import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export default function Cart() {
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        cartTotal, 
        isCartOpen, 
        setIsCartOpen 
    } = useCart();
    
    const navigate = useNavigate();

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
            <div className="cart-sidebar">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button 
                        className="close-cart"
                        onClick={() => setIsCartOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.id}-${item.size}`} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Size: {item.size}</p>
                                    <p>${item.price}</p>
                                    <div className="quantity-controls">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    className="remove-item"
                                    onClick={() => removeFromCart(item.id, item.size)}
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button 
                            className="checkout-button"
                            onClick={() => {
                                setIsCartOpen(false);
                                navigate('/checkout');
                            }}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}