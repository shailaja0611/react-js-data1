

// import './FormExample.css';
// import './TicTacToe.css';
// import TicTacToe from './TicTacToe';


// function App() {
//   return (
//     <div className="App">
   
//     <TicTacToe />

//     </div>
//   );
// }

// export default App;

// import React,{useState} from 'react'
// import TodoList from './Todolist';
// import './Todolist.css';
// const App = () => {
//   const [task,setTask] = useState("");
//   const [todos,setTodos] = useState([]);
//   const changeHandler = e =>{
//     setTask(e.target.value)
//   }
//   const submitHandler = e =>{
//     e.preventDefault();
//     const newTodos = [...todos,task];
//     setTodos(newTodos);
//     setTask("");
//   }
//   const deleteHandler = (indexValue) =>{
//     const newTodos = todos.filter((todo,index) => index !== indexValue);
//     setTodos(newTodos);
//   }
//   return (
//     <div>
//       <center>
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Todo Management Application</h5>
//             <form onSubmit={submitHandler}>
//               <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
//               <input type="submit" value="Add" name="Add"/>
//             </form>
//             <TodoList todolist={todos} deleteHandler={deleteHandler}/>
//           </div>
//         </div>
//       </center>
//     </div>
//   )
// }
// export default App;

// import React from 'react';


// import LoginForm from './Loginform';
// import './Loginform.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Login Form</h1>
//         <LoginForm />
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   const arr = [ "React js","Node js","Express js","Angular js"]

//   return (
//     <div>

//       {
//         arr.map(
//           (value) => <i key={value.id}>{value.title}</i>
//         )
//       }
//     </div>
//   )
// }


// import React from "react";


// function App() {
//   const arr = [
//     { 
//       id: 1, 
//       title: "React js" 
//     },
//     { id: 2,
//        title: "Node js"
//        },
//     { id: 3,
//        title: "Express js"
//        },
//     { id: 4, 
//       title: "Angular js" 
//     },
//   ];

//   return (
//     <div>
//       {arr.map((value) => (
//         <i key={(value.id)}>{value.title}</i>
//       ))}
//     </div>
//   );
// }
 
// export default App;


// import React from "react";
// import Header from "./Header";
// import Home from "./Home";
// import Footer from "./Footer";

// function App () {
//   return (
//     <div>
//       <Home />
//       <Header />
//       <Footer />

//     </div>
//   );
// };
// export default App;

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('(link unavailable)')
//       .then(response => response.json())
//       .then(json => setUsers(json));
//   }, []);

//   return (
//     <div>
//       <h2>React is a popular JavaScript library for building user interfaces and can be used for developing complex, interactive web and mobile applications.
//       </h2>
//       {users.map((user) => (
//         <div key={('https://jsonplaceholder.typicode.com/users')}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('(link unavailable)')
//       .then(response => response.json())
//       .then(json => setUsers(json));
//   }, []);

//   return (
//     <div>
//       <h2>React is a popular JavaScript library for building user interfaces and can be used for developing complex, interactive web and mobile applications.
//       </h2>
//       {users.map((user) => (
//         <div key={('https://jsonplaceholder.typicode.com/users')}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
 
// import React from "react";
// import Navbar from "./Navbar";


// const App = () => {
//   return (
//     <div>
      
//         <Navbar />
//         <center>
//         <h2>welcome to the home page</h2>
//         <button>submit</button>
//         </center>

      
//     </div>
//   );
// };

// export default App;
  

// import React from "react";
// import ReactLogo from  './5img.jpg';

// const App= () => {
//     return (
//         <div>
//       <center>
//         <img src={ReactLogo} height="250" width="auto"/>
//         <h2>Nature's beauty inspires us, calms us, and reminds us of the world's incredible diversity
//         1. Creativity: Nature's vibrant colors, patterns, and shapes spark artistic expression.
//            2. Imagination: Landscapes, textures, and sounds evoke stories and ideas.
//           3. Innovation: Biomimicry and nature-inspired solutions drive technological advancements.
//        </h2>
//       </center>

//         </div>
//     )
// }
//  export default App;
  
// import React from "react";
// import AudioFile from './hero-mass-entry'

// const App= () => {
//   return (
//     <div>
//       <center>
//         <audio controls>
//           <source src={AudioFile} type="audio/ogg" />
//         </audio>
//       </center>
//     </div>
//   );
// };
// export default App;


  
// import React from "react";
// import VideoFile from './video.mp4';

// const App= () => {
//   return (
//     <div>
//       <center>
//        <video width="" height="" controls>
//         <source src ={VideoFile} type="video/mp4" />
//        </video>
//       </center>
//     </div>
//   );
// };
// export default App;



