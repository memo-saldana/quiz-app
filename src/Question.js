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
  
  const getClasses = (index) => {
  	let classes = []
    if (selectedAnswerIndex != null) {
      if (selectedAnswerIndex === index) {
        classes.push("selected")
      }
      if (index === question.correctAnswerIndex) {
        if (selectedAnswerIndex === index) {
          classes.push("correct")
        } else {
          classes.push("incorrect")
        }
      }
    }
    
    return classes.join(" ")
  }
  
	return (
  	<div className="question">
      <div className="questionText">{question.question}</div>
      <div className="answers">
        {question.answers.map((answer, index) => {
        	return <div key={index} className={`answer ${getClasses(index)}`} onClick={() => selectedAnswerIndex == null && setSelectedAnswerIndex(index)}>{answer}</div>
      	})}
      </div>
    </div>
 )
}

export default Question;