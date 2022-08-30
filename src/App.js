import { useEffect, useState, Fragment } from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import './App.css';

function App({questions}) {
  const [questionIndex, setQuestionIndex] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  
  useEffect(() => {
  	setAnswerStatus(null)
  }, [questionIndex])
  
  useEffect(() => {
  	if (answerStatus) {
			setCorrectAnswerCount(count => count + 1)
		}
  }, [answerStatus])

  const onNextClick = () => {
  	if (questionIndex === questions.length - 1) {
    	setQuizComplete(true)
    } else {
    	setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1)
		}
  }
  
  
  if (questionIndex == null) {
    return (
      <div className="quiz">
        <h1>Start Quiz</h1>
        <p>This is a simple React quiz.</p><p>Check out the accompanying article over at justacodingblog for a detailed breakdown of how the quiz works!</p>
        <button className="start" onClick={onNextClick}>Start</button>
      </div>
    )
  }
	
	return (
    <div className="quiz">
      {quizComplete ? (
      	<Fragment>
      	  <h1>Quiz complete!</h1>
          <p>You answered {correctAnswerCount} questions correctly (out of a total {questions.length} questions)</p>
        </Fragment>
      ) : (
       <Fragment>
        <ProgressBar currentQuestionIndex={questionIndex} totalQuestionsCount={questions.length} />
        <Question 
          question={questions[questionIndex]} 
          setAnswerStatus={setAnswerStatus}
        />
        {answerStatus != null && (
          <div>
            <div className="answerStatus">{!!answerStatus ? "Correct! :)" : "Your answer was incorrect :("}</div>
            <button className="next" onClick={onNextClick}>
            {questionIndex === questions.length - 1 ? "See results of this quiz" : "Next Question ->"}
            </button>
          </div>
        )}
      </Fragment>
      )}
      
    </div>
  )
}

export default App;
