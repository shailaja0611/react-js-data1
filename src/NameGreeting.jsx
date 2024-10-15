import React, { useState } from 'react';

const NameGreeting = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Welcome!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>{name && `Hello, ${name}!`}</h2>
    </div>
  );
};

export default NameGreeting;
