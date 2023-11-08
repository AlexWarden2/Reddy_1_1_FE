const questionContainerElement = document.getElementById('question-container')
const startButton = document.getElementById('start-btn')


startButton.addEventListener('click', startGame)

const flagImage = document.getElementById('image')

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

button1.addEventListener('click', checkAnswer)
button2.addEventListener('click', checkAnswer)
button3.addEventListener('click', checkAnswer)
button4.addEventListener('click', checkAnswer)


function getRandQuestion() {
    fetch("https://reddy-1-1-be.onrender.com/data/choosePhoto")
     .then(res => res.json())
     .then(data => fetchInfo(data))
}
getRandQuestion()


function fetchInfo(data){

    flagImage.src = data.question;

    answers = data.answers

    shuffledAnswers = answers.sort(() => Math.random() -0.5)
    console.log(shuffledAnswers)

    button1.textContent = shuffledAnswers[0].text 
    button2.textContent = shuffledAnswers[1].text
    button3.textContent = shuffledAnswers[2].text
    button4.textContent = shuffledAnswers[3].text

    button1.bool = shuffledAnswers[0].correct
    button2.bool = shuffledAnswers[1].correct
    button3.bool = shuffledAnswers[2].correct
    button4.bool = shuffledAnswers[3].correct

    // console.log(button1.bool)
    // console.log(button2.bool)
    // console.log(button3.bool)
    // console.log(button4.bool)
}
fetchInfo()


function startGame() {
    // console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

const buttons = document.querySelectorAll('.btn')


buttons.forEach(button => {
        button.addEventListener('click', checkAnswer)
    })

function checkAnswer() {
   if (this.bool === true){
    console.log(`correct`)
   } else {
    console.log(`false`)
   } 
}
