import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/products/${id}/reviews`);
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/products/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review }),
      });

      if (!response.ok) throw new Error('Failed to submit review');
      const newReview = await response.json();
      setReviews([...reviews, newReview]);
      setReview(''); // Clear the input
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>{r.review}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ProductPage;
