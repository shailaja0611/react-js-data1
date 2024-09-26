
// import React from 'react'
// import "./App.css"
// import FormExample from './FormExample'
// const App = () => {
//   return (
//     <div className='contain'>
//       <h1>Welcome to React
//       </h1>
//    <FormExample />
//     </div>
//   )
// }
// export default App

// import React from 'react';
// import Delhi from './container/Delhi';
// import { GiftProvider } from './context/ExampleContext';

// const App = () => {
//   const gift = "Apple";

//   return (
//     <GiftProvider value={{ gift }}>
//       <div>
//         <h1>Sending Gift to Bengaluru</h1>
//         <Delhi />
//       </div>
//     </GiftProvider>
//   );
// };

// export default App;


import React from 'react';
import { GiftProvider } from './context/ExampleContext';
import Mumbai from './Mumbai';
import Bengaluru from './Bengaluru';
import Delhi from './Delhi';
import Kolkata from './Kolkata';

const App = () => {
  const gift = "Apple";

  return (
    <GiftProvider value={{ gift }}>
      <div>
        <h1>Indian Cities</h1>
        <Mumbai gift={gift} />
        <Bengaluru gift={gift} />
        <Delhi />
        <Kolkata gift={gift} />
      </div>
    </GiftProvider>
  );
};

export default App;



