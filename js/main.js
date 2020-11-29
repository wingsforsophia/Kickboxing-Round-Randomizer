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
                'LU,RBodyHook, Body Jab, RU',
                'Right-Body-Hook, Jab, C, Jab, C, Left-Body-Hook',
                'C, Left-Hook, LUC, RH',
                'Jab, Left-Hook, RH, Right-Head-Hook',
                'C, Left-Hook, RUC, Left-Hook',
                'Jab, C, Left-Hook, RUC ',
                'Left-Body-Hook, RUC, body jab, C',
                'C, Left-Body-Hook, Right-Head-Hook',
                ' C, Jab, Jab, RH ',
                'RUC, Jab, C, Left-Body-Hook',
                'RH, Left-Hook, RH, LUC',
                'RUC, LUC, C, LUC',
                'Jab, Jab, C, Left-Hook ',
                'RUC, Left-Hook, RH, LUC',
                'C, LUC, LUC, RH',
                ' C, Left-Body-Hook, Left-HookH, C',
                'C, Left-Hook, RH',
                'C, Left-Body-Hook, RUC, Right-Body-Hook ',
                ' Left-Body-Hook, RUC, RUC, LUC ',
                'Right-Body-Hook, Jab, C, Left-HookH '
    ]
}

const round3 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['C, Left-Body-Hook, LFK (front kick), Right-Front-Kick',
               'LRH, C, LUC, C, LRH',
               'LFK, Jab, RH, Left-Hook, RSK',
               'LUC, RH, LFK, Right-Roundhouse',
               'Jab, RU,LU,Right-Roundhouse',
               'JC, RH, LFK, squat, Right-Front-Kick',
               'Jab, C,Jab, Left-Hook, Right-Roundhouse ',
               'cross-Left-Hook, Cross,LFK,LSK',
               'LFK, JC, Left-Body-Hook, Right-Front-Kick',
               'LUC, C, LRH, RUC, Left-Hook',
               'C, LUC, RH, LFK, RSK',
               ' Right-Front-Kick, Jab, RUC, LUC, Right-Front-Kick',
               'LFK, LFK, RUC, LUC, Left-Body-Hook',
               ' C, Left-Hook, RH, LRH',
               ' LU,RU,Left-Body-Hook,Right-Roundhouse,Right-Roundhouse',
               'RUC, Jab, Right-Roundhouse, LFK',
               'Jab, C, RU, LFK, squat, Right-Front-Kick, squat ',
               'LFK, Jab,C, Left-Hook,RSK',
               'LFK,C, Left-Hook,Right-Roundhouse',
               'RU,Jab,C ,LRH',
               'LRH, Jab, C, Left-Hook, Right-Head-Hook',
               'RH, C, Left-Hook, Right-Front-Kick, Right-Front-Kick',
               'LFK, RH, Left-HookH, Right-Front-Kick, Right-Front-Kick',
               'LSK, RH, LUC, Right-Front-Kick ',
               'LUC, RH, C, LRH',
               ' Right-Roundhouse, C, body jab, RUC',
               'Left-HookH, Right-Front-Kick, Right-Head-Hook, LFK ',
               'Left-Hook, RUC, LFK, Right-Front-Kick, LSK ',
               ' LUC, C, LFK, squat, Right-Front-Kick',
               ' Right-Front-Kick, Jab, Jab, RH, RSBF ',
               ' LFK, Jab, C, LUC, RSK',
               ' Left-Hook, C, LFK, C, LFK ',
               'LUC, RH, LFK, Right-Roundhouse ',
               'Right-Front-Kick, Right-Roundhouse, Jab, C, superman ',
               'RUC, Jab, Right-Head-Hook, LFK',
               'Jab, RUC, Left-Hook, RSK ',
               'Jab, RH, LSK, LFK',
               'Right-Roundhouse, LUC, RH, LUC, Right-Roundhouse',
               'C, LUC, Right-Head-Hook, LFK, Right-Front-Kick ']
}
const round4 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['Right-Roundhouse (roundhouse), RSBF (spinning back fist), JC, Left-Hook',
               'Jab, RUC, Left-Hook, Right-Roundhouse, LFK, Right-Roundhouse',
               'JC, Left-Hook, Right-Front-Kick, L spinning back',
               'LRH, Right-Front-Kick, Jab, RUC, Left-Hook ',
               'cross, Left-Hook,RH, LRH',
               'Right-Front-Kick, C, LUC, Left-Hook, Right-Front-Kick',
               'Right-Front-Kick, LFK, C, Left-HookH, Right-Body-Hook',
               'Right-Front-Kick,RSK, Jab-jab, RUC',
               'JC, RH, LRH, LSBF ',
               'Right-Roundhouse, JC, LUC, Right-Roundhouse',
               ' RUC, Left-Hook, Right-Roundhouse, LSK',
               'Jab, BC, C, LFK, LFK',
               'Jab, JC, Left-Hook, Right-Roundhouse, Right-Roundhouse',
               'LFK, C, Left-Hook, Right-Roundhouse, LRH',
               'LRH, jab cross jab RH,LRH',
               'Right-Roundhouse, Left-Hook , RH, LUC, Right-Front-Kick',
               'Right-Front-Kick, C, LUC, Left-Hook, Right-Front-Kick',
               'Jab, RH,C,LSK,Right-Front-Kick',
               'Right-Body-Hook, Jab,C,LRH,Right-Front-Kick ',
               'low Right-Roundhouse, middle Right-Roundhouse,LU,RU, Left-Hook ',
               'C, Left-Hook, RUC, LFK, Right-Front-Kick',
               ' LFK, Jab, RUC, RUC, LFK',
               'C, Left-Hook, C, LRH, LRH, Right-Front-Kick',
               'Jab, Jab, RH, LRH, RSK',
               'Jab, Jab, Right-Body-Hook, RSBF, Right-Roundhouse ',
               ' Right-Front-Kick, RH, LUC, C, LRH ',
               'Jab, RUC, Left-Hook, Right-Roundhouse, LFK ',
               'Right-Roundhouse, LFK, Jab, C, Left-Body-Hook ',
               'LFK, Jab, C, Left-Hook, Right-Roundhouse ',
               'RUC, Jab, C, LFK, Right-Roundhouse ',
               'C, RUC, Left-Hook, Right-Front-Kick, LSK',
               'Right-Body-Hook, Jab, LUC, Right-Front-Kick, LRH',
               ' LRH, Right-Front-Kick, Jab, RUC, Left-Hook ',
               'body C, Left-HookH, Right-Head-Hook, LRH, LRH ',
               ' Right-Roundhouse, Left-Hook, RH, LUC, Right-Front-Kick ',
               'Right-Front-Kick, LSK, Right-Head-Hook, Left-HookH',
               'Right-Body-Hook, LUC, Right-Front-Kick, RSK ',
               'RUC, Left-Hook, C, LRH, Right-Front-Kick ',
               'Right-Front-Kick, LRH, Body Jab, RH, Left-HookH '
    ]
}

