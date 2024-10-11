import React from 'react';
import { useCart } from '../CartContext';

const AddItem = ({ item }) => {
    const { dispatch } = useCart();

    const addItemToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    return (
        <button onClick={addItemToCart}>
            Add {item.name} to Cart
        </button>
    );
};

export default AddItem;