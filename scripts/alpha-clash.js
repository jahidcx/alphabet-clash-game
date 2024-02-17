 
//  function playNow (){
//    // hide home section
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    // show the play section
//    const playSection = document.getElementById('play-section');
//    playSection.classList.remove('hidden');

//  } 

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
   hideElementById('home-screen');
   showElementById('play-section');
   continueGame();
}