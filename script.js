//Variables for the game.
var choices = ["rock", "paper", "scissor"]
var randNum = Math.round(Math.random()*2)  //This will give a random number between 0-2 --> [0,1,2]

var userPoints = 0
var comPoints = 0

var comChoice = choices[randNum]

//This function will handle the score of user and comp and update it.
function score(){
    document.querySelector(".user__score").innerHTML = userPoints
    document.querySelector(".comp__score").innerHTML = comPoints
}

function iconElement(object){
    if(object === 'rock'){
        return '<i class="fas fa-hand-rock"></i>'
    }
    else if(object === 'paper'){
        return '<i class="fas fa-hand-paper"></i>'
    }
    else{
        return '<i class="fas fa-hand-scissors"></i>'
    }
}


function refreshComp(){
    randNum = Math.round(Math.random()*2)
    comChoice = choices[randNum]
}


function game(userChoice){
    document.querySelector("#user__choice").innerHTML = iconElement(userChoice)
    document.querySelector("#comp__choice").innerHTML = iconElement(comChoice)

    if(userChoice === 'paper' && comChoice === 'rock' || userChoice === 'rock' && comChoice === 'scissor' || userChoice === 'scissor' && comChoice === 'paper'){
        userPoints++
        score()
        document.querySelector(".winner__text").innerHTML = "You Win!"
    }

    else if(userChoice === comChoice){
        score()
        document.querySelector(".winner__text").innerHTML = "It's a tie."
    }

    else{
        comPoints++
        score()
        document.querySelector(".winner__text").innerHTML = "Comp wins!"
    }

    // refresh
    refreshComp()
}

// reset function
function reset(){
    comPoints = 0
    userPoints = 0
    score()
}

// rules function
function rules(){
    alert("Rock wins against scissors, Scissors win against paper and Paper wins against rock.")
}