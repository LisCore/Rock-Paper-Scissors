const aiChoice = document.querySelector("#aichose");
let aiGenerate = document.createElement("span");
const score = document.querySelector("#score");
let generateScore = document.createElement("span");
let drawHolder = 0;
let winHolder = 0;
let lostHolder = 0;
//wait for player to choose then generate this

const round = document.querySelector("#round");
let updateRound = document.createElement("span");
let tempRound = 1;
updateRound.textContent = tempRound;
round.appendChild(updateRound);
let numGames = getNumGames();

const choice = document.querySelector(".choice");
let tempChoice = document.createElement("p");
choice.addEventListener("click", (e) => {
    let target = e.target;

    if (tempRound < numGames) {
        tempRound++;
        updateRound.textContent = tempRound;
        tempAiChoice = getRobotChoice();
        switch (target.id) {
            case "rock":
                checkWinner(target.id.toUpperCase(), tempAiChoice);
                break;
            case "paper":
                checkWinner(target.id.toUpperCase(), tempAiChoice);
                break;
            case "scissors":
                checkWinner(target.id.toUpperCase(), tempAiChoice);
                break;
        }
    }
    else {
        e.stopPropagation();
        if (winHolder > lostHolder) alert("You Win!");
        else if (winHolder < lostHolder) alert("You Lose!");
        else alert("Draw!");
    }
});

function getRobotChoice() {
    let randomChoice = getRandInt();
    let tempAiChoice;
    switch (randomChoice) {
        case 0:
            tempAiChoice = "ROCK";
            break;
        case 1:
            tempAiChoice = "SCISSORS";
            break;
        case 2:
            tempAiChoice = "PAPER";
            break;
    }
    console.log(`The AI chose ${tempAiChoice}`);
    aiGenerate.textContent = `${tempAiChoice}`;
    aiChoice.appendChild(aiGenerate);
    return randomChoice;
}
function getRandInt() {
    return Math.floor(Math.random() * 3);
}

function checkWinner(userChoice, aiChoice) {
    if (userChoice === "ROCK")
        return checkRock(userChoice, aiChoice);
    else if (userChoice === "SCISSORS")
        return checkScissors(userChoice, aiChoice);
    else
        return checkPaper(userChoice, aiChoice);
}
function checkRock(userChoice, aiChoice) {
    let tempScore = 0;
    if (userChoice === "ROCK" && aiChoice == 0) {
        console.log("Draw!");
    }
    else if (userChoice === "ROCK" && aiChoice == 1) {
        console.log("You Win!");
        ++tempScore;
    }
    else {
        console.log("You Lose!");
        tempScore = 2;
    }
    checkScore(tempScore);
    return tempScore;
}
function checkScissors(userChoice, aiChoice) {
    let tempScore = 0;
    if (userChoice === "SCISSORS" && aiChoice == 0) {
        console.log("You Lose!");
        tempScore = 2;
    }
    else if (userChoice === "SCISSORS" && aiChoice == 1) {
        console.log("Draw!!");
    }
    else {
        console.log("You Win!");
        ++tempScore;
    }
    checkScore(tempScore);
    return tempScore;
}
function checkPaper(userChoice, aiChoice) {
    let tempScore = 0;
    if (userChoice === "PAPER" && aiChoice == 0) {
        console.log("You Win!");

        tempScore = 1;
    }
    else if (userChoice === "PAPER" && aiChoice == 1) {
        console.log("You Lose");
        tempScore = 2;
    }
    else {
        console.log("Draw!");
    }
    checkScore(tempScore);
    return tempScore;
}
function getNumGames(numGames) {
    do {
        numGames = parseInt(prompt("Please enter how many rounds you wish to play:"));
    } while (!Number.isInteger(numGames) || numGames <= 0);
    return numGames;
}
// const score = document.querySelector("#score");
// let generateScore = document.createElement("span");
function checkScore(tempScore) {
    const winElement = document.getElementById('win');
    const lostElement = document.getElementById('lost');
    const drawElement = document.getElementById('draw');
    switch (tempScore) {
        case 0:
            drawHolder++;  // Increment the draw count
            drawElement.textContent = `Draw: ${drawHolder}`;
            break;
        case 1:
            winHolder++;  // Increment the win count
            winElement.textContent = `Wins: ${winHolder}`;
            break;
        case 2:
            lostHolder++;  // Increment the lost count
            lostElement.textContent = `Lost: ${lostHolder}`;
            break;
    }
}