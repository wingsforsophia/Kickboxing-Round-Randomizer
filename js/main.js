// CONSTANTS--------------------------------------------------------------------------
const round1 = {
    'punches': ['Jab', 'Cross'],
    'combos': ['10 Jab-Cross, 20 Jab-Cross... up to 50 Jab-Cross, then 5 burpees', 
                'Jab-Cross',
                'Jab-Cross-Cross',
                'Jab-Jab-Cross-Cross',
                'Jab-Jab-Cross',
                '4 Jab-Cross, then reset',
                'Jab-Cross-Body Cross',
                'Body Jab-Jab-Cross',
                'Jab-Cross-Jab-Cross, reset',
                '']
}

const currentRound1 = []

console.log(currentRound1)



// CACHED ELEMENT REFERENCES-----------------------------------------------------------
const r1PrintHere = document.getElementById('round1Results')
const generateRound1Results = document.getElementById('generateRound1Results')


// EVENT LISTENERS--------------------------------------------------------------------------


generateRound1Results.addEventListener('click', renderRound1)





// FUNCTIONS-------------------------------------------------------------------------------
function randomizeRound(round){
   return Math.floor(Math.random() * Math.floor(round.combos.length))  
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
    r1PrintHere.innerHTML = `The first round is ${round1.combos[randomizeRound(round1)]} for half, then ${round1.combos[randomizeRound(round1)]}.`
}




