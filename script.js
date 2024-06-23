// main();

// function main() {
//     let userChoice = "";
//     let numGames = 0;
//     let userScore = 0;
//     let aiScore = 0;
//     numGames = getNumGames(numGames);
//     console.log(numGames);
//     for (let i = 1; i <= numGames; ++i) {
//         let tempScore = 0;
//         userChoice = errorCheck(userChoice);
//         let aiChoice = getRobotChoice();
//         tempScore = checkWinner(userChoice, aiChoice);
//         if (tempScore === 1)
//             ++userScore;
//         else if (tempScore === 2)
//             ++aiScore;
//         else
//             continue;
//     }
//     printScore(userScore, aiScore);
// }
// function getChoice(userChoice) {
//     userChoice = prompt("Rock, Paper, Scissors");
//     userChoice = userChoice.toUpperCase();
//     // console.log(userChoice);
//     return userChoice;
// }
// function errorCheck(userChoice) {
//     do {
//         userChoice = getChoice(userChoice);
//     } while (!(userChoice == "ROCK" || userChoice == "SCISSORS" || userChoice == "PAPER"));
//     console.log(`You chose ${userChoice}`);
//     return userChoice;
// }
// function getRobotChoice() {
//     let randomChoice = getRandInt();
//     let tempAiChoice;
//     switch (randomChoice) {
//         case 0:
//             tempAiChoice = "ROCK";
//             break;
//         case 1:
//             tempAiChoice = "SCISSORS";
//             break;
//         case 2:
//             tempAiChoice = "PAPER";
//             break;
//     }
//     console.log(`The AI chose ${tempAiChoice}`);
//     return randomChoice;
// }
// function getRandInt() {
//     return Math.floor(Math.random() * 3);
// }
// function getNumGames(numGames) {
//     do {
//         numGames = parseInt(prompt("Please enter how many rounds you wish to play:"));
//     } while (!Number.isInteger(numGames) || numGames <= 0);
//     return numGames;
// }
// function checkWinner(userChoice, aiChoice) {
//     if (userChoice === "ROCK")
//         return checkRock(userChoice, aiChoice);
//     else if (userChoice === "SCISSORS")
//         return checkScissors(userChoice, aiChoice);
//     else
//         return checkPaper(userChoice, aiChoice);
// }
// function checkRock(userChoice, aiChoice) {
//     let tempScore = 0;
//     if (userChoice === "ROCK" && aiChoice == 0) {
//         console.log("Draw!");
//     }
//     else if (userChoice === "ROCK" && aiChoice == 1) {
//         console.log("You Win!");
//         ++tempScore;
//     }
//     else {
//         console.log("You Lose!");
//         tempScore = 2;
//     }
//     return tempScore;
// }
// function checkScissors(userChoice, aiChoice) {
//     let tempScore = 0;
//     if (userChoice === "SCISSORS" && aiChoice == 0) {
//         console.log("You Lose!");
//         tempScore = 2;
//     }
//     else if (userChoice === "SCISSORS" && aiChoice == 1) {
//         console.log("Draw!!");
//     }
//     else {
//         console.log("You Win!");
//         ++tempScore;
//     }
//     return tempScore;
// }
// function checkPaper(userChoice, aiChoice) {
//     let tempScore = 0;
//     if (userChoice === "PAPER" && aiChoice == 0) {
//         console.log("You Win!");
//         tempScore = 1;
//     }
//     else if (userChoice === "PAPER" && aiChoice == 1) {
//         console.log("You Lose");
//         tempScore = 2;
//     }
//     else {
//         console.log("Draw!");
//     }
//     return tempScore;
// }
// function printScore(userScore, aiScore) {
//     console.log(`Your score: ${userScore}`);
//     console.log(`AI Score: ${aiScore}`);
//     if (userScore > aiScore)
//         console.log("You Win!");
//     else if (userScore < aiScore)
//         console.log("You Lose!");
//     else
//         console.log("Draw Game!");
// }



let userScore = 0;
let aiScore = 0;
// gameTracker();
//
// function gameTracker() {
//     const round = document.querySelector("#round");
//     let roundNum = document.createElement("span");
//     round.appendChild(roundNum);
//     let numGames = getNumGames();
//     let currentGame = 0;
//     roundNum.textContent = currentGame;

