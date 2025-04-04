import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(
                item => item.id === product.id && item.size === product.size
            );

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId, size) => {
        setCartItems(prevItems => 
            prevItems.filter(item => !(item.id === productId && item.size === size))
        );
    };

    const updateQuantity = (productId, size, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId, size);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.size === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartCount,
            cartTotal,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}