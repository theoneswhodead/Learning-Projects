const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', ( )=> {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });

  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    //computer options

    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function() {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
      });
    });

  }; 

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
    }

    if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        winner.textContent = 'Player Wins';
        return;
      }else {
        winner.textContent = 'Computer Wins';
        return;
      }
    }
  }

  //is call all the inner functions
  startGame();
  playMatch();

};


//start the game

game();