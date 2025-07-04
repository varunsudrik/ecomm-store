import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/json`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    alert(`🛒 Added "${product.name}" to cart!`);
  };

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error">⚠️ {error}</div>;
  if (products.length === 0)
    return <div className="empty">No products found.</div>;

  return (
    <div className="grid">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image || ''} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price.toFixed(2)}</p>
          <button className="add-btn" onClick={() => handleAddToCart(product)}>
            🛒 Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
