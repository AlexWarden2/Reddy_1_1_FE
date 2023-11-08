const questionContainerElement = document.getElementById('question-container')
const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

const flagImage = document.getElementById('image')

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

// button1.addEventListener('click', checkAnswer)
// button2.addEventListener('click', checkAnswer)
// button3.addEventListener('click', checkAnswer)
// button4.addEventListener('click', checkAnswer)


// let answers = []
// let shuffledAnswers = []
// let correct = []

function getRandQuestion() {
    fetch("https://reddy-1-1-be.onrender.com/data/choosePhoto")
     .then(res => res.json())
     .then(data => fetchInfo(data))
}
getRandQuestion()

function fetchInfo(data){
    correct = data.correct
    console.log(correct)

    flagImage.src = data.question;
    answers = data.incorrect
    answers.push(data.correct)
    console.log(answers)

    shuffledAnswers = answers.sort(() => Math.random() -0.5)
    console.log(shuffledAnswers)

    btn1.textContent = shuffledAnswers[0]
    btn2.textContent = shuffledAnswers[1]
    btn3.textContent = shuffledAnswers[2]
    btn4.textContent = shuffledAnswers[3]
}
fetchInfo()

console.log(answers)


function startGame() {
    // console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

