// CONSTANTS--------------------------------------------------------------------------
const round1 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab'],
    'combos': ['10 Jab-Cross, 20 Jab-Cross... up to 50 Jab-Cross, then 5 burpees', 
                'Jab-Cross',
                'Jab-Cross-Cross',
                'Jab-Jab-Cross-Cross',
                'Jab-Jab-Cross',
                '4 Jab-Cross, then reset',
                'Jab-Cross-Body Cross',
                'Body Jab-Jab-Cross',
                'Jab-Cross-Jab-Cross, reset',
                'Jab-Cross, up to 6 then reset',
                'Cross-Jab-Cross',
                'Jab-Cross, reset, then Jab-Cross Jab-Cross',
                'Jab-Cross-Jab',
                'Jab-Jab-Cross 5x then 2 burpees',
                'Jab-Cross 10x power, then 10x speed',
                'Jab-Cross 10, 20...50, 2 burpees, then regular Jab-Cross',
                'Jab,Cross, Jab-Cross, then Jab,Jab,Cross,Cross, then Jab-Cross-Jab-Cross, up to 5 individual, then 10 jumping jacks']
}

const round2 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos':  ['Jab, Left-Body-Hook, Right-Body-Hook, Left-Uppercut, Cross',
                'Cross, Left-Hook, Body-Cross, Right-Hook',
                'Cross, Left-Uppercut, Left-Hook, Right-Hook, Right-Spinning-Backfist',
                'Right-Uppercut, Left-Hook, Right-Hook, Left-Uppercut',
                'Jab, Cross, Left-Hook, Right-Hook',
                'Cross, Right-Hook, Left-Uppercut, Left-Hook',
                'Right-Uppercut, Right-Hook, Left-Hook',
                'Jab, Right-Hook, Jab, Cross',
                'Right-Body-Hook, Right-Head-Hook, Left-Head-Hook',
                'Left-Uppercut, Right-Uppercut, Left-Hook, Right-Uppercut',
                'Jab, Cross, Left-Hook, Right-Hook',
                'Right-Hook, Jab, Cross, Superman',
                'Right-Body-Hook, Jab, Jab, Cross',
                'Jab, Cross, Left-Uppercut, Left-Hook',
                'Jab, Cross, Left-Uppercut, Right-Body-Hook, Left-Head-Hook',
                'Cross, Left-Hook, Left-Head-Hook, Cross',
                'Cross, Right-Hook, Left-Uppercut, Left-Hook',
                'Cross, Left-Uppercut, Left-Hook, Cross, halfway through double up',
                'Jab, Cross, Body-Cross, Left-Hook',
                'LU, Right Body-Hook, Body Jab, Right-Uppercut',
                'Right-Body-Hook, Jab, Cross, Jab, Cross, Left-Body-Hook',
                'Cross, Left-Hook, Left-Uppercut, Right-Hook',
                'Jab, Left-Hook, Right-Hook, Right-Head-Hook',
                'Cross, Left-Hook, Right-Uppercut, Left-Hook',
                'Jab, Cross, Left-Hook, Right-Uppercut ',
                'Left-Body-Hook, Right-Uppercut, body jab, Cross',
                'Cross, Left-Body-Hook, Right-Head-Hook',
                'Cross, Jab, Jab, Right-Hook ',
                'Right-Uppercut, Jab, Cross, Left-Body-Hook',
                'Right-Hook, Left-Hook, Right-Hook, Left-Uppercut',
                'Right-Uppercut, Left-Uppercut, Cross, Left-Uppercut',
                'Jab, Jab, Cross, Left-Hook ',
                'Right-Uppercut, Left-Hook, Right-Hook, Left-Uppercut',
                'Cross, Left-Uppercut, Left-Uppercut, Right-Hook',
                'Cross, Left-Body-Hook, Left-Head-Hook, Cross',
                'Cross, Left-Hook, Right-Hook',
                'Cross, Left-Body-Hook, Right-Uppercut, Right-Body-Hook ',
                'Left-Body-Hook, Right-Uppercut, Right-Uppercut, Left-Uppercut ',
                'Right-Body-Hook, Jab, Cross, Left-Head-Hook '
    ]
}