const round5 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['RH, RUC, LRH, Right-Front-Kick, LRH',
               'C, LFK, C, Left-Hook, Right-Front-Kick',
               'Right-Roundhouse, LSK, JCJab, Right-Body-Hook',
               'LUC, RUC, LUC, RUC, LFK, Right-Front-Kick, LRH (halfway through, change those to hooks)',
               'Right-Roundhouse,LFK,LU, cross, LRH',
               'C, LFK, C, RUC, LFK, Right-Roundhouse',
               'RUC, Left-Body-Hook, C, LRH, LSBF',
               'jab-cross, Left-Hook,Right-Roundhouse,LSK',
               'Right-Body-Hook, Left-HookH, Right-Front-Kick, squat, LFK, squat, Right-Front-Kick, squat',
               'RUC, LUC, C, LRH, Right-Roundhouse',
               'Right-Roundhouse, LRH, LFK, C, Left-HookH',
               'C, LFK, Right-Roundhouse, Jab, Right-Roundhouse',
               ' Left-Hook, RH, Jab, RUC, LRH, LRH',
               'Jab, RUC, LRH, Right-Roundhouse, Right-Roundhouse',
               'Left-Body-Hook Right-Roundhouse, LFK,Right-Front-Kick, superman ',
               'JC, C, LRH',
               'C, LFK, C, RH, LFK, Right-Roundhouse',
               'Jab,Right-Roundhouse, Left-Hook, Ru, LFK ',
               'Right-Roundhouse,Jab,C,Left-Hook,C,LRH ',
               'Jab, C, RU,low LRH, middle LRH',
               'C, LUC, RH, LRH, LSBF ',
               'Left-Hook, Right-Roundhouse, Right-Front-Kick, LFK ',
               ' Left-Hook, C, Jab, Right-Roundhouse, Right-Roundhouse, LFK, LFK',
               'C, Left-Hook, Right-Roundhouse, LUC, C ',
               'Left-Hook, RH, LFK, RH, Left-Hook, Right-Front-Kick ',
               'C, LFK, C, Left-Hook, Right-Roundhouse',
               'C, LUC, Right-Head-Hook, LRH ',
               'Body-Jab, RUC, LUC, RSK, LRH, Right-Front-Kick ',
               'LUC, RH, LRH, Right-Front-Kick, Superman ',
               'LRH, LSBF, C, Left-Body-Hook ',
               'Right-Roundhouse, LUC, RUC, LUC, RUC, LRH ',
               'Jab, C, Left-Hook, Right-Roundhouse, Right-Front-Kick ',
               'LUC, RUC, LUC, RUC, LFK, Right-Front-Kick, LRH halfway through, change Uppercuts to Hooks',
               'Jab, C, C, LFK, Right-Roundhouse ',
               'Jab, C, C, LRH ',
               'LUC, RH, LFK, Right-Roundhouse, LRH ',
               ' LSK, Right-Roundhouse, Jab, C, Left-Hook ',
               ' LUC, RUC, LRH, Right-Roundhouse halfway through, double up on Uppercuts',
               'BC, RUC, Left-Hook, Right-Roundhouse, LFK '
    ]
}

