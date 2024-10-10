import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ShippingInfo = () => {
  const { register, handleSubmit, errors } = useForm();
  const [shippingInfo, setShippingInfo] = useState({});

  const onSubmit = async (data) => {
    setShippingInfo(data);
    // Navigate to next step
    window.location.href = '/checkout/payment';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input type="text" {...register('firstName')} />
      {errors.firstName && <p>Error: {errors.firstName.message}</p>}
      {/* Add more fields */}
      <button type="submit">Next</button>
    </form>
  );
};

export default ShippingInfo;
