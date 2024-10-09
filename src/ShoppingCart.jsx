// import React, { useState } from 'react';
// import './App.css'

// const ShoppingCart = () => {
//   // Cart state, an array of items (objects with id, name, price, and quantity)
//   const [cart, setCart] = useState([]);

//   // Example product
//   const product = { id: 1, name: "Product A", price: 10 };

//   // Add item to cart
//   const addToCart = (product) => {
//     const itemInCart = cart.find((item) => item.id === product.id);

//     if (itemInCart) {
//       // Update quantity if item is already in cart
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       // Add new item to cart
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   // Update item quantity in cart
//   const updateQuantity = (productId, newQuantity) => {
//     setCart(
//       cart.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price} x {item.quantity}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//             <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${totalPrice}</h3>
//       <button onClick={() => addToCart(product)}>Add Product A to Cart</button>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useState, useEffect } from 'react';
import './App.css'

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    }, [cartItems]);

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

    const removeFromCart = (itemToRemove) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== itemToRemove.id)
        );
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return; // Prevent negative quantity
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.1; // 10%
    const discount = 5; // Flat discount
    const shipping = 10; // Flat shipping fee
    const total = subtotal + subtotal * taxRate - discount + shipping;

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name} - ${item.price.toFixed(2)} x</span>
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
            <h3 className="subtotal">Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3 className="total">Total: ${total.toFixed(2)}</h3>
            <button onClick={() => addToCart({ id: Date.now(), name: 'New Item', price: 15 })}>
                Add Item
            </button>
        </div>
    );
};

export default ShoppingCart;
