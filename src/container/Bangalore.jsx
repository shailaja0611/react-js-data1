

import React from 'react';
import { useData } from '../context/ExampleContext';

const Bengaluru = ({ gift }) => {
  const { surprise } = useData();

  return (
    <div>
      <h4>
        I am Bengaluru, 
        <span style={{ color: 'green' }}>{gift} {surprise}</span>
      </h4>
      <button onClick={() => console.log(`Visited Bengaluru!`)}>
        Visit Bengaluru
      </button>
    </div>
  );
};

export default Bengaluru;

