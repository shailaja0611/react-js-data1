import React, { useState } from 'react';
import './App.css'

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');
  const [showPalette, setShowPalette] = useState(false);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handlePaletteToggle = () => {
    setShowPalette(!showPalette);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ width: '100px', height: '150px' }}
      />
      <div style={{ display: showPalette ? 'block' : 'none' }}>
        <div style={{ backgroundColor: '#FF0000', width: '100px', height: '150px' }} />
        <div style={{ backgroundColor: '#00FF00', width: '100px', height: '150px' }} />
        <div style={{ backgroundColor: '#0000FF', width: '100px', height: '150px' }} />
      </div>
      <button onClick={handlePaletteToggle}>Toggle Palette</button>
    </div>
  );
};

export default ColorPicker;



