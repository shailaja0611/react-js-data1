

import React, { useState } from "react";

const Circuit = () => {
  const [isGameActive, setIsGameActive] = useState(true);

  const toggleGame = () => {
    setIsGameActive(!isGameActive);
  };

  return (
    <div>
      {isGameActive && <div>I like chicken</div>}
      <button onClick={toggleGame}>Toggle Game</button>
    </div>
  );
};