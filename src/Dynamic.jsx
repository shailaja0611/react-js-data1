import React, { useState, useEffect } from 'react';


const Dynamic = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  useEffect(() => {
    const changeBgColor = () => {
      const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33EC'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    };

    const intervalId = setInterval(changeBgColor, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>“In any moment of decision, the best thing you can do is the right thing. The next best thing is the wrong thing. The worst thing you can do is nothing.”</h1>
    </div>
  );
};

export default Dynamic;