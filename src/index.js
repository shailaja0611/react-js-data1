
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; // Importing App component

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // You can add your global styles here (optional)
import App from './App';  // Import the main App component

// This is where your React app is mounted to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render the App component inside StrictMode */}
  </React.StrictMode>,
  document.getElementById('root')  
);
