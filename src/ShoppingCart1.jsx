import React, { useState, useEffect } from 'react';
import  './App.css'

const ShoppingCart1 = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart items to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemToRemove) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== itemToRemove.id)
        );
    };

    // Function to update the quantity of an item
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return; // Prevent negative quantity
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)} x 
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <button onClick={() => addToCart({ id: Date.now(), name: 'New Item', price: 15 })}>
                Add Item
            </button>
        </div>
    );
};

export default ShoppingCart1;
