import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleToggle}>
      <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
        {isOn ? 'On' : 'Off'}
      </span>
      <div 
        style={{
          width: '60px',
          height: '30px',
          borderRadius: '15px',
          background: isOn ? '#4CAF50' : '#ccc',
          position: 'relative',
          transition: 'background 0.3s ease',
          boxShadow: isOn ? '0 0 5px rgba(0, 128, 0, 0.5)' : '0 0 5px rgba(128, 128, 128, 0.5)',
        }}
      >
        <div 
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'white',
            position: 'absolute',
            top: '2px',
            left: isOn ? '32px' : '2px',
            transition: 'left 0.3s ease',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
