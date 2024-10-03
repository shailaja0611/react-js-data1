// import React, { useState } from 'react';
// import './RadioButton.css';

// const quizData = [
//   // ...
// ];

// const RadioButton = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [resultMessage, setResultMessage] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedAnswer(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const currentQuestion = quizData[currentQuestionIndex];
//     if (selectedAnswer === currentQuestion.answer) {
//       setResultMessage('Correct!');
//     } else {
//       setResultMessage(`Incorrect! The correct answer is: ${currentQuestion.answer}`);
//     }
//   };

//   const handleNextQuestion = () => {
//     setSelectedAnswer('');
//     setResultMessage('');
//     if (currentQuestionIndex < quizData.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       alert("Quiz completed!");
//     }
//   };

//   const currentQuestion = quizData[currentQuestionIndex];

//   return (
//     <div>
//       <h2>{currentQuestion.question}</h2>
//       <form onSubmit={handleSubmit}>
//         {currentQuestion.options.map((option, index) => (
//           <RadioButton 
//             key={index} 
//             label={option} 
//             value={option} 
//             checked={selectedAnswer === option} 
//             onChange={handleOptionChange} 
//           />
//         ))}
//         {resultMessage && <p>{resultMessage}</p>}
//         <button 
//           type="submit" 
//           style={{ backgroundColor: '#4CAF50', color: '#fff' }}
//         >
//           Submit Answer
//         </button>
//         {currentQuestionIndex < quizData.length - 1 && (
//           <button 
//             type="button" 
//             onClick={handleNextQuestion} 
//             style={{ backgroundColor: '#666', color: '#fff' }}
//           >
//             Next Question
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default RadioButton;
