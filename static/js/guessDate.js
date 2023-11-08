const questionContainerElement = document.getElementById('question-container')
const question = document.getElementById('question')
const startButton = document.getElementById('start-btn')
const nextQuestionBtn = document.getElementById('next-btn');

const buttons = document.querySelectorAll('.answer')
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

getRandQuestion()

function getRandQuestion() {
    fetch("https://reddy-1-1-be.onrender.com/data/dates")
     .then(res => res.json())
     .then(data => fetchInfo(data))
}

function fetchInfo(data){
    question.textContent = data.question;
    answers = data.answers
    shuffledAnswers = answers.sort(() => Math.random() -0.5)

    button1.textContent = shuffledAnswers[0].text 
    button2.textContent = shuffledAnswers[1].text
    button3.textContent = shuffledAnswers[2].text
    button4.textContent = shuffledAnswers[3].text
    button1.bool = shuffledAnswers[0].correct
    button2.bool = shuffledAnswers[1].correct
    button3.bool = shuffledAnswers[2].correct
    button4.bool = shuffledAnswers[3].correct

    buttons.forEach(button => {
        button.addEventListener('click', checkAnswer)
    })

    nextQuestionBtn.addEventListener('click', () => {
        location.reload()
    })
}

function checkAnswer() {
   if (this.bool === true){
    this.style.backgroundColor = "green";
    question.textContent = 'Congratulations, You guessed right'
    nextQuestionBtn.style.display = 'block'
   } else {
    this.style.backgroundColor = "red";
   } 
}
