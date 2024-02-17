
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

function getARandomAlphabet (){
    // get or create random alphabet array
    const alphabetString = 'asdylheiosdnvfjesdhnvbxmzwopuinqyiombvuiafrh';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between o to 43
    const randomNumber = Math.random()*43;
    const index = Math.round(randomNumber);
   
    const alphabet = alphabets[index];

    // console.log(index,alphabet);
    return alphabet;
}