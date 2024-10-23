import React from 'react';

function Child() {
  // Simulate a delay in loading
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    delay(2000).then(() => {
      setData('This is the child component content!');
    });
  }, []);

  return (
    <div>
      <h2>Child Component</h2>
      {data ? <p>{data}</p> : <p>Loading data...</p>}
    </div>
  );
}

export default Child;