//  import React,{useState} from "react"; 
 




//  const App = () => {
//   const [search,setsearch]= useState('');
//    return (
//     <div>
//     <center>
//      <h4>Enter your city </h4>   
//    <input type="text " />
//     {/* //  value={search}
//     //  onChange={(e) => setsearch(e.target.value)}/>      
//     //  <br />
//     //  {Data.map(city =><li>{city.name}</li>)} */}
    
//     </center>

//        </div>
//      )
//  }
//   export default App;


// import React from "react";
// import Hoc from "./Hoc";

// const App= () => {
//     return (
//         <div>
//       <h2>welcome user!!</h2>

//         </div>
//     )
// }
//  export default Hoc (App)
// import React from "react";
// import Rediobutton from './Rediobutton'
 
// const App = () => {
//     return(
//         <Rediobutton />
//     )
// }
// export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home1 from './components/Home1';
// import Analytics from './components/Analytics';
// import ManageUrls from './components/ManageUrls';
// import UserProfile from './components/UserProfile';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/analytics" component={Analytics} />
//           <Route path="/manage" component={ManageUrls} />
//           <Route path="/profile" component={UserProfile} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


//  import React from "react";
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//  import Home1 from "./container/Home1";
//  import Analytics from "./container/Analytics";
//  import ManageUrls from "./container/ManageUrls";
// import UserProfile from "./container/UserProfile";
   
//  const App = () => {
//     return (
//         <Router>
//             <div>
//                 <Switch>
//                     <Route path="/"exact container={Home1} />
//                     <Route path="/anlaytics" container={Analytics} />
//                     <Route path="/manage" container={ManageUrls} />
//                     <Route path="/profile" container={UserProfile} />
//                 </Switch>
//             </div>
//         </Router>
//     )
//  }
//  export default App;

// import React from 'react';
// import Counter from './counter';


// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App
// import React from 'react';
// import RealTimeInput from './RealTimeInput';

// const App = () => {
//   return (
//     <div>
//       <RealTimeInput />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import ToggleSwitch from './ToggleSwitch';

// const App = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Toggle Switch Example</h1>
//       <ToggleSwitch />
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import DataFetchComponent from './DataFetchComponent';

// const App = () => {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>API Data Fetch Example</h1>
//       <DataFetchComponent />
//     </div>
//   );
// };

// export default App;

// import React from 'react';

// import Calculator from './Calculator';

// const App = () => {
// return (
//   <div >
//     <center>  Calculator </center>
    
//     <center/>
//   <Calculator />
//   </div>
// );
// };

// export default App;

// import React from 'react';
// import Listcomponent from './Listcomponent ';



// const App = () => {
// return (
//   <div >
//    <Listcomponent /> 
// </div>
// );
// };

// export default App;

// import React from 'react';
// import Timer from './Timer';

// function App() {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// }

// export default App;

//  import React from "react";
//  import Dynamic from "./Dynamic"; 

//  function App() {
//   return (
//     <div>
//      <Dynamic />
//    </div>
//    );
//  }

//  export default App;


// import React from "react";
// import Routing from "./Routing";

// function App() {
//   return (
//     <div>
//       <Routing />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import QuoteGenerator from "./QuoteGenerator";


// function App() {
//   return (
//     <div>
//       <QuoteGenerator />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import FileUploader from "./FileUploader";


// function App() {
//  return (
//    <div>
//     <FileUploader />
//   </div>
//   );
// }

// export default App;


// import React from "react";
// import Authentication from './Authentication'

// function App() {
//  return (
//    <div>
//      <Authentication />
//   </div>
//  );
// }


// export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Contact from "./Contact";
// import Navbar from "./Navbar"
// import Course from "./Course";
// import About from "./About";
// import './App.css'


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//           <Route path="/course" element={<Course />}></Route>
//           <Route path="/about" element={<About />}></Route>
          
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import DragDropList from './DragDropList';

// const App = () => {
//     return (
//         <div>
//             <h1>Drag and Drop Example</h1>
//             <DragDropList />
//         </div>
//     );
// };

// export default App;

// src/App.js
// import React from 'react';
// import ImageCarousel from './ImageCarousel';

// const App = () => {
//     return (
//         <div>
            
//             <h1>Image Carousel</h1>
//             <ImageCarousel />
            
//         </div>
//     );
// };

// export default App;


// src/App.js

// import React from 'react';
// import MultiStepForm from './MultiStepForm';