const round6 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['JC, JC, LRH, Right-Roundhouse, burpee',
               'JC, RUC, LFK, LSK',
               'RSBF, Right-Roundhouse, LRH, LRH, RSK',
               'Right-Roundhouse, LFK, RSK, JC, duck, C',
               'Right-Roundhouse,LRH, Right-Front-Kick, Superman',
               'RUC, Jab, Left-Hook, Right-Front-Kick, LRH',
               'Right-Roundhouse, Right-Roundhouse, JC, JC, LRH, LRH',
               'cross, LU,RSK,LRH',
               'Left-Hook, C, Left-Hook, RSK, LSK',
               'LFK, Right-Roundhouse, Right-Roundhouse, LRH, LRH, Right-Front-Kick',
               'LUC, C, Right-Head-Hook, LRH',
               'JC, LRH, Right-Front-Kick, Right-Front-Kick, SUPER',
               'Jab, Right-Roundhouse, JC, LRH, Right-Front-Kick, Right-Front-Kick',
               'Right-Front-Kick, LRH, Right-Roundhouse, LFK, jump squat',
               'cross,Left-Hook, RUC,LUC,Right-Roundhouse,LRH',
               'LRH, Right-Roundhouse, JCJab, RH',
               'RUC, Jab, Left-Hook, Right-Front-Kick, LRH ',
               'Left-Hook,C,LSK,RSK,LRH',
               ' RH,Left-Hook, C, LRH, Right-Roundhouse,LRH ',
               'Jab,RU,LU,Right-Roundhouse,LRH for half, then Jab,RU,LU, Low Right-Roundhouse, Right-Roundhouse, Low LRH,LRH',
               ' Right-Roundhouse, Right-Roundhouse, JC, LRH, LRH (add another JC every minute)',
               'LRH, LSBF, LRH, Right-Front-Kick',
               'Right-Roundhouse, C, Left-Hook, RH, LRH ',
               'LFK, Right-Roundhouse, Jab, C, LRH ',
               'Right-Roundhouse, LRH, Right-Front-Kick, Superman',
               'JC, body cross, LRH, Right-Roundhouse ',
               ' Jab, C, Left-HookH, Right-Head-Hook, LFK, Right-Front-Kick',
               ' Right-Front-Kick, Right-Roundhouse, Jab, Jab, C, LFK, LRH ',
               'LFK, LSK, Jab, C, Right-Front-Kick, LRH',
               ' Jab, C, Right-Roundhouse, LRH, Right-Roundhouse ',
               'Right-Front-Kick, LSK, RSK, LFK, Jab, RUC ',
               'Jab, RH, C, LFK, squat, Right-Front-Kick ',
               'Right-Roundhouse, LFK, Right-Roundhouse, Jab, C, C ',
               'RH, Jab, C, Jab, C, Left-Hook, Right-Roundhouse, LRH ',
               'LRH, Right-Roundhouse, Jab, C, Jab, Right-Body-Hook ',
               'Right-Front-Kick, RSK for half, then LFK, LSK ',
               'LRH, RSK, LSK, RH, Left-Hook ',
               ' Jab, C, RUC, LFK, LRH ',
               'LFK, BC, Jab, Right-Body-Hook, Right-Front-Kick (squat after for added challenge) '
    ]

}

