const btn = document.querySelector('#submitLetter');
const wordToGuessSection = document.querySelector('#wordToGuessSection');
const wrongLettersList = document.querySelector('#wrongLettersList');
const letterGuessed = document.querySelector('#guessLetter');
const heading = document.querySelector('h1');

let hangmanImage = document.querySelector('#hangman');
let wrongLetters = [];
let guessedLetters = [];
let images = new Array("./static/img/hangman/hm1.png", "./static/img/hangman/hm2.png", "./static/img/hangman/hm3.png", "./static/img/hangman/hm4.png", "./static/img/hangman/hm5.png", "./static/img/hangman/hm6.png", "./static/img/hangman/hm7.png", "./static/img/hangman/hm8.png");
let word = "";


fetchQuestion();


btn.addEventListener('click', checkLetter)


function fetchQuestion() {
    fetch("https://reddy-1-1-be.onrender.com/data/hangman")
      .then(resp => resp.json())
      .then(data => {
        heading.textContent = data.question;
        console.log(data.correct)
        word = data.correct.toUpperCase();
        addLetterDivs();
      })
  }

function addLetterDivs() {
    for (let i = 0; i < word.length; i++) {
        createLetterDivs();
    }
}

function createLetterDivs() {
    const letterDiv = document.createElement("div");
    letterDiv.setAttribute("class", "letterDiv");
    let text = document.createElement("p");
    text.textContent = "_";
    letterDiv.appendChild(text);
    wordToGuessSection.appendChild(letterDiv);
}

function checkLetter() {
    let found = false;
    if (!guessedLetters.includes(letterGuessed.value.toUpperCase()) && !wrongLetters.includes(letterGuessed.value.toUpperCase())) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == letterGuessed.value.toUpperCase()) {
                found = true;
                addCorrectLetter(i, letterGuessed.value.toUpperCase());
            }
        }
        if (!found) {
            addWrongLetter(letterGuessed.value.toUpperCase())
        }
    }
    letterGuessed.value = "";
}

function addCorrectLetter(letterID, correctLetter) {
    guessedLetters.push(correctLetter);
    let div = wordToGuessSection.getElementsByTagName('div')[letterID];
    div.getElementsByTagName("p")[0].textContent = correctLetter;
    div.style.backgroundColor = '#DDD057';
    checkResults();
}

function addWrongLetter(wrongLetter) {
    wrongLetters.push(wrongLetter);
    const letterDiv = document.createElement("div");
    letterDiv.setAttribute("class", "letterDiv");
    const text = document.createElement("p");
    text.textContent = wrongLetter;
    letterDiv.appendChild(text);
    wrongLettersList.appendChild(letterDiv);
    hangmanImage.setAttribute("src", images[wrongLetters.length]);
    checkResults();
}

function checkResults() {
    if (guessedLetters.length === word.length) {
        alert("Congrats! You won!");
    }
    if (wrongLetters.length === 7) {
        alert("You lost!");
    }
}
