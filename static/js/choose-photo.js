const questionContainerElement = document.getElementById('question-container')
const backButton = document.getElementById('back-btn')
const nextQuestionBtn = document.getElementById('next-btn');

const outlineImg = document.getElementById('image')
const body = document.getElementById('body')

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')

const buttons = document.querySelectorAll('.answer')


let score = [0]

getRandQuestion()


function getRandQuestion() {
    fetch("https://reddy-1-1-be.onrender.com/data/choosePhoto")
     .then(res => res.json())
     .then(data => fetchInfo(data))
}


function fetchInfo(data){

    outlineImg.src = data.question;

    answers = data.answers

    shuffledAnswers = answers.sort(() => Math.random() -0.5)
    // console.log(shuffledAnswers)

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

    buttons.forEach(button => {
        button.addEventListener('click', checkAnswer)
    })

    backButton.addEventListener('click', () => {
        location.href = 'index.html'
    })

    nextQuestionBtn.addEventListener('click', () => {
        location.reload()
    })
}
fetchInfo()


function checkAnswer() {
   if (this.bool === true){
    this.classList.add('correct')
    console.log(`correct`)
    score ++
    console.log(`Your score is : ${score}`)
    question.textContent = 'Congratulations, You guessed right'
    nextQuestionBtn.style.display = 'block'

   } else {
    this.classList.add('wrong')
    console.log(`Incorrect`)
    console.log(`Your score is : ${score}`)
   } 
}