//     function startGame() {
//         if (currentGame <= numGames) {
//             Game();
//             currentGame++;
//             roundNum.textContent = currentGame;
//         }
//         else
//             console.log("Game completed");
//     }
//     startGame();
// }
// gameTracker();
// function gameTracker() {
//     const round = document.querySelector("#round");
//     let roundNum = document.createElement("span");
//     round.appendChild(roundNum);
//     let numGames = getNumGames();
//     let currentGame = 1;
//     roundNum.textContent = currentGame;
//     Game(numGames, currentGame, roundNum, round);
// }
// function getNumGames(numGames) {
//     do {
//         numGames = parseInt(prompt("Please enter how many rounds you wish to play:"));
//     } while (!Number.isInteger(numGames) || numGames <= 0);
//     return numGames;
// }
// //
// function Game(numGames, currentGame, roundNum, round) {
//     const userChoice = document.querySelector(".choice");
//     userChoice.addEventListener("click", (e) => {
//         let target = e.target;
//         let aiChoice = getRobotChoice();

//         switch (target.id) {
//             case "rock":
//                 checkWinner(target.id.toUpperCase(), aiChoice, numGames);
//                 break;
//             case "paper":
//                 checkWinner(target.id.toUpperCase(), aiChoice, numGames);
//                 break;
//             case "scissors":
//                 checkWinner(target.id.toUpperCase(), aiChoice, numGames);
//                 break;
//         }
//         if (currentGame < numGames) {
//             currentGame++;
//             roundNum.textContent = currentGame;
//         }
//         else {
//             currentGame = null;
//             numGames = null;
//             endGame(roundNum, currentGame);
//         }
//     });
// }
// function endGame(roundNum, currentGame) {
//     roundNum.remove();
//     console.log("Game completed");
//     handlePostGameOptions(roundNum, currentGame);
// }
// function handlePostGameOptions(roundNum, currentGame) {
//     let continueGame = prompt("Would you like to play again? Y/N").toUpperCase();
//     if (continueGame === "Y") {
//         resetGame(roundNum, currentGame);
//         gameTracker();
//     } else {
//         alert("Good day!");
//     }
// }
// function resetGame(roundNum, currentGame) {
//     currentGame = 1;
//     roundNum.textContent = currentGame;
// }
// //
// function getRobotChoice() {
//     let randomChoice = getRandInt();
//     let tempAiChoice;
//     switch (randomChoice) {
//         case 0:
//             tempAiChoice = "ROCK";
//             break;
//         case 1:
//             tempAiChoice = "SCISSORS";
//             break;
//         case 2:
//             tempAiChoice = "PAPER";
//             break;
//     }
//     console.log(`The AI chose ${tempAiChoice}`);
//     return randomChoice;
// }
// function getRandInt() {
//     return Math.floor(Math.random() * 3);
// }

// //
// function checkWinner(userChoice, aiChoice, numGames) {
//     if (userChoice === "ROCK")
//         return checkRock(userChoice, aiChoice);
//     else if (userChoice === "SCISSORS")
//         return checkScissors(userChoice, aiChoice);
//     else
//         return checkPaper(userChoice, aiChoice);
// }
// function checkRock(userChoice, aiChoice, numGames) {
//     let tempScore = 0;
//     if (userChoice === "ROCK" && aiChoice == 0) {
//         console.log("Draw!");
//     }
//     else if (userChoice === "ROCK" && aiChoice == 1) {
//         console.log("You Win!");
//         ++tempScore;
//     }
//     else {
//         console.log("You Lose!");
//         tempScore = 2;
//     }

//     return tempScore;
// }
// function checkScissors(userChoice, aiChoice, numGames) {
//     let tempScore = 0;
//     if (userChoice === "SCISSORS" && aiChoice == 0) {
//         console.log("You Lose!");
//         tempScore = 2;
//     }
//     else if (userChoice === "SCISSORS" && aiChoice == 1) {
//         console.log("Draw!!");
//     }
//     else {
//         console.log("You Win!");
//         ++tempScore;
//     }
//     return tempScore;
// }
// function checkPaper(userChoice, aiChoice, numGames) {
//     let tempScore = 0;
//     if (userChoice === "PAPER" && aiChoice == 0) {
//         console.log("You Win!");
//         tempScore = 1;
//     }
//     else if (userChoice === "PAPER" && aiChoice == 1) {
//         console.log("You Lose");
//         tempScore = 2;
//     }
//     else {
//         console.log("Draw!");
//     }
//     return tempScore;
// }

// //
// function playerScore(numGames, tempScore) {
//     const score = document.querySelector("#score");
//     let updateScore = document.createElement("span");
//     if (tempScore == 0) {
//         updateScore.textContent = `${tempScore}/${numGames}`;
//         score.appendChild(updateScore);
//     }
//     else if (tempScore == 1) {
//         updateScore.textContent = `${++tempScore}/${numGames}`;
//         score.appendChild(updateScore);
//     }
//     else {
//         updateScore.textContent = `${tempScore}/${numGames}`;
//         score.appendChild(updateScore);
//     }
// }

//need to work on the score and rounds
//that should be all thats left for this project
//additionally, might need to add photos