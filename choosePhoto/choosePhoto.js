

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const answerButtons = document.getElementById('answer-buttons')
const imgFromURL = document.getElementById('image')



startButton.addEventListener('click', startGame)

let answers = []
let correct = []
let imageURL = []


function getRandQuestion() {
    fetch("http://localhost:3000/data/choosePhoto")
    .then(res => res.json())
    .then(data => { fetchInfo(data) })

    function fetchInfo(data){

        correct.push(data.correct)
        answers.push(data.correct)
        imageURL.push(data.question)

        for (i=0; i<3; i++){
            answers.push(data.incorrect[i])
        }
    }
}

getRandQuestion()
console.log(answers)
console.log(correct)
console.log(imageURL)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

}

// function showFlag() {
//     imgFromURL.src = imageURL[0]
// }
// showFlag()

