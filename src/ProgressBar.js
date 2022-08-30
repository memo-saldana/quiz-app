const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
	const progressPercentage = (currentQuestionIndex / totalQuestionsCount) * 100
  
	return <div className="progressBar">
    <div className="text">{currentQuestionIndex} answered ({totalQuestionsCount - currentQuestionIndex} remaining)</div>
    <div className="inner" style={{ width: `${progressPercentage}%` }} />
	</div>
}

export default ProgressBar;