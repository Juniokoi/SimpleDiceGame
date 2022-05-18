const playerOneImg = document.querySelector( '.img1' );
const playerTwoImg = document.querySelector( '.img2' );
const reloadBtn = document.getElementById( 'reload' );

let playerOne, playerTwo = [];


function setDiceNumber () {
  const diceNumber = () => Math.floor( ( Math.random() * 6 ) + 1 );
  playerOne = [ diceNumber(), "Player 1" ];
  playerTwo = [ diceNumber(), "Player 2" ];
}

function changeDice () {
  playerOneImg.setAttribute( 'src', `./images/dice${playerOne[ 0 ]}.png` );
  playerTwoImg.setAttribute( 'src', `./images/dice${playerTwo[ 0 ]}.png` );
}




function handleWinner () {
  if ( playerOne[ 0 ] > playerTwo[ 0 ] ) {
    return `${playerOne[ 1 ]} wins!`;
  }
  if ( playerOne[ 0 ] === playerTwo[ 0 ] ) {
    return "It's a Draw!";
  }
  return `${playerTwo[ 1 ]} wins!`;
}

function changeHeader () {
  document.querySelector( 'h1' ).textContent = handleWinner();
}
function changeButton () {
  document.querySelector( 'button' ).textContent = "Play again!";
}


function playGame () {
  setDiceNumber();
  changeDice();
  changeHeader();
  changeButton();
}
