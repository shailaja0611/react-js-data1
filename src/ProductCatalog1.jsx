import React, { useState } from 'react';
import './App.css'

// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10.00' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$15.00' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$20.00' },
];

const ProductCatalog1 = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-catalog">
      <h1>Product Catalog</h1>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog1;