const speedRound = {
    'combos': ['10 hooks, 10 jumping jacks',
               'hooks for half, then squats with front kicks',
               'Front kicks and squats',
               'Uppercuts',
               'body hooks for half, then Uppercuts ',
               'Freestyle',
               '10 JC burpee',
               '20 hooks, one burpee',
               '2 jump squats 10 BH, then 2 jumping jacks 10 UC, ',
               'non-stop UCs, non stop body hooks',
               '10 hooks, 1 burpee, then 10 UC 3 jump squats',
               'Nonstop JC, then nonstop FK',
               '10 JC, then burpee, ',
               'Uppercuts for half, then Hooks',
               '20 JC 2 burpees for half, then 20 hooks 2 froggies',
               'high knees w JC for 30, then hooks',
               'LFK,LSK for half, then Right-Front-Kick,RSK',
               'JC,Left-Hook,RH 5 times, then 3 jump squats ',
               'Hooks',
               'non-stop JC with high knees ',
               'Freestyle but double up on punches',
               '20 JC, 20 High Knees',
               'nonstop JC for half, then nonstop hooks ',
               '10 JC burpee',
               '10 BH, 10 HH ',
               'nonstop J for half, then nonstop C ',
               'nonstop JC for half, then alternating Right-Roundhouse and LRH ',
               'Nonstop UCs for half, then alternating Front Kicks',
               'Alternating Front Kicks',
               'non-stop hooks, non-stop UCs',
               'power hooks',
               'Alternating Front Kicks, one quick, one powerful for each leg'
    ]
}

