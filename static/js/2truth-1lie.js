const button1 = document.getElementById('btn-1')
const button2 = document.getElementById('btn-2')
const button3 = document.getElementById('btn-3')

const question = document.getElementById('question')
const nextQuestionBtn = document.getElementById('next-btn');
const homeBtn = document.getElementById('back-btn')

const buttons = document.querySelectorAll('.answer-button')

let shuffledAnswers = []


function fetchData(){
    fetch("https://reddy-1-1-be.onrender.com/data/two-truth-one-lie")
    .then(res => res.json())
    .then(data => startGame(data))
}

function startGame(data){

    shuffleData(data)
    // console.log(data)
    // console.log(shuffledAnswers)
    button1.textContent = shuffledAnswers[0].text 
    button2.textContent = shuffledAnswers[1].text
    button3.textContent = shuffledAnswers[2].text
    
    button1.bool = shuffledAnswers[0].correct
    button2.bool = shuffledAnswers[1].correct
    button3.bool = shuffledAnswers[2].correct

    buttons.forEach(button => {
        button.addEventListener('click', buttonClickHandler)
    })

    nextQuestionBtn.addEventListener('click', () => {
        location.reload() // should load up a ranomdly selected question and pass current score onto it
    })

    homeBtn.addEventListener('click', () => {
        location.href = 'index.html'
    })
}

function shuffleData(data){
    shuffledAnswers = chance.shuffle(data.answers)
}

function buttonClickHandler(){
    if (this.bool === true){
        // console.log('Correct')
        // buttons.forEach(button => {
        //     button.remove()
        // })
        question.textContent = 'Congratulations, You guess right'
        nextQuestionBtn.style.display = 'block'

    } else {
        console.log('Incorrect')
        return false
    }
}

fetchData()
