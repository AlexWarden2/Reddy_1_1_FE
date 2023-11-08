

function fetchData(){
    fetch("https://reddy-1-1-be.onrender.com/data/two-truth-one-lie")
    .then(res => res.json())
    .then(data => startGame(data))
}