const round3 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['Cross, Left-Body-Hook, Left-Front-Kick (front kick), Right-Front-Kick',
               'Left-Roundhouse, Cross, Left-Uppercut, Cross, Left-Roundhouse',
               'Left-Front-Kick, Jab, Right-Hook, Left-Hook, Right-Side-Kick',
               'Left-Uppercut, Right-Hook, Left-Front-Kick, Right-Roundhouse',
               'Jab, Right-Uppercut,LU,Right-Roundhouse',
               'Jab-Cross, Right-Hook, Left-Front-Kick, squat, Right-Front-Kick',
               'Jab, Cross,Jab, Left-Hook, Right-Roundhouse ',
               'Cross, Left-Hook, Cross, Left-Front-Kick, Left-Side-Kick',
               'Left-Front-Kick, Jab-Cross, Left-Body-Hook, Right-Front-Kick',
               'Left-Uppercut, Cross, Left-Roundhouse, Right-Uppercut, Left-Hook',
               'Cross, Left-Uppercut, Right-Hook, Left-Front-Kick, Right-Side-Kick',
               'Right-Front-Kick, Jab, Right-Uppercut, Left-Uppercut, Right-Front-Kick',
               'Left-Front-Kick, Left-Front-Kick, Right-Uppercut, Left-Uppercut, Left-Body-Hook',
               'Cross, Left-Hook, Right-Hook, Left-Roundhouse',
               'LU,Right-Uppercut,Left-Body-Hook,Right-Roundhouse,Right-Roundhouse',
               'Right-Uppercut, Jab, Right-Roundhouse, Left-Front-Kick',
               'Jab, Cross, Right-Uppercut, Left-Front-Kick, squat, Right-Front-Kick, squat ',
               'Left-Front-Kick, Jab,Cross, Left-Hook,Right-Side-Kick',
               'Left-Front-Kick,Cross, Left-Hook,Right-Roundhouse',
               'Right-Uppercut,Jab,C ,Left-Roundhouse',
               'Left-Roundhouse, Jab, Cross, Left-Hook, Right-Head-Hook',
               'Right-Hook, Cross, Left-Hook, Right-Front-Kick, Right-Front-Kick',
               'Left-Front-Kick, Right-Hook, Left-Head-Hook, Right-Front-Kick, Right-Front-Kick',
               'Left-Side-Kick, Right-Hook, Left-Uppercut, Right-Front-Kick ',
               'Left-Uppercut, Right-Hook, Cross, Left-Roundhouse',
               'Right-Roundhouse, Cross, body jab, Right-Uppercut',
               'Left-Head-Hook, Right-Front-Kick, Right-Head-Hook, Left-Front-Kick ',
               'Left-Hook, Right-Uppercut, Left-Front-Kick, Right-Front-Kick, Left-Side-Kick ',
               'Left-Uppercut, Cross, Left-Front-Kick, squat, Right-Front-Kick',
               'Right-Front-Kick, Jab, Jab, Right-Hook, Right-Spinning-Backfist ',
               'Left-Front-Kick, Jab, Cross, Left-Uppercut, Right-Side-Kick',
               'Left-Hook, Cross, Left-Front-Kick, Cross, Left-Front-Kick ',
               'Left-Uppercut, Right-Hook, Left-Front-Kick, Right-Roundhouse ',
               'Right-Front-Kick, Right-Roundhouse, Jab, Cross, superman ',
               'Right-Uppercut, Jab, Right-Head-Hook, Left-Front-Kick',
               'Jab, Right-Uppercut, Left-Hook, Right-Side-Kick ',
               'Jab, Right-Hook, Left-Side-Kick, Left-Front-Kick',
               'Right-Roundhouse, Left-Uppercut, Right-Hook, Left-Uppercut, Right-Roundhouse',
               'Cross, Left-Uppercut, Right-Head-Hook, Left-Front-Kick, Right-Front-Kick ']
}
const round4 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['Right-Roundhouse (roundhouse), Right-Spinning-Backfist (spinning back fist), Jab-Cross, Left-Hook',
               'Jab, Right-Uppercut, Left-Hook, Right-Roundhouse, Left-Front-Kick, Right-Roundhouse',
               'Jab-Cross, Left-Hook, Right-Front-Kick, L spinning back',
               'Left-Roundhouse, Right-Front-Kick, Jab, Right-Uppercut, Left-Hook ',
               'cross, Left-Hook,Right-Hook, Left-Roundhouse',
               'Right-Front-Kick, Cross, Left-Uppercut, Left-Hook, Right-Front-Kick',
               'Right-Front-Kick, Left-Front-Kick, Cross, Left-Head-Hook, Right-Body-Hook',
               'Right-Front-Kick,Right-Side-Kick, Jab-jab, Right-Uppercut',
               'Jab-Cross, Right-Hook, Left-Roundhouse, LSBF ',
               'Right-Roundhouse, Jab-Cross, Left-Uppercut, Right-Roundhouse',
               'Right-Uppercut, Left-Hook, Right-Roundhouse, Left-Side-Kick',
               'Jab, BCross, Cross, Left-Front-Kick, Left-Front-Kick',
               'Jab, Jab-Cross, Left-Hook, Right-Roundhouse, Right-Roundhouse',
               'Left-Front-Kick, Cross, Left-Hook, Right-Roundhouse, Left-Roundhouse',
               'Left-Roundhouse, jab cross jab Right-Hook,Left-Roundhouse',
               'Right-Roundhouse, Left-Hook , Right-Hook, Left-Uppercut, Right-Front-Kick',
               'Right-Front-Kick, Cross, Left-Uppercut, Left-Hook, Right-Front-Kick',
               'Jab, Right-Hook,Cross,Left-Side-Kick,Right-Front-Kick',
               'Right-Body-Hook, Jab,Cross,Left-Roundhouse,Right-Front-Kick ',
               'low Right-Roundhouse, middle Right-Roundhouse,LU,Right-Uppercut, Left-Hook ',
               'Cross, Left-Hook, Right-Uppercut, Left-Front-Kick, Right-Front-Kick',
               'Left-Front-Kick, Jab, Right-Uppercut, Right-Uppercut, Left-Front-Kick',
               'Cross, Left-Hook, Cross, Left-Roundhouse, Left-Roundhouse, Right-Front-Kick',
               'Jab, Jab, Right-Hook, Left-Roundhouse, Right-Side-Kick',
               'Jab, Jab, Right-Body-Hook, Right-Spinning-Backfist, Right-Roundhouse ',
               'Right-Front-Kick, Right-Hook, Left-Uppercut, Cross, Left-Roundhouse ',
               'Jab, Right-Uppercut, Left-Hook, Right-Roundhouse, Left-Front-Kick ',
               'Right-Roundhouse, Left-Front-Kick, Jab, Cross, Left-Body-Hook ',
               'Left-Front-Kick, Jab, Cross, Left-Hook, Right-Roundhouse ',
               'Right-Uppercut, Jab, Cross, Left-Front-Kick, Right-Roundhouse ',
               'Cross, Right-Uppercut, Left-Hook, Right-Front-Kick, Left-Side-Kick',
               'Right-Body-Hook, Jab, Left-Uppercut, Right-Front-Kick, Left-Roundhouse',
               'Left-Roundhouse, Right-Front-Kick, Jab, Right-Uppercut, Left-Hook ',
               'body Cross, Left-Head-Hook, Right-Head-Hook, Left-Roundhouse, Left-Roundhouse ',
               'Right-Roundhouse, Left-Hook, Right-Hook, Left-Uppercut, Right-Front-Kick ',
               'Right-Front-Kick, Left-Side-Kick, Right-Head-Hook, Left-Head-Hook',
               'Right-Body-Hook, Left-Uppercut, Right-Front-Kick, Right-Side-Kick ',
               'Right-Uppercut, Left-Hook, Cross, Left-Roundhouse, Right-Front-Kick ',
               'Right-Front-Kick, Left-Roundhouse, Body Jab, Right-Hook, Left-Head-Hook '
    ]
}

