/*
document.querySelector('.hands').addEventListener('click', function (e) {
    // console.log(e);
    let hands = document.querySelector('.hands');
    hands.style.display = "none";

    let contest = document.querySelector('.contest');
    contest.style.display = "flex";

    //set the use pick
if (hands == "rock") {
    document.getElementById('userpick').src= "/images/rock.png"
    
}
})
*/
let SCORE = 0
let pcScore1 =0

let ruleButton = document.querySelector('.rules-box')
let closeButton = document.querySelector('.close-button')

function closeBtn() {
    ruleButton.style.display = "none";
  }
  
function rulesBtn() {
    if (ruleButton.style.display === "none") {
      ruleButton.style.display = "block";
    } else {
      ruleButton.style.display = "none";
    }
  }

// User Pick 
const handoptions = {
    "rock": '/images/rock.png',
    "paper": '/images/paper.png',
    "scissor": '/images/scissor.png'
}

const pickUserHand = (hand) => {

    // hide the current page
    let hands = document.querySelector('.hands');
    hands.style.display = "none";

    //show the next page with hand you picked
    let contest = document.querySelector('.contest');
    contest.style.display = "flex";

    let next = document.querySelector('.next-button');
    contest.style.display = "flex";
    // set the user pick
    document.getElementById("userPickImage").src = handoptions[hand]

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

// Computer Pick
const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissor']
    let cpHand = hands[Math.floor(Math.random() * 3)]

    // set the computer pick
    document.getElementById("computerPickImage").src = handoptions[cpHand]

    return cpHand;
}

// Decision making of winner and loser then Updtaing Scores
const referee = (userHand, cpHand) =>{
    if (userHand == 'paper' && cpHand == 'scissor') {
        setDecision('YOU LOST')
        setPcScore(pcScore1 + 1)  
    } 
    if (userHand == 'paper' && cpHand == 'rock') {
        setDecision('YOU WIN')
        setUserScore(SCORE + 1)
    }
    if (userHand == 'paper' && cpHand == 'paper'){
        setDecision('TIE UP')
    }

    if (userHand == 'rock' && cpHand == 'scissor') {
        setDecision('YOU WIN')  
        setUserScore(SCORE + 1)
    } 
    if (userHand == 'rock' && cpHand == 'paper') {
        setDecision('YOU LOST')
        setPcScore(pcScore1 + 1) 
    }
    if (userHand == 'rock' && cpHand == 'rock'){
        setDecision('TIE UP')
    }

    if (userHand == 'scissor' && cpHand == 'rock') {
        setDecision('YOU LOST') 
        setPcScore(pcScore1 + 1)  
    } 
    if (userHand == 'scissor' && cpHand == 'paper') {
        setDecision('YOU WIN')
        setUserScore(SCORE + 1)
    }
    if (userHand == 'scissor' && cpHand == 'scissor'){
        setDecision('TIE UP')
    }
}

const setDecision= (decision) => {
    document.querySelector(".result h2").innerText = decision;
}

const setUserScore = (userScore) => {
    SCORE = userScore
    document.querySelector(".yourScore h1").innerText = userScore;
}
const setPcScore = (pcScore) => {
    pcScore1 = pcScore
    document.querySelector(".computerScore h1").innerText = pcScore;
}

// Starting the game again
const restartGame = () => {
    let hands = document.querySelector('.hands');
    hands.style.display = "flex";

    //show the next page with hand you picked
    let contest = document.querySelector('.contest');
    contest.style.display = "none";
}