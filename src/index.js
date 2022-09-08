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