// const App = () => {
//     return (
//         <div>
//             <MultiStepForm />
//         </div>
//     );
// };

// export default App;

// src/App.js
// import React from 'react';
// import Pagination from './Pagination';


// const App = () => {
//     return (
//         <div>
//             <Pagination />
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import ColorPicker from './ColorPicker';

// const App = () => {
//   return (
//     <div>
//         <h1>ColorPicker</h1>
//       <ColorPicker />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav>
//         <div className="logo">MyApp</div>
//         <div className="hamburger" onClick={toggleMenu}>
//           &#9776;
//         </div>
//         <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default App;


// import React from "react";

// function App() {
//   return (
//     <div>
//     <h1>Home</h1>
//     </div>
//   )
// }
// export default App

// import React from 'react';
// import ShoppingCart from './ShoppingCart';

// const App = () => {
//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h1>Dynamic Price Calculation</h1>
//       <ShoppingCart />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import './App.css'; 
// import ShoppingCart1 from './ShoppingCart1';
// import CheckoutForm from './CheckoutForm';

//  const App = () => {
//     return (
//         <div className="app-container">
//             <header className="app-header">
//                 <h1>Local Storage Persistence</h1>
//             </header>
//             <main>
//                 <ShoppingCart1 />
//                 <CheckoutForm />
//             </main>
//             <footer className="app-footer">
//                 <p>&copy; 2024 My Shop</p>
//             </footer>
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import Cart from './Cart';

// const App = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20%' }}>
//       <h1>My Shop</h1>
//       <Cart />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import OrderSummary from './OrderSummary';
// import PaymentForm from './PaymentForm';

// const App = () => {
//   const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  
//   const items = [
//     { name: 'Product 1', price: 29.99, quantity: 2 },
//     { name: 'Product 2', price: 15.00, quantity: 1 },
//     { name: 'Product 3', price: 9.99, quantity: 3 },
//   ];

//   const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   const handlePaymentSuccess = () => {
//     setPaymentSuccessful(true);
//   };

//   return (
//     <div>
//       <h1>Your Shopping Cart</h1>
//       <OrderSummary items={items} total={total} />
//       {!paymentSuccessful ? (
//         <PaymentForm total={total} onPaymentSuccess={handlePaymentSuccess} />
//       ) : (
//         <h2>Thank you for your payment!</h2>
//       )}
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import ShoppingCart2 from './ShoppingCart2';


// function App() {
//   return (
//     <div className="App">
//       <ShoppingCart2 />
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// import Management from './Management';

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <header>
//                     <h1>Order Management System</h1>
//                 </header>

//                 <Switch>
//                     <Route path="/" exact component={Management} />
                    
//                 </Switch>
//             </div>
//         </Router>
//     );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductPage from './ProductPage';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/products/:productId" element={<ProductPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;


// import React, { useEffect, useState } from 'react';
// import { initGA, logEvent, logTransaction } from './Analytic'

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [checkoutStarted, setCheckoutStarted] = useState(false);

//   useEffect(() => {
//     initGA(); // Initialize Google Analytics
//   }, []);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     logEvent('Ecommerce', 'Add to Cart', product.name, product.price);
//   };

//   const handleCheckoutStart = () => {
//     setCheckoutStarted(true);
//     logEvent('Ecommerce', 'Checkout Started');
//   };

//   const handleCheckoutComplete = () => {
//     const total = cart.reduce((acc, item) => acc + item.price, 0);
//     logTransaction({
//       id: '12345', // Unique transaction ID
//       total,
//       tax: 2.50,
//       shipping: 5.00,
//       coupon: null,
//       items: cart,
//     });
//     setCart([]); // Clear cart after purchase
//     setCheckoutStarted(false);
//   };

//   const trackCartAbandonment = () => {
//     if (checkoutStarted) {
//       logEvent('Ecommerce', 'Cart Abandoned', 'User left checkout without purchase');
//     }
//   };

//   useEffect(() => {
//     const handleBeforeUnload = () => trackCartAbandonment();
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [checkoutStarted]);

//   return (
//     <div>
//       <h1>Online Store</h1>
//       <div>
//         <h2>Products</h2>
//         <button onClick={() => handleAddToCart({ id: 'p1', name: 'Product 1', price: 29.99 })}>
//           Add Product 1 ($29.99)
//         </button>
//         <button onClick={() => handleAddToCart({ id: 'p2', name: 'Product 2', price: 39.99 })}>
//           Add Product 2 ($39.99)
//         </button>
//       </div>
//       <div>
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>{item.name} - ${item.price}</li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={handleCheckoutStart} disabled={cart.length === 0}>
//         Start Checkout
//       </button>
//       {checkoutStarted && (
//         <div>
//           <h2>Checkout</h2>
//           <button onClick={handleCheckoutComplete}>
//             Complete Purchase
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import TicketForm from './TicketForm';

