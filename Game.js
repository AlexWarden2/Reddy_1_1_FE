// need to be able to run each file once - break condition after each - paybe through popup/ alert
// store output
//then need to be able to run next file in random list

//after run calculate score after 5 mini games

const next = document.querySelector("#create-score");

next.addEventListener('click', createNewScore);

async function createNewScore(e) {
    e.preventDefault()

    const score = {
        id: e.length + 1,
        score: e.length + 1
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(score)
    }

    const response = await fetch("http://localhost:3000/scores", options);

    if (response.ok) {
        alert("Score added.");
    }
}



