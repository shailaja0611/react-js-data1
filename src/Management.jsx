import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Management = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newOrder, setNewOrder] = useState({ item: '', quantity: 0 });

    // Fetch order history on component mount
    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.get('/api/orders/history');
                setOrderHistory(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchOrderHistory();
    }, []);

    // Create a new order
    const createOrder = async () => {
        try {
            const response = await axios.post('/api/orders', newOrder);
            setOrderHistory([...orderHistory, response.data]);
            setNewOrder({ item: '', quantity: 0 }); // Reset form
        } catch (err) {
            setError(err);
        }
    };

    // Update order status
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`/api/orders/${orderId}`, { status: newStatus });
            setOrderHistory(orderHistory.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
        } catch (err) {
            setError(err);
        }
    };

    // Delete an order
    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`/api/orders/${orderId}`);
            setOrderHistory(orderHistory.filter(order => order.id !== orderId));
        } catch (err) {
            setError(err);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Order Management</h1>

            <h2>Create New Order</h2>
            <input
                type="text"
                placeholder="Item"
                value={newOrder.item}
                onChange={(e) => setNewOrder({ ...newOrder, item: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={newOrder.quantity}
                onChange={(e) => setNewOrder({ ...newOrder, quantity: Number(e.target.value) })}
            />
            <button onClick={createOrder}>Add Order</button>

            <h2>Order History</h2>
            <ul>
                {orderHistory.map(order => (
                    <li key={order.id}>
                        {order.item} (Quantity: {order.quantity}) - Status: {order.status}
                        <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Ship</button>
                        <button onClick={() => deleteOrder(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Management;