const round5 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['Right-Hook, Right-Uppercut, Left-Roundhouse, Right-Front-Kick, Left-Roundhouse',
               'Cross, Left-Front-Kick, Cross, Left-Hook, Right-Front-Kick',
               'Right-Roundhouse, Left-Side-Kick, Jab-CrossJab, Right-Body-Hook',
               'Left-Uppercut, Right-Uppercut, Left-Uppercut, Right-Uppercut, Left-Front-Kick, Right-Front-Kick, Left-Roundhouse (halfway through, change those to hooks)',
               'Right-Roundhouse,Left-Front-Kick,LU, cross, Left-Roundhouse',
               'Cross, Left-Front-Kick, Cross, Right-Uppercut, Left-Front-Kick, Right-Roundhouse',
               'Right-Uppercut, Left-Body-Hook, Cross, Left-Roundhouse, LSBF',
               'jab-cross, Left-Hook,Right-Roundhouse,Left-Side-Kick',
               'Right-Body-Hook, Left-Head-Hook, Right-Front-Kick, squat, Left-Front-Kick, squat, Right-Front-Kick, squat',
               'Right-Uppercut, Left-Uppercut, Cross, Left-Roundhouse, Right-Roundhouse',
               'Right-Roundhouse, Left-Roundhouse, Left-Front-Kick, Cross, Left-Head-Hook',
               'Cross, Left-Front-Kick, Right-Roundhouse, Jab, Right-Roundhouse',
               'Left-Hook, Right-Hook, Jab, Right-Uppercut, Left-Roundhouse, Left-Roundhouse',
               'Jab, Right-Uppercut, Left-Roundhouse, Right-Roundhouse, Right-Roundhouse',
               'Left-Body-Hook Right-Roundhouse, Left-Front-Kick,Right-Front-Kick, superman ',
               'Jab-Cross, Cross, Left-Roundhouse',
               'Cross, Left-Front-Kick, Cross, Right-Hook, Left-Front-Kick, Right-Roundhouse',
               'Jab,Right-Roundhouse, Left-Hook, Right-Uppercut, Left-Front-Kick ',
               'Right-Roundhouse,Jab,Cross,Left-Hook,Cross,Left-Roundhouse ',
               'Jab, Cross, Right-Uppercut,low Left-Roundhouse, middle Left-Roundhouse',
               'Cross, Left-Uppercut, Right-Hook, Left-Roundhouse, LSBF ',
               'Left-Hook, Right-Roundhouse, Right-Front-Kick, Left-Front-Kick ',
               'Left-Hook, Cross, Jab, Right-Roundhouse, Right-Roundhouse, Left-Front-Kick, Left-Front-Kick',
               'Cross, Left-Hook, Right-Roundhouse, Left-Uppercut, C ',
               'Left-Hook, Right-Hook, Left-Front-Kick, Right-Hook, Left-Hook, Right-Front-Kick ',
               'Cross, Left-Front-Kick, Cross, Left-Hook, Right-Roundhouse',
               'Cross, Left-Uppercut, Right-Head-Hook, Left-Roundhouse ',
               'Body-Jab, Right-Uppercut, Left-Uppercut, Right-Side-Kick, Left-Roundhouse, Right-Front-Kick ',
               'Left-Uppercut, Right-Hook, Left-Roundhouse, Right-Front-Kick, Superman ',
               'Left-Roundhouse, LSBF, Cross, Left-Body-Hook ',
               'Right-Roundhouse, Left-Uppercut, Right-Uppercut, Left-Uppercut, Right-Uppercut, Left-Roundhouse ',
               'Jab, Cross, Left-Hook, Right-Roundhouse, Right-Front-Kick ',
               'Left-Uppercut, Right-Uppercut, Left-Uppercut, Right-Uppercut, Left-Front-Kick, Right-Front-Kick, Left-Roundhouse halfway through, change Uppercuts to Hooks',
               'Jab, Cross, Cross, Left-Front-Kick, Right-Roundhouse ',
               'Jab, Cross, Cross, Left-Roundhouse ',
               'Left-Uppercut, Right-Hook, Left-Front-Kick, Right-Roundhouse, Left-Roundhouse ',
               'Left-Side-Kick, Right-Roundhouse, Jab, Cross, Left-Hook ',
               'Left-Uppercut, Right-Uppercut, Left-Roundhouse, Right-Roundhouse halfway through, double up on Uppercuts',
               'BCross, Right-Uppercut, Left-Hook, Right-Roundhouse, Left-Front-Kick '
    ]
}

