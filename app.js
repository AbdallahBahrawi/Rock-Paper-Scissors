const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1 // possibleChoice.length = 3
    if(randomNumber === 1) computerChoice = 'rock'
    if(randomNumber === 2) computerChoice = 'scissors'
    if(randomNumber === 3) computerChoice = 'paper'
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) result = "It's A Draw"
    if (computerChoice === "rock" && userChoice === "paper") result = "You won"
    if (computerChoice === "rock" && userChoice === "scissors") result = "You Lost"
    if (computerChoice === "scissors" && userChoice === "rock") result = "You Won"
    if (computerChoice === "scissors" && userChoice === "paper") result = "You lost"
    if (computerChoice === "paper" && userChoice === "rock") result = "You lost"
    if (computerChoice === "paper" && userChoice === "scissors") result = "You Won"  
    resultDisplay.innerHTML = result
}