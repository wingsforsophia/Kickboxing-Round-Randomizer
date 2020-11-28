// CONSTANTS--------------------------------------------------------------------------
const round1 = {
    'punches': ['Jab', 'Cross'],
    'combos': ['Jab-Jab-Cross', 'Jab-Cross-Cross', 'Jab-Jab-Cross-Cross', 'Jab-Cross 4 times fast, then reset']
}


// CACHED ELEMENT REFERENCES-----------------------------------------------------------
const r1PrintHere = document.getElementById('round1Results')
const generateRound1Results = document.getElementById('generateRound1Results')


// EVENT LISTENERS--------------------------------------------------------------------------


generateRound1Results.addEventListener('click', renderRound1)





// FUNCTIONS-------------------------------------------------------------------------------
function randomizeRound1(){
   return Math.floor(Math.random() * Math.floor(round1.combos.length))  
}

function renderRound1(){
    r1PrintHere.innerHTML = `The first round is ${round1.combos[randomizeRound1()]} for half, then ${round1.combos[randomizeRound1()]}.`
}




