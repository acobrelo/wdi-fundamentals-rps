////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove || getInput();

}

function getComputerMove(computerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove) {
        case 'rock':
            if (computerMove === 'rock') {
                winner = 'tie';
            } else if (computerMove === 'paper') {
                winner = 'computer';
            } else {
                winner = 'player';
            }
            break;
        case 'paper':
            if (computerMove === 'paper') {
                winner = 'tie';
            } else if (computerMove === 'rock') {
                winner = 'player';
            } else {
                winner = 'computer';
            }
            break;
        case 'scissors':
            if (computerMove === 'scissors') {
                winner = 'tie';
            } else if (computerMove === 'paper') {
                winner = 'player';
            } else {
                winner = 'computer';
            }
            break;
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
console.log("Let's play Rock, Paper, Scissors");
    if (playerWins == 5 || computerWins == 5) {
        return getWinner + 'wins the game';
    } else if (playerWins < 5 && getWinner == 'player') {
        console.log('Player chose' + getPlayerMove + 'while Computer chose' + getComputerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        return playerWins += 1;
    } else if (computerWins < 5 && getWinner == 'computer') {
        console.log('Player chose' + getPlayerMove + 'while Computer chose' + getComputerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        return computerWins += 1;
    } else (playerWins < 5 && computerWins < 5 && getWinner == 'tie'); {
        console.log('Tie! Player chose' + getPlayerMove + 'while Computer chose' + getComputerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        return null;
    }
    return [playerWins, computerWins];
}