const round6 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['Jab-Cross, Jab-Cross, Left-Roundhouse, Right-Roundhouse, burpee',
               'Jab-Cross, Right-Uppercut, Left-Front-Kick, Left-Side-Kick',
               'Right-Spinning-Backfist, Right-Roundhouse, Left-Roundhouse, Left-Roundhouse, Right-Side-Kick',
               'Right-Roundhouse, Left-Front-Kick, Right-Side-Kick, Jab-Cross, duck, Cross',
               'Right-Roundhouse,Left-Roundhouse, Right-Front-Kick, Superman',
               'Right-Uppercut, Jab, Left-Hook, Right-Front-Kick, Left-Roundhouse',
               'Right-Roundhouse, Right-Roundhouse, Jab-Cross, Jab-Cross, Left-Roundhouse, Left-Roundhouse',
               'cross, LU,Right-Side-Kick,Left-Roundhouse',
               'Left-Hook, Cross, Left-Hook, Right-Side-Kick, Left-Side-Kick',
               'Left-Front-Kick, Right-Roundhouse, Right-Roundhouse, Left-Roundhouse, Left-Roundhouse, Right-Front-Kick',
               'Left-Uppercut, Cross, Right-Head-Hook, Left-Roundhouse',
               'Jab-Cross, Left-Roundhouse, Right-Front-Kick, Right-Front-Kick, SUPER',
               'Jab, Right-Roundhouse, Jab-Cross, Left-Roundhouse, Right-Front-Kick, Right-Front-Kick',
               'Right-Front-Kick, Left-Roundhouse, Right-Roundhouse, Left-Front-Kick, jump squat',
               'cross,Left-Hook, Right-Uppercut,Left-Uppercut,Right-Roundhouse,Left-Roundhouse',
               'Left-Roundhouse, Right-Roundhouse, Jab-CrossJab, Right-Hook',
               'Right-Uppercut, Jab, Left-Hook, Right-Front-Kick, Left-Roundhouse ',
               'Left-Hook,Cross,Left-Side-Kick,Right-Side-Kick,Left-Roundhouse',
               'Right-Hook,Left-Hook, Cross, Left-Roundhouse, Right-Roundhouse,Left-Roundhouse ',
               'Jab,Right-Uppercut,LU,Right-Roundhouse,Left-Roundhouse for half, then Jab,Right-Uppercut,LU, Low Right-Roundhouse, Right-Roundhouse, Low Left-Roundhouse,Left-Roundhouse',
               'Right-Roundhouse, Right-Roundhouse, Jab-Cross, Left-Roundhouse, Left-Roundhouse (add another Jab-Cross every minute)',
               'Left-Roundhouse, LSBF, Left-Roundhouse, Right-Front-Kick',
               'Right-Roundhouse, Cross, Left-Hook, Right-Hook, Left-Roundhouse ',
               'Left-Front-Kick, Right-Roundhouse, Jab, Cross, Left-Roundhouse ',
               'Right-Roundhouse, Left-Roundhouse, Right-Front-Kick, Superman',
               'Jab-Cross, body cross, Left-Roundhouse, Right-Roundhouse ',
               'Jab, Cross, Left-Head-Hook, Right-Head-Hook, Left-Front-Kick, Right-Front-Kick',
               'Right-Front-Kick, Right-Roundhouse, Jab, Jab, Cross, Left-Front-Kick, Left-Roundhouse ',
               'Left-Front-Kick, Left-Side-Kick, Jab, Cross, Right-Front-Kick, Left-Roundhouse',
               'Jab, Cross, Right-Roundhouse, Left-Roundhouse, Right-Roundhouse ',
               'Right-Front-Kick, Left-Side-Kick, Right-Side-Kick, Left-Front-Kick, Jab, Right-Uppercut ',
               'Jab, Right-Hook, Cross, Left-Front-Kick, squat, Right-Front-Kick ',
               'Right-Roundhouse, Left-Front-Kick, Right-Roundhouse, Jab, Cross, C ',
               'Right-Hook, Jab, Cross, Jab, Cross, Left-Hook, Right-Roundhouse, Left-Roundhouse ',
               'Left-Roundhouse, Right-Roundhouse, Jab, Cross, Jab, Right-Body-Hook ',
               'Right-Front-Kick, Right-Side-Kick for half, then Left-Front-Kick, Left-Side-Kick ',
               'Left-Roundhouse, Right-Side-Kick, Left-Side-Kick, Right-Hook, Left-Hook ',
               'Jab, Cross, Right-Uppercut, Left-Front-Kick, Left-Roundhouse ',
               'Left-Front-Kick, BCross, Jab, Right-Body-Hook, Right-Front-Kick (squat after for added challenge) '
    ]

}

