

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

import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('(link unavailable)')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <div>
      <h2>React is a popular JavaScript library for building user interfaces and can be used for developing complex, interactive web and mobile applications.
      </h2>
      {users.map((user) => (
        <div key={('https://jsonplaceholder.typicode.com/users')}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;


