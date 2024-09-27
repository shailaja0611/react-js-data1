

// import React from "react";

// const Home= () => {
//     return (
//         <div>
      
//       <h2>Home</h2>
//         </div>
//     )
// }
//  export default Home

import React from "react";
import {useHistory}from 'react-router-dom';

const Home= () => {
  let history = useHistory();
    return (
        <div>
      
       <h4> welcome to home page</h4>
      < button onClick={() =>history.push()}>Login</button>
    
        </div>
    );
};
 export default Home