const speedRound = {
    'combos': ['10 hooks, 10 jumping jacks',
               'hooks for half, then squats with front kicks',
               'Front kicks and squats',
               'Uppercuts',
               'body hooks for half, then Uppercuts ',
               'Freestyle',
               '10 Jab-Cross burpee',
               '20 hooks, one burpee',
               '2 jump squats 10 BH, then 2 jumping jacks 10 UCross, ',
               'non-stop UCs, non stop body hooks',
               '10 hooks, 1 burpee, then 10 UC 3 jump squats',
               'Nonstop Jab-Cross, then nonstop FK',
               '10 Jab-Cross, then burpee, ',
               'Uppercuts for half, then Hooks',
               '20 Jab-Cross 2 burpees for half, then 20 hooks 2 froggies',
               'high knees w Jab-Cross for 30, then hooks',
               'Left-Front-Kick,Left-Side-Kick for half, then Right-Front-Kick,Right-Side-Kick',
               'Jab-Cross,Left-Hook,Right-Hook 5 times, then 3 jump squats ',
               'Hooks',
               'non-stop Jab-Cross with high knees ',
               'Freestyle but double up on punches',
               '20 Jab-Cross, 20 High Knees',
               'nonstop Jab-Cross for half, then nonstop hooks ',
               '10 Jab-Cross burpee',
               '10 BH, 10 HH ',
               'nonstop J for half, then nonstop C ',
               'nonstop Jab-Cross for half, then alternating Right-Roundhouse and Left-Roundhouse ',
               'Nonstop UCs for half, then alternating Front Kicks',
               'Alternating Front Kicks',
               'non-stop hooks, non-stop UCs',
               'power hooks',
               'Alternating Front Kicks, one quick, one powerful for each leg'
    ]
}

