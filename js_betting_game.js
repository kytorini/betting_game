function bettingGame() {
  var bankroll = 100;

  alert("Well, You have $100 to begin with, \n Let's place a bet between $5 and $10, \n then to guess a number between 1 and 10. \nIf you guessed the number I'm thinking of, \nyou get the double of your bet. \nIf you're 1 number off, I'll let you keep your money.\nElse, you lose your bet! \n\nGame ends when you have no more money in your bank.");

  

  while (bankroll > 0){
    alert("You currently have " + bankroll + " in your account!")
    var userChoice = prompt("Let's pick a number!");
    var userBet = prompt("How much would you like to bet?")
    var compNum = Math.floor((Math.random() * 10) + 1);

    bankroll -= userBet;
    
    if (userChoice == compNum){
      bankroll += userBet * 2;
      alert("Wow, right on! Here's " + userBet*2 + " as promised!")
    } else if ((userChoice + 1) == compNum || (userChoice - 1) == compNum){
      bankroll += userBet;
      alert("Close! I was thinking of " + compNum + ". Here's your " + userBet + " back!")
    } else {
      alert("I was ACTUALLY thinking of " + compNum + ". So you're waaay off.\nToo Bad, So Sad.\nI'm keeping your bet!")
    }
  }

}


bettingGame();