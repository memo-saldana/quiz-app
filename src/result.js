const template = (name, score, phone) => `<style>
  html {
  font-family: sans-serif;
}
h1 {
  margin: 20px 0;
}
p {
  line-height: 1.5em;
  margin: 0 0 6px 0;
}
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 600px;
  margin: auto;
}
button {
  background: #e8e8e8;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 3px solid #c9c9c9;
  border-radius: 3px;
}
button.next {
  background: #6ad85c;
  border-bottom: 3px solid #5abc4e;
}
button.start,
button.restart {
  margin-top: 20px;
}
.question {
  width: 100%;
}
.questionText {
  font-size: 1.2em;
  margin: 20px 0;
}
.answers {
  margin-bottom: 20px;
}
.answer {
  padding: 4px;
  text-align: center;
  background: #f3f3f3;
  margin-bottom: 5px;
  border-radius: 3px;
  cursor: pointer;
}

.answer.selected {
  background: gainsboro;
}

.answer.correct {
  background: #6ad85c;
  font-weight: bold;
}

.answer.incorrect {
  background: #df3636;
  font-weight: bold;
}

.answerStatus {
  font-weight: bold;
  margin-bottom: 20px;
}

.progressBar {
  width: 100%;
  background: #f3f3f3;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

.progressBar .inner {
  background: #6ad85c;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  transition: ease all 0.5s;
  border-radius: 3px;
}
.progressBar .text {
  font-size: 0.7em;
  position: absolute;
  z-index: 10;
}
</style>
<div id="root"><div class="quiz"><h1>Quiz complete!</h1><p>Thanks ${name} for completing the test!</p><p>You got a ${score} (out of 75 points)</p><p>You will receive an email with these results, and someone will contact you shortly to inquire about your placement. They can contact you through email or the phone number you provided (The phone you provided is ${phone}).</p></div></div>`
export default template;