import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line 
const test = [
  {
  	question: "In what contintent is Indonesia?",
  	answers: ["South America", "Europe", "Asia"],
  	correctAnswerIndex: 2,
    points: 1
  },
  {
  	question: "What is 64 * 3",
  	answers: [186, 192, 197, 400],
  	correctAnswerIndex: 1,
    points: 2
  },
  {
  	question: "What is 64 * 3",
  	answers: [186, 192, 197, 400],
  	correctAnswerIndex: 1,
    points: 2
  },
]
// eslint-disable-next-line 
const questions = [
	{
		question: "1. Verb to be past tense: Paula and Robert _______ playing in the garden last Saturday.",
		answers: ["a) Are", "b) Was", "c) Is", "d) Were"],
		correctAnswerIndex: 3,
    points: 1
	},
	{
		question: "2. Regular verbs past tense: Chris _______ a new soccer ball yesterday.",
		answers: ["a) Want", "b) Wants", "c) Wanted"],
		correctAnswerIndex: 2,
    points: 1
	},
  {
    question: "3. Present Continuous: Charly _______ watching TV right now.",
    answers: ["a) Is watching", "b) Is watch", "c) Was watching", "d) Watching"],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    question: "4. Possessive Adjectives: My mother is driving _______ new car.",
    answers: ["a) His", "b) Her", "c) My", "d) it"],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    question: "5. Past Tense Irregular verbs: Carol _______ very late as well last night.",
    answers: ["a) Sleeps", "b) Slep", "c) Slept", "d) Sleeped"],
    correctAnswerIndex: 2,
    points: 1
  },
  {
    question: "6. Direct and Indirect Objects: Bob built a tree house for _______ children.",
    answers: ["a) He", "b) Is", "c) Her", "d) His"],
    correctAnswerIndex: 3,
    points: 1
  },
  {
    question: "7. Future with Will: We _______ football on Sunday.",
    answers: ["a) Is playing", "b) Will played", "c) Plays", "d) Will play"],
    correctAnswerIndex: 3,
    points: 1
  },
  {
    question: "8. Comparatives and Superlatives: My sister thinks she´s _______ than me, but I don’t agree because I’m the _______ in my classroom.",
    answers: ["a) Most intelligent; more intelligent", "b) Intelligenter; intelligentest", "c) More intelligent; most intelligent"],
    correctAnswerIndex: 2,
    points: 1
  },
  {
    question: "9. Quantifiers: Jack has _______ knowledge about Mexico’s history, he wants to visit _______ places in there.",
    answers: ["a) Much; many", "b) Many, much", "c) A lot; much", "d) Much; a lot"],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    question: "10. Present Perfect and Simple past: I _______ hockey since I _______ a child, I’m pretty good at it.",
    answers: ["a) Was; 've played", "b) 've played; am", "c) Played; 've was", "d) 've played; was"],
    correctAnswerIndex: 3,
    points: 1
  },
  {
    question: "11. Real Conditional - The Zero Conditional: If my husband _______, he _______ the food.",
    answers: ["a) Cooked; burns", "b) Cooks; burns", "c) Cook; burn", "d) Burns; cooks"],
    correctAnswerIndex: 1,
    points: 2
  },
  {
    question: "12. Real Conditional - The First Conditional: Her father _______ angry if she _______ to the party.",
    answers: ["a) Is; go", "b) Will; goes", "c) Will be; goes", "d) Be; go"],
    correctAnswerIndex: 2,
    points: 2
  },
  {
    question: "13. Adjective or Adverb: “Come here _______” she said, “and help me with this _______ table”.",
    answers: ["a) Quickly; beautiful", "b) Quick; beautiful", "c) Quicker; beautifully", "d) Quicks; beautiful"],
    correctAnswerIndex: 0,
    points: 2
  },
  {
    question: "14. Past Perfect: When I got to the house, Mary wasn’t there. She _______ already _______.",
    answers: ["a) Was; gone", "b) Is; gone", "c) Has; go", "d) Had; gone"],
    correctAnswerIndex: 3,
    points: 2
  },
  {
    question: "15. Past Continuous and Simple Past: George _______ off the ladder while he _______ the ceiling.",
    answers: ["a) Fall; paint",
    "b) Fell; was painting",
    "c) Felt; painting"],
    correctAnswerIndex: 1,
    points: 2,
  },
  {
    question: "16. Passive voice - Choose the passive voice of the following sentence: A burglar broke the window.",
    answers: [
      "a) The window was broken by a burglar.",
      "b) A burglar broken the window.",
      "c) The window was broke by a burglar.",
      "d) A burglar is broken the window.",
    ],
    correctAnswerIndex: 0,
    points: 3,
  },
  {
    question: "17. Real Conditional in the future. If you _______ milk, you _______ stronger bones.",
    answers: [
      "a) Drank; had",
      "b) Drink; 've had",
      "c) Drink; will have",
      "d) 'll drink; have",
    ],
    correctAnswerIndex: 2,
    points: 3
  },
  {
    question: "18. Indefinite Pronouns: Does _______ have a phone charger?",
    answers: [
      "a) Somewhere",
      "b) Somebody",
      "c) Nobody",
      "d) Anybody",
    ],
    correctAnswerIndex: 3,
    points: 3,
  },
  {
    question: "19. Present Perfect or Present Perfect Continuous: He _______ his essay all day, but he _______ yet.",
    answers: [
      "a) has been writing; hasn’t finished",
      "b) has written; has finished",
      "c) has writing; has finished",
      "d) has been writing; has finished",
    ],
    correctAnswerIndex: 0,
    points: 2
  },
  {
    question: "20. Infinitives and Gerunds: We hope _______ Amsterdam next month, Paula suggested _______ to the museum.",
    answers: [
      "a) Visit; to go",
      "b) To visit; going",
      "c) Visiting; go",
      "d) Visit; to go",
    ],
    correctAnswerIndex: 1,
    points: 3,
  },
  {
    question: "21. Past Perfect: After we _______ the cornflakes, Henry came in.",
    answers: [
      "a) Ate",
      "b) Have eaten",
      "c) Had eaten",
      "d) Eat",
    ],
    correctAnswerIndex: 2,
    points: 3
  },
  {
    question: "22. Unreal Conditional: If I were you, I _______ her that I love her.",
    answers: [
      "a) Had told",
      "b) 'd tell",
      "c) Told",
    ],
    correctAnswerIndex: 1,
    points: 3
  },
  {
    question: "23. Reported Speech - Change the direct speech into reported speech: “He works in a bank.”",
    answers: [
      "a) She said that he worked in a bank.",
      "b) He said he works in a bank.",
      "c) She said he works in a bank.",
    ],
    points: 3,
    correctAnswerIndex: 0,
  },
  {
    question: "24. Indirect Questions. Do you have any idea when _______?",
    answers: [
      "a) will be the results published",
      "b) the results will be published",
      "c) will the results be published",
      "d) the results published",
    ],
    correctAnswerIndex: 1,
    points: 4,
  },
  {
    question: "25. Tag Questions: Which is the correct option?",
    answers: [
      "a) Mr. Pritchard has been to Scotland recently, didn't he?",
      "b) Mr. Pritchard has been to Scotland recently, has he?",
      "c) Mr. Pritchard has been to Scotland recently, did he?",
      "d) Mr. Pritchard has been to Scotland recently, hasn't he?",
    ],
    correctAnswerIndex: 3,
    points: 4,
  },
  {
    question: "26. Adjective Clauses - Choose the sentence that means the same, but as an adjective clause: The student is a very nice person. She comes from Canada.",
    answers: [
      "a) The student which comes from Canada is a very nice person.",
      "b) The student is a very nice person that comes from Canada.",
      "c) The student that comes from Canada is a very nice person.",
      "d) The student whose comes from Canada is a very nice person.",
    ],
    correctAnswerIndex: 2,
    points: 4,
  },
  {
    question: "27. Negative Questions: When do we use negative questions?",
    answers: [
      "a) To confirm something you already know or think.",
      "b) To show that you are surprised or annoyed.",
      "c) To give advice or make a suggestion indirectly.",
      "d) All of the above.",
    ],
    correctAnswerIndex: 3,
    points: 4,
  },
  {
    question: "28. Modals to Discuss the Past: Ben: I can't find my camera. Bill: _______. Ben: Yes, maybe. I'll look there tomorrow.",
    answers: [
      "a) You should have kept it in a safe place.",
      "b) You might have left it at school.",
      "c) You couldn't have lost it.",
      "d) You may have forgot it.",
    ],
    correctAnswerIndex: 1,
    points: 4
  },
  {
    question: "29. Noun Clause - Identify the noun clause in the following sentence: Dad asked the desk clerk when the museum would be open.",
    answers: [
      "a) Dad asked the desk clerk",
      "b) when the museum",
      "c) when the museum would be open.",
      "d) asked the desk clerk when",
    ],
    correctAnswerIndex: 2,
    points: 4,
  },
  {
    question: "30. The Future in the Past: We went to bed early, because we _______ to London early the following day.",
    answers: [
      "a) were travelling",
      "b) were about to travel",
      "c) travelled",
      "d) was going to travel",
    ],
    correctAnswerIndex: 0,
    points: 4
  },
  {
    question: "31. Future fact.",
    answers: [
      "a) My sister is being 15 in May.",
      "b) My sister is going to be 15 in May.",
      "c) Shall my sister be 15 in May?",
      "d) My sister will be 15 in May.",
    ],
    points: 4,
    correctAnswerIndex: 3
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
