function getComputerChoice() {

    return Math.ceil(3*Math.random())

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'draw'
    }

    if (playerSelection == computerSelection + 1) {
        return 'win'
    }

    else if(playerSelection == 1 && computerSelection == 3) {
        return 'win'
    }

    else {
        return 'lose'
    }
}

function game(playerSelection) {

    const computerSelection = getComputerChoice()

    outcome = playRound(playerSelection, computerSelection)
    console.log(outcome)

}

const rock = document.querySelector('.rock')
rock.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'lightblue')
    let playerSelection = 1
    game(playerSelection)
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'lightblue')
    let playerSelection = 2
    game(playerSelection)
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'lightblue')
    let playerSelection = 3
    game(playerSelection)
})

