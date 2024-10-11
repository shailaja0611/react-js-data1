import React from 'react';
import { useCart } from '../CartContext';

const Cart3 = () => {
    const { state, dispatch } = useCart();

    const removeItem = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    const calculateTotals = () => {
        const subtotal = state.items.reduce((total, item) => total + item.price, 0);
        const tax = subtotal * 0.1; // 10% tax
        const shipping = subtotal > 50 ? 0 : 5; // Free shipping for orders over $50
        const total = subtotal + tax + shipping;

        return { subtotal, tax, shipping, total };
    };

    const { subtotal, tax, shipping, total } = calculateTotals();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                state.items.map(item => (
                    <div key={item.id}>
                        <span>{item.name} - ${item.price.toFixed(2)}</span>
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </div>
                ))
            )}
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Shipping: ${shipping.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart3;