// CACHED ELEMENT REFERENCES-----------------------------------------------------------
const r1FirstPrintHere = document.getElementById('round1FirstResults')
const r1SecondPrintHere = document.getElementById('round1SecondResults')
const r1ThirdPrintHere = document.getElementById('round1ThirdResults')
const r2PrintHere = document.getElementById('round2Results')
const r3PrintHere = document.getElementById('round3Results')
const r4PrintHere = document.getElementById('round4Results')
const r5PrintHere = document.getElementById('round5Results')
const r6PrintHere = document.getElementById('round6Results')
const speedRoundPrintHere = document.getElementById('speedRoundResults')
const allRoundPrintHere = document.getElementById('allRoundResults')
const generateRound1FirstResults = document.getElementById('generateRound1FirstResults')
const generateRound1SecondResults = document.getElementById('generateRound1SecondResults')
const generateRound1ThirdResults = document.getElementById('generateRound1ThirdResults')
const generateRound2Results = document.getElementById('generateRound2Results')
const generateRound3Results = document.getElementById('generateRound3Results')
const generateRound4Results = document.getElementById('generateRound4Results')
const generateRound5Results = document.getElementById('generateRound5Results')
const generateRound6Results = document.getElementById('generateRound6Results')
const generateSpeedRoundResults = document.getElementById('generateSpeedRoundResults')
const generateAllRoundResults = document.getElementById('generateAllRoundResults')


// EVENT LISTENERS--------------------------------------------------------------------------


generateRound1FirstResults.addEventListener('click', renderRound1First)
generateRound1SecondResults.addEventListener('click', renderRound1Second)
generateRound1ThirdResults.addEventListener('click', renderRound1Third)
generateRound2Results.addEventListener('click', renderRound2)
generateRound3Results.addEventListener('click', renderRound3)
generateRound4Results.addEventListener('click', renderRound4)
generateRound5Results.addEventListener('click', renderRound5)
generateRound6Results.addEventListener('click', renderRound6)
generateSpeedRoundResults.addEventListener('click', renderSpeedRound)
generateAllRoundResults.addEventListener('click', renderAllRounds)




// FUNCTIONS-------------------------------------------------------------------------------
function randomizeRound(round){
   return Math.floor(Math.random() * Math.floor(round.combos.length))  
}




// render functions------

function renderRound1First(){
    r1FirstPrintHere.innerHTML = `The first part of round one is ${round1.combos[randomizeRound(round1)]}.`
}
function renderRound1Second(){
    r1SecondPrintHere.innerHTML = `The second part of round one is ${round1.combos[randomizeRound(round1)]}.`
}
function renderRound1Third(){
    r1ThirdPrintHere.innerHTML = `The third part of round one is ${round1.combos[randomizeRound(round1)]}.`
}

function renderRound2(){
    r2PrintHere.innerHTML = `Round two is ${round2.combos[randomizeRound(round2)]}.`
}
function renderRound3(){
    r3PrintHere.innerHTML = `Round three is ${round3.combos[randomizeRound(round3)]}.`
}
function renderRound4(){
    r4PrintHere.innerHTML = `Round four is ${round4.combos[randomizeRound(round4)]}.`
}
function renderRound5(){
    r5PrintHere.innerHTML = `Round five is ${round5.combos[randomizeRound(round5)]}.`
}
function renderRound6(){
    r6PrintHere.innerHTML = `Round six is ${round6.combos[randomizeRound(round6)]}.`
}
function renderSpeedRound(){
    speedRoundPrintHere.innerHTML = `Speed round is ${speedRound.combos[randomizeRound(speedRound)]}.`
}

function renderAllRounds(){

    allRoundPrintHere.innerHTML = 
    `<b>R1- first half:</b> ${round1.combos[randomizeRound(round1)]}<br />
    <b>R1- second half:</b>${round1.combos[randomizeRound(round1)]}<br />
    <b>R2:</b> ${round2.combos[randomizeRound(round2)]}<br />
    <b>R3:</b> ${round3.combos[randomizeRound(round3)]}<br />
    <b>R4:</b> ${round4.combos[randomizeRound(round4)]}<br />
    <b>R5: </b>${round5.combos[randomizeRound(round5)]}<br />
    <b>R6: </b>${round6.combos[randomizeRound(round6)]}<br />
    <b>Speed: </b>${speedRound.combos[randomizeRound(speedRound)]}`
}