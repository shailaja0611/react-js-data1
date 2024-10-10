import React, { useState } from 'react';
import './PaymentForm.css'

const PaymentForm = ({ total, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle payment processing (e.g., API call)
    console.log('Payment processed:', { cardNumber, expiryDate, cvv });
    onPaymentSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment</h2>
      <div>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Expiry Date:
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>
      </div>
      <h3>Total: ${total}</h3>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