// const App = () => {
//   const [tickets, setTickets] = useState([]);

//   const addTicket = (ticket) => {
//     setTickets((prev) => [...prev, { ...ticket, id: Date.now() }]);
//   };

//   return (
//     <div>
//       <h1>Support Ticket System</h1>
//       <TicketForm addTicket={addTicket} />
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id}>
//             <h3>{ticket.subject}</h3>
//             <p>{ticket.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import ProductCatalog from './ProductCatalog';

// const App = () => {
//   return (
//     <div className="App">
//       <ProductCatalog />
//     </div>
//   );
// };

// export default App;
// import React from 'react';

// import './App.css'; 
// import ProductCatalog1 from './ProductCatalog1';

// const App = () => {
//   return (
//     <div className="App">
//       <ProductCatalog1 />
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React from 'react';
// import Reviews from './Reviews';

// const App = () => {
//   return (
//     <div>
//       <h1>My Reviews App</h1>
//       <Reviews />
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import AddItem from './components/AddItem';
// import Cart3 from './components/Cart3';


// const items = [
//     { id: 1, name: 'Item 1', price: 20 },
//     { id: 2, name: 'Item 2', price: 30 },
//     { id: 3, name: 'Item 3', price: 40 },
//     { id: 4, name: 'Item 4', price: 60 },
//     { id: 5, name: 'Item 5', price: 80 },
// ];

// const App = () => {
//     return (
//         <div>
//             <h1>Shopping Cart Example</h1>
//             <div>
//                 {items.map(item => (
//                     <AddItem key={item.id} item={item} />
//                 ))}
//             </div>
//             <Cart3 />

//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import Chat from './Chat';

// const App = () => {
//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Customer Support Chat</h1>
//             <Chat />
//         </div>
//     );
// };

// export default App;
// import React from 'react';
// import './ReactSideBar'


// import ReactSideBar from './ReactSideBar';

// const App = () => {
//   return (
//     <div>
//       < ReactSideBar />
      
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import './FileDownload'
// import { FileDownload } from '@mui/icons-material';
// const App = () => {
//   return (
//     <div>
//       < FileDownload />
      
//     </div>
//   );
// };

// export default App;

//  import React from 'react';
//  import FileDownload from './FileDownload'; // Ensure this path is correct based on your project structure
//  import './App.css'; // Your main CSS file for styling

//  const App = () => {
//   return (
//    <div className="app-container">
//      <header className="app-header">
//      <h1>File Download Example</h1>
//    </header>
//       <main>
//        <FileDownload />
//    </main>
//     <footer className="app-footer">
//       <p>&copy; 2024 Your Company Name</p>
//     </footer>
//   </div>
//   );
//  };

//  export default App;
// import React from 'react';
// import DataFetchingComponent from './DataFetchingComponent';


// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>My Data Fetching App</h1>
//       </header>
//       <main>
//         <DataFetchingComponent />
//       </main>
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import TextSearchHighlight from './TextSearchHighlight';
// import './App.css'; // Optional: For any additional styles

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Text Search and Highlight</h1>
//       </header>
//       <main style={{ padding: '20px' }}>
//         <TextSearchHighlight />
//       </main>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import NameGreeting from './NameGreeting'; // Import your NameGreeting component
// import './App.css'; // Optional: For any additional styles

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Simple React Greeting App</h1>
//       </header>
//       <main style={{ padding: '20px' }}>
//         <NameGreeting /> {/* Use the NameGreeting component here */}
//       </main>
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import TaskManager from './TaskManager'; // Adjust the path if needed
// import './App.css'; // Optional for additional styles

// const App = () => {
//   return (
//     <div className="App">
//       <header style={{ textAlign: 'center', padding: '20px' }}>
//         <h1>Task Manager</h1>
//       </header>
//       <TaskManager />
//     </div>
//   );
// };

// export default App;
// src/App.js
// import React from 'react';
// import MapComponent from './MapComponent';

// function App() {
//     return (
//         <div className="App">
//             <h1>Map with Location Markers</h1>
//             <MapComponent />
//         </div>
//     );
// }

// export default App;
// src/App.js


import React from 'react';
import DataFetchComponent from './DataFetchComponent';

function App() {
  return (
    <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>My Data Fetching App</h1>
      <DataFetchComponent />
    </div>
  );
}

export default App;
