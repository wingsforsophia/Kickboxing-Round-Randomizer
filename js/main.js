// CONSTANTS--------------------------------------------------------------------------
const round1 = {
    'punches': ['Jab', 'Cross'],
    'combos': ['Jab-Jab-Cross', 'Jab-Cross-Cross', 'Jab-Jab-Cross-Cross', 'Jab-Cross 4 times fast, then reset', 'Jab-Cross, Jab-Jab-Cross-Cross']
}

const currentRound1 = []

console.log(currentRound1)



// CACHED ELEMENT REFERENCES-----------------------------------------------------------
const r1PrintHere = document.getElementById('round1Results')
const generateRound1Results = document.getElementById('generateRound1Results')


// EVENT LISTENERS--------------------------------------------------------------------------


generateRound1Results.addEventListener('click', renderRound1)





// FUNCTIONS-------------------------------------------------------------------------------
function randomizeRound1(){
   return Math.floor(Math.random() * Math.floor(round1.combos.length))  
}

// function checkRound1(){
//     let x = round1.combos.randomizeRound1()
//     let y = round1.combos.randomizeRound1()
//     if (x = y){
//         round1.combos.randomizeRound1()
//     } else {
//         return y
//     }
// }





// render functions------

function renderRound1(){
    r1PrintHere.innerHTML = `The first round is ${round1.combos[randomizeRound1()]} for half, then ${round1.combos[randomizeRound1()]}.`
}




