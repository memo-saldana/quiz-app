import { useEffect, useState } from "react"

const Question = ({ question, setAnswerStatus }) => {
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
	
  useEffect(() => {
  	if (selectedAnswerIndex != null) {
    	setAnswerStatus(selectedAnswerIndex === question.correctAnswerIndex)
    }
  }, [question.correctAnswerIndex, selectedAnswerIndex, setAnswerStatus])
  
  useEffect(() => {
  	setSelectedAnswerIndex(null)
  }, [question])
  
	return (
  	<div className="question">
      <div className="questionText">{question.question}</div>
      <div className="answers">
        {question.answers.map((answer, index) => {
        	return <div key={index} className={selectedAnswerIndex === index? 'answer selected': 'answer'} onClick={() => setSelectedAnswerIndex(index)}>{answer}</div>
      	})}
      </div>
    </div>
 )
}

export default Question;