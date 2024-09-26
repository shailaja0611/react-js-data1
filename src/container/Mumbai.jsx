



import React from 'react';
import Kolkata from './Kolkata';
import { useData } from './context/ExampleContext';

const Mumbai = ({ gift }) => {
  const { surprise } = useData();

  return (
    <div>
      <h2>My name is {gift} {surprise}</h2>
      <Kolkata gift={gift} />
    </div>
  );
};

export default Mumbai;

