
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

// set bg color to selected random alphabet
function setBGColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}
// remove bg color 
function removeBGColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300');
}

// score update 
function getTextElementById (elementId){
    const element = document.getElementById(elementId);
   const elementText = element.innerText;
   const value = parseInt(elementText);
   return value; 
}
// set update score
function setUpdateScoreAndLifeById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value; 
}

function getARandomAlphabet (){
    // get or create random alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between o to 43
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
   
    const alphabet = alphabets[index];

    // console.log(index,alphabet);
    return alphabet;
}