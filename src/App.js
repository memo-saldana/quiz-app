import { useEffect, useState, Fragment } from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import './App.css';
import { Input } from '@mui/material';

function App({questions}) {
  const [questionIndex, setQuestionIndex] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [quizStatus, setQuizStatus] = useState(0)
  const [studentName, setStudentName] = useState('')
  const [studentPhone, setStudentPhone] = useState('')
  const [studentEmail, setStudentEmail] = useState('')
  
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
      //TODO: Send email
    	setQuizStatus(2)
    } else {
      if(quizStatus === 0) {
        setQuizStatus(1)
      }

    	setQuestionIndex(questionIndex == null ? 0 : questionIndex + 1)
		}
  }

  
  let main = null
  if (quizStatus === 0) { // Student info form
    main = (
      <div className='quiz'>
        <h1>SQ Academy Diagnostic Test</h1>
        <p>This is a short diagnostic test for us to know how profficient you are in reading, understanding, and speaking english.</p>
        <p>Please fill out the following form with your information.</p>
        <form>
          <label>
            Name: <Input name="studentName" type="text" value={studentName} onChange={e => setStudentName(e.target.value)}/>
          </label>
          <br/>
          <label>
            Phone: <Input name="studentPhone" type="text" value={studentPhone} onChange={e => setStudentPhone(e.target.value)}/>
          </label>
          <br/>
          <label>
            Email: <Input name="studentEmail" type="text" value={studentEmail} onChange={e => setStudentEmail(e.target.value)}/>
          </label>
        </form>
        <button className="start" onClick={onNextClick}>Start</button>
      </div>

    )
  } else if (quizStatus === 1) { // quiz
    main = (
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
     )
  } else if (quizStatus === 2) { // results
    main = (
      <Fragment>
        <h1>Quiz complete!</h1>
        <p>Thanks {studentName} for completing the test!</p>
        <p>You answered {correctAnswerCount} questions correctly (out of a total {questions.length} questions)</p>
        <p>You will receive an email with these results, and someone will contact you shortly to inquire about your placement.</p>
      </Fragment>
    )
  }
	
	return (
    <div className="quiz">
      {main}
    </div>
  )
}

export default App;
