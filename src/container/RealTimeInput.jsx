import React, { useState } from 'react';

const RealTimeInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-Time Input Display</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <h2>Output: {inputValue}</h2>
    </div>
  );
};

export default RealTimeInput;
