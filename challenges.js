

/*
3. Add another dice to the game, so that there are two dices now. the player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//declare variables
var scores, roundScore, activePlayer, gamePlaying;

init();

//challenge 1
var lastDice;

//challenge 2
var winningScore = 100;

//When ROLL DICE button is clicked this function gets called
document.querySelector('.btn-roll').addEventListener('click', function(){ 
    if(gamePlaying){
        
    // 1. Random Number generated for dice 
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        

        
    // 2. Display results of dice - cycle through images of dice corresponding to file names
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';
    
 
        
    // 3. Update the roundScore IF the rolled number was NOT a 1
          if(dice1 !== 1 && dice2 !== 1){
        
        //Add score
        roundScore += dice1;
        roundScore += dice2;
              
        //Set current score to roundScore
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        // If rolled number is 1    
        } else {        
            //Next player
            nextPlayer();
        }
        
        if(dice === 6  && lastDice === 6) {
            //Player looses score
            console.log('you rolled 2 sixes!');
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
         
        } else if(dice !== 1){   
        //Add score
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        } else {
            nextPlayer();
        }
        
        lastDice = dice; //Declare at end of function so value is held on next roll
        
    }
});
 

//When HOLD button is clicked this function gets called
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        
     //Add CURRENT score to GLOBAL score
     scores[activePlayer] += roundScore; 
    
     //Update the UI to reflect new GLOBAL score
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        //undefined, 0, null or "" are COERCED to false.
        //Anything else is COERCED to true
        if(input){
            winningScore = input;
        } else{
            winningScore - 100;
        }
        
        //Check if the player won the game   
        if(scores[activePlayer] >= winningScore){
        
        //Testing winner through console
            if(activePlayer === 0) {
               //display player 1 wins
                alert('Player 1 wins');
               }else{
               //display player 2 wins
                alert('Player 2 wins');
               }
      
        //Change player name to 'Winner' upon achieving a winning score
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        
        //Make dice disappear upon winning
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
        //Apply CSS styling under winner to change styling of player name upon winning
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
        //Disable dot displaying who is the activePlayer upon winning as game will be reset
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        //Turn gamePlaying to false - cannot keep playing after win
        gamePlaying = false;
        
        } else{
            
        //Next Player
        nextPlayer();
            
        }
      }    
   });

document.querySelector('.btn-new').addEventListener('click', init);

  function nextPlayer(){
           //Next player
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           
           //Set current score to 0 if 1 is rolled
           roundScore = 0;
           document.getElementById('current-0').textContent = 0;
           document.getElementById('current-1').textContent = 0;
           
           //Moves dot that shows who the current player is      
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
                 
           //Make dice invisible when active player is passed
           document.getElementById('dice-1').style.display = 'none';
           document.getElementById('dice-2').style.display = 'none';
  }

function init (){
            //define variables
            scores = [0,0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;

            //Make dice not appear
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
    

            //Set both players roundScores and current Scores to 0 - Have the UI reflect this
            document.getElementById('score-0').textContent = 0;
            document.getElementById('score-1').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
    
            //Reset 'Winner' text from last game to regular player names
            document.querySelector('#name-0').textContent = 'Player 1';
            document.querySelector('#name-1').textContent = 'Player 2';
    
            //remove winner CSS class from both players
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            
            //remove active CSS class from both player then apply it to Player 1
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');          
}
//function changeScore(){
//    console.log('click');
//    var newScore = document.getElementById('winning-Score').value;
//    console.log(newScore);
//    winningScore = newScore;
//    console.log(winningScore);
//} Part of my solution, commented out and saved for reference

   //CHALLENGE 3 - ADD NEW DICE IN UI - My attempt at solution, kept for ref
//    var dice2DOM = document.querySelector('.dice2');
//    diceDOM2.style.display = 'block';
//    diceDOM2.src = 'dice-' + dice2 +'.png';

    //CHALLENGE 3 - Addd another dice. If either roll 1, lose roundScore, change player
//    var dice2 = Math.floor(Math.random() * 6) + 1;      

