 
//  function playNow (){
//    // hide home section
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    // show the play section
//    const playSection = document.getElementById('play-section');
//    playSection.classList.remove('hidden');

//  } 

function handleKeyBoardButtonPress (event){
   const playerPressed = event.key;
   console.log(playerPressed );


   // esc the game if press Esc
   if(playerPressed === 'Escape'){
      gameOver();
   }

   // get the expected to press
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText; 
   const expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed, expectedAlphabet);


   // check match or not
   if(playerPressed === expectedAlphabet){
      console.log('You get a point');

      const currentScore = getTextElementById('current-score');
      const updatedScore = currentScore +1;
      setUpdateScoreAndLifeById  ('current-score', updatedScore);




      // update score
      // // 1. get the current score
      // const currentScoreElement = document.getElementById('current-score');
      // const currentScoreText = currentScoreElement.innerText;
      // const currentScore = parseInt(currentScoreText);

      // // increase by 1
      // const newScore = currentScore + 1;
      // console.log(newScore);

      // // display new score
      // currentScoreElement.innerText = newScore ;  

      // play agian
      removeBGColorById(expectedAlphabet);
      continueGame ();
   }
   else{
      console.log('You lost a life.');

      const currentLife = getTextElementById('current-life');
      const updatedLife = currentLife - 1;
      setUpdateScoreAndLifeById ('current-life', updatedLife);

      if(updatedLife === 0){
         gameOver ();
      }






      // update life
      // 1.get the current life
      // const currentLifeElement = document.getElementById('current-life');
      // const currentLifeText = currentLifeElement.innerText;
      // const currentLife = parseInt(currentLifeText);

      // // decrease by 1
      // const newLife = currentLife - 1;

      // // display new life 
      // currentLifeElement.innerText = newLife;  
   }

}
// capture keyboard key press
document.addEventListener('keyup',handleKeyBoardButtonPress )



function continueGame (){
   const alphabet = getARandomAlphabet();
   console.log('Your alphabet:', alphabet);

   // set randomly generated  alphabet on screen 
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet; 

   // set bg color 
   setBGColorById(alphabet); 

}

function play(){
   // hide everything without play ground
   hideElementById('home-screen');
   hideElementById('final-score');
   showElementById('play-section');

   // reset life and score
   setUpdateScoreAndLifeById('current-life', 5);
   setUpdateScoreAndLifeById('current-score', 0);
   continueGame();
}

function gameOver (){
   hideElementById('play-section');
   showElementById('final-score');

   // update final score
   // 1. get the final score
   const lastScore = getTextElementById('current-score');
   console.log(lastScore);
   // set the final score
   setUpdateScoreAndLifeById('last-score',lastScore);

   // clear the last selected alphabet highlight
   const currentAlphabet = getElementTextById('current-alphabet');
   removeBGColorById(currentAlphabet);

}