// CACHED ELEMENT REFERENCES-----------------------------------------------------------
// const r1FirstPrintHere = document.getElementById('round1FirstResults')
// const r1SecondPrintHere = document.getElementById('round1SecondResults')
// const r1ThirdPrintHere = document.getElementById('round1ThirdResults')
// const r2PrintHere = document.getElementById('round2Results')
// const r3PrintHere = document.getElementById('round3Results')
// const r4PrintHere = document.getElementById('round4Results')
// const r5PrintHere = document.getElementById('round5Results')
// const r6PrintHere = document.getElementById('round6Results')
// const speedRoundPrintHere = document.getElementById('speedRoundResults')
const allRoundPrintHere = document.getElementById('allRoundResults')
// const generateRound1FirstResults = document.getElementById('generateRound1FirstResults')
// const generateRound1SecondResults = document.getElementById('generateRound1SecondResults')
// const generateRound1ThirdResults = document.getElementById('generateRound1ThirdResults')
// const generateRound2Results = document.getElementById('generateRound2Results')
// const generateRound3Results = document.getElementById('generateRound3Results')
// const generateRound4Results = document.getElementById('generateRound4Results')
// const generateRound5Results = document.getElementById('generateRound5Results')
// const generateRound6Results = document.getElementById('generateRound6Results')
// const generateSpeedRoundResults = document.getElementById('generateSpeedRoundResults')
const generateAllRoundResults = document.getElementById('generateAllRoundResults')


// EVENT LISTENERS--------------------------------------------------------------------------


// generateRound1FirstResults.addEventListener('click', renderRound1First)
// generateRound1SecondResults.addEventListener('click', renderRound1Second)
// generateRound1ThirdResults.addEventListener('click', renderRound1Third)
// generateRound2Results.addEventListener('click', renderRound2)
// generateRound3Results.addEventListener('click', renderRound3)
// generateRound4Results.addEventListener('click', renderRound4)
// generateRound5Results.addEventListener('click', renderRound5)
// generateRound6Results.addEventListener('click', renderRound6)
// generateSpeedRoundResults.addEventListener('click', renderSpeedRound)
generateAllRoundResults.addEventListener('click', renderAllRounds)




// FUNCTIONS-------------------------------------------------------------------------------
function randomizeRound(round){
   return Math.floor(Math.random() * Math.floor(round.combos.length))  
}




// render functions------

// function renderRound1First(){
//     r1FirstPrintHere.inneRight-HookTML = `The first part of round one is ${round1.combos[randomizeRound(round1)]}.`
// }
// function renderRound1Second(){
//     r1SecondPrintHere.inneRight-HookTML = `The second part of round one is ${round1.combos[randomizeRound(round1)]}.`
// }
// function renderRound1Third(){
//     r1ThirdPrintHere.inneRight-HookTML = `The third part of round one is ${round1.combos[randomizeRound(round1)]}.`
// }

// function renderRound2(){
//     r2PrintHere.inneRight-HookTML = `Round two is ${round2.combos[randomizeRound(round2)]}.`
// }
// function renderRound3(){
//     r3PrintHere.inneRight-HookTML = `Round three is ${round3.combos[randomizeRound(round3)]}.`
// }
// function renderRound4(){
//     r4PrintHere.inneRight-HookTML = `Round four is ${round4.combos[randomizeRound(round4)]}.`
// }
// function renderRound5(){
//     r5PrintHere.inneRight-HookTML = `Round five is ${round5.combos[randomizeRound(round5)]}.`
// }
// function renderRound6(){
//     r6PrintHere.inneRight-HookTML = `Round six is ${round6.combos[randomizeRound(round6)]}.`
// }
// function renderSpeedRound(){
//     speedRoundPrintHere.inneRight-HookTML = `Speed round is ${speedRound.combos[randomizeRound(speedRound)]}.`
// }

function renderAllRounds(){

    allRoundPrintHere.inneRight-HookTML = 
    `<b>R1- first half:</b> ${round1.combos[randomizeRound(round1)]}<br />
    <b>R1- second half:</b>${round1.combos[randomizeRound(round1)]}<br />
    <b>R2:</b> ${round2.combos[randomizeRound(round2)]}<br />
    <b>R3:</b> ${round3.combos[randomizeRound(round3)]}<br />
    <b>R4:</b> ${round4.combos[randomizeRound(round4)]}<br />
    <b>R5: </b>${round5.combos[randomizeRound(round5)]}<br />
    <b>R6: </b>${round6.combos[randomizeRound(round6)]}<br />
    <b>Speed: </b>${speedRound.combos[randomizeRound(speedRound)]}`
}