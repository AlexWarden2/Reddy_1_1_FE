const flag1 = document.getElementById('flag-1')
const flag2 = document.getElementById('flag-2')
const flag3 = document.getElementById('flag-3')
const flag4 = document.getElementById('flag-4')
const country1 = document.getElementById('country-1')
const country2 = document.getElementById('country-2')
const country3 = document.getElementById('country-3')
const country4 = document.getElementById('country-4')

const cards = document.querySelectorAll('.card')

let shuffledNames = []
let shuffledPhotos = []
let correctPairs = []
let selectedCards = []
let clickedCountryCard = null;
let clickedFlagCard = null;

function fetchData(){
    fetch("https://reddy-1-1-be.onrender.com/data/flag-match")
    .then(res => res.json())
    .then(data => startGame(data))
}

function startGame(data){
    for ( let i = 0; i < 4 ; i++ ){
        correctPairs.push({country: data.correctName[i], flag: data.correctPhoto[i]})
    }

    console.log(correctPairs)
    shuffleData(data)

    country1.textContent = shuffledNames[0]
    country2.textContent = shuffledNames[1]
    country3.textContent = shuffledNames[2]
    country4.textContent = shuffledNames[3]
    flag1.src = shuffledPhotos[0]
    flag2.src = shuffledPhotos[1]
    flag3.src = shuffledPhotos[2]
    flag4.src = shuffledPhotos[3]

    cards.forEach(card => {
        card.addEventListener('click', cardClickHandler)
    })
}

function shuffleData(data){
    shuffledNames = chance.shuffle(data.correctName)
    shuffledPhotos = chance.shuffle(data.correctPhoto)
}

function cardClickHandler() {
    if (this.classList.contains('country')){
        console.log('country')
        if (!clickedCountryCard){
            clickedCountryCard = this
        }
    } else if (this.classList.contains('flag')){
        console.log('flag')
        if (!clickedFlagCard){
            clickedFlagCard = this
        }
    } 
    
    if (clickedCountryCard && clickedFlagCard) {
        selectedCards = {
            country: clickedCountryCard.textContent.trim(),
            flag: getURL(clickedFlagCard)
        }
        console.log(selectedCards)
        clickedCountryCard = null;
        clickedFlagCard = null;
    }
}

function getURL(card){
    const img = card.querySelector('img')
    return img.src
}

fetchData()