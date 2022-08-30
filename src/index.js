import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const questions = [
	{
  	question: "In what contintent is Indonesia?",
  	answers: ["South America", "Europe", "Asia"],
  	correctAnswerIndex: 2
  },
  {
  	question: "What is 64 * 3",
  	answers: [186, 192, 197, 400],
  	correctAnswerIndex: 1
  },
  {
  	question: "How many faces does a decahedron have?",
  	answers: [8, 10, 12],
  	correctAnswerIndex: 1
  },
  {
  	question: "What's the capital city of England?",
  	answers: ["London", "Paris", "Berlin"],
  	correctAnswerIndex: 0
  },
  {
  	question: "Is JavaScript the same as Java?",
  	answers: ["Yes, it is", "No, it isn't"],
  	correctAnswerIndex: 1
  },
  {
  	question: "What month comes after November?",
  	answers: ["January", "March", "December"],
  	correctAnswerIndex: 2
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App questions={questions}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
