
// let scoreE1 = document.getElementById("score1");
// let scoreE2 = document.getElementById("score2");

// let countH = 0;
// let countG = 0;

// function oneH() {
//     countH += 1;
//     updateScore();
// }

// function twoH() {
//     countH += 2;
//     updateScore();
// }

// function threeH() {
//     countH += 3;
//     updateScore();
// }

// function oneG() {
//     countG += 1;
//     updateScore();
// }

// function twoG() {
//     countG += 2;
//     updateScore();
// }

// function threeG() {
//     countG += 3;
//     updateScore();
// }

// function updateScore() {
//     scoreE1.innerText = countH;
//     scoreE2.innerText = countG;
// }




// Efficent Way of implementing the Code


let scoreE1 = document.getElementById("score1");
let scoreE2 = document.getElementById("score2");

let homeScore = 0;
let guestScore = 0;

function incrementScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        scoreE1.innerText = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        scoreE2.innerText = guestScore;
    }
}

// Button event handlers
document.getElementById("btn-one-home").onclick = () => incrementScore('home', 1);
document.getElementById("btn-two-home").onclick = () => incrementScore('home', 2);
document.getElementById("btn-three-home").onclick = () => incrementScore('home', 3);

document.getElementById("btn-one-guest").onclick = () => incrementScore('guest', 1);
document.getElementById("btn-two-guest").onclick = () => incrementScore('guest', 2);
document.getElementById("btn-three-guest").onclick = () => incrementScore('guest', 3);
