/*
How to mix the game type for the random generator question buttons on home page
[1, 2, 2, 1, 3]

History 
[4, 5, 5, 6, 6]

Mixed
[1, 3, 6, 2, 5]
*/

// get random number from server to correspond with question

const randIdx = Math.floor((Math.random() * 7))

fetch("https://reddy-1-1-be.onrender.com/data")
    .then(res => res.json())
    .then(data => console.log(data.id[randIdx]))




