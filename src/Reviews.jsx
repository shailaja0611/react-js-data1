// src/Reviews.js
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import './App.css'


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview && rating) {
      setReviews([...reviews, { text: newReview, rating }]);
      setNewReview("");
      setRating(0);
    }
  };

  return (
    <div>
      <h2>User Reviews</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here"
        />
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starDimension="30px"
          starSpacing="5px"
          changeRating={setRating}
          numberOfStars={5}
        />
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>Rating: {review.rating} ⭐</strong>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
