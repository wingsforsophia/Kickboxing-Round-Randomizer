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
                'RBH, J, C, J, C, LBH',
                'C, Left-Hook, LUC, RH',
                'J, Left-Hook, RH, RHH',
                'C, Left-Hook, RUC, Left-Hook',
                'J, C, Left-Hook, RUC ',
                'LBH, RUC, body jab, C',
                'C, LBH, RHH',
                ' C, J, J, RH ',
                'RUC, J, C, LBH',
                'RH, Left-Hook, RH, LUC',
                'RUC, LUC, C, LUC',
                'J, J, C, Left-Hook ',
                'RUC, Left-Hook, RH, LUC',
                'C, LUC, LUC, RH',
                ' C, LBH, Left-HookH, C',
                'C, Left-Hook, RH',
                'C, LBH, RUC, RBH ',
                ' LBH, RUC, RUC, LUC ',
                'RBH, J, C, Left-HookH '
    ]
}

const round3 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['C, LBH, LFK (front kick), RFK',
               'LRH, C, LUC, C, LRH',
               'LFK, J, RH, Left-Hook, RSK',
               'LUC, RH, LFK, RRH',
               'Jab, RU,LU,RRH',
               'JC, RH, LFK, squat, RFK',
               'J, C,J, Left-Hook, RRH ',
               'cross-Left-Hook, Cross,LFK,LSK',
               'LFK, JC, LBH, RFK',
               'LUC, C, LRH, RUC, Left-Hook',
               'C, LUC, RH, LFK, RSK',
               ' RFK, J, RUC, LUC, RFK',
               'LFK, LFK, RUC, LUC, LBH',
               ' C, Left-Hook, RH, LRH',
               ' LU,RU,LBH,RRH,RRH',
               'RUC, J, RRH, LFK',
               'J, C, RU, LFK, squat, RFK, squat ',
               'LFK, J,C, Left-Hook,RSK',
               'LFK,C, Left-Hook,RRH',
               'RU,J,C ,LRH',
               'LRH, J, C, Left-Hook, RHH',
               'RH, C, Left-Hook, RFK, RFK',
               'LFK, RH, Left-HookH, RFK, RFK',
               'LSK, RH, LUC, RFK ',
               'LUC, RH, C, LRH',
               ' RRH, C, body jab, RUC',
               'Left-HookH, RFK, RHH, LFK ',
               'Left-Hook, RUC, LFK, RFK, LSK ',
               ' LUC, C, LFK, squat, RFK',
               ' RFK, J, J, RH, RSBF ',
               ' LFK, J, C, LUC, RSK',
               ' Left-Hook, C, LFK, C, LFK ',
               'LUC, RH, LFK, RRH ',
               'RFK, RRH, J, C, superman ',
               'RUC, J, RHH, LFK',
               'J, RUC, Left-Hook, RSK ',
               'J, RH, LSK, LFK',
               'RRH, LUC, RH, LUC, RRH',
               'C, LUC, RHH, LFK, RFK ']
}
const round4 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['RRH (roundhouse), RSBF (spinning back fist), JC, Left-Hook',
               'J, RUC, Left-Hook, RRH, LFK, RRH',
               'JC, Left-Hook, RFK, L spinning back',
               'LRH, RFK, J, RUC, Left-Hook ',
               'cross, Left-Hook,RH, LRH',
               'RFK, C, LUC, Left-Hook, RFK',
               'RFK, LFK, C, Left-HookH, RBH',
               'RFK,RSK, Jab-jab, RUC',
               'JC, RH, LRH, LSBF ',
               'RRH, JC, LUC, RRH',
               ' RUC, Left-Hook, RRH, LSK',
               'J, BC, C, LFK, LFK',
               'J, JC, Left-Hook, RRH, RRH',
               'LFK, C, Left-Hook, RRH, LRH',
               'LRH, jab cross jab RH,LRH',
               'RRH, Left-Hook , RH, LUC, RFK',
               'RFK, C, LUC, Left-Hook, RFK',
               'J, RH,C,LSK,RFK',
               'RBH, J,C,LRH,RFK ',
               'low RRH, middle RRH,LU,RU, Left-Hook ',
               'C, Left-Hook, RUC, LFK, RFK',
               ' LFK, J, RUC, RUC, LFK',
               'C, Left-Hook, C, LRH, LRH, RFK',
               'J, J, RH, LRH, RSK',
               'J, J, RBH, RSBF, RRH ',
               ' RFK, RH, LUC, C, LRH ',
               'J, RUC, Left-Hook, RRH, LFK ',
               'RRH, LFK, J, C, LBH ',
               'LFK, J, C, Left-Hook, RRH ',
               'RUC, J, C, LFK, RRH ',
               'C, RUC, Left-Hook, RFK, LSK',
               'RBH, J, LUC, RFK, LRH',
               ' LRH, RFK, J, RUC, Left-Hook ',
               'body C, Left-HookH, RHH, LRH, LRH ',
               ' RRH, Left-Hook, RH, LUC, RFK ',
               'RFK, LSK, RHH, Left-HookH',
               'RBH, LUC, RFK, RSK ',
               'RUC, Left-Hook, C, LRH, RFK ',
               'RFK, LRH, Body J, RH, Left-HookH '
    ]
}

const round5 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['RH, RUC, LRH, RFK, LRH',
               'C, LFK, C, Left-Hook, RFK',
               'RRH, LSK, JCJ, RBH',
               'LUC, RUC, LUC, RUC, LFK, RFK, LRH (halfway through, change those to hooks)',
               'RRH,LFK,LU, cross, LRH',
               'C, LFK, C, RUC, LFK, RRH',
               'RUC, LBH, C, LRH, LSBF',
               'jab-cross, Left-Hook,RRH,LSK',
               'RBH, Left-HookH, RFK, squat, LFK, squat, RFK, squat',
               'RUC, LUC, C, LRH, RRH',
               'RRH, LRH, LFK, C, Left-HookH',
               'C, LFK, RRH, J, RRH',
               ' Left-Hook, RH, J, RUC, LRH, LRH',
               'J, RUC, LRH, RRH, RRH',
               'LBH RRH, LFK,RFK, superman ',
               'JC, C, LRH',
               'C, LFK, C, RH, LFK, RRH',
               'J,RRH, Left-Hook, Ru, LFK ',
               'RRH,J,C,Left-Hook,C,LRH ',
               'J, C, RU,low LRH, middle LRH',
               'C, LUC, RH, LRH, LSBF ',
               'Left-Hook, RRH, RFK, LFK ',
               ' Left-Hook, C, J, RRH, RRH, LFK, LFK',
               'C, Left-Hook, RRH, LUC, C ',
               'Left-Hook, RH, LFK, RH, Left-Hook, RFK ',
               'C, LFK, C, Left-Hook, RRH',
               'C, LUC, RHH, LRH ',
               'Body-Jab, RUC, LUC, RSK, LRH, RFK ',
               'LUC, RH, LRH, RFK, Superman ',
               'LRH, LSBF, C, LBH ',
               'RRH, LUC, RUC, LUC, RUC, LRH ',
               'J, C, Left-Hook, RRH, RFK ',
               'LUC, RUC, LUC, RUC, LFK, RFK, LRH halfway through, change Uppercuts to Hooks',
               'J, C, C, LFK, RRH ',
               'J, C, C, LRH ',
               'LUC, RH, LFK, RRH, LRH ',
               ' LSK, RRH, J, C, Left-Hook ',
               ' LUC, RUC, LRH, RRH halfway through, double up on Uppercuts',
               'BC, RUC, Left-Hook, RRH, LFK '
    ]
}

const round6 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['JC, JC, LRH, RRH, burpee',
               'JC, RUC, LFK, LSK',
               'RSBF, RRH, LRH, LRH, RSK',
               'RRH, LFK, RSK, JC, duck, C',
               'RRH,LRH, RFK, Superman',
               'RUC, J, Left-Hook, RFK, LRH',
               'RRH, RRH, JC, JC, LRH, LRH',
               'cross, LU,RSK,LRH',
               'Left-Hook, C, Left-Hook, RSK, LSK',
               'LFK, RRH, RRH, LRH, LRH, RFK',
               'LUC, C, RHH, LRH',
               'JC, LRH, RFK, RFK, SUPER',
               'J, RRH, JC, LRH, RFK, RFK',
               'RFK, LRH, RRH, LFK, jump squat',
               'cross,Left-Hook, RUC,LUC,RRH,LRH',
               'LRH, RRH, JCJ, RH',
               'RUC, J, Left-Hook, RFK, LRH ',
               'Left-Hook,C,LSK,RSK,LRH',
               ' RH,Left-Hook, C, LRH, RRH,LRH ',
               'J,RU,LU,RRH,LRH for half, then J,RU,LU, Low RRH, RRH, Low LRH,LRH',
               ' RRH, RRH, JC, LRH, LRH (add another JC every minute)',
               'LRH, LSBF, LRH, RFK',
               'RRH, C, Left-Hook, RH, LRH ',
               'LFK, RRH, J, C, LRH ',
               'RRH, LRH, RFK, Superman',
               'JC, body cross, LRH, RRH ',
               ' J, C, Left-HookH, RHH, LFK, RFK',
               ' RFK, RRH, J, J, C, LFK, LRH ',
               'LFK, LSK, J, C, RFK, LRH',
               ' J, C, RRH, LRH, RRH ',
               'RFK, LSK, RSK, LFK, J, RUC ',
               'J, RH, C, LFK, squat, RFK ',
               'RRH, LFK, RRH, J, C, C ',
               'RH, J, C, J, C, Left-Hook, RRH, LRH ',
               'LRH, RRH, J, C, J, RBH ',
               'RFK, RSK for half, then LFK, LSK ',
               'LRH, RSK, LSK, RH, Left-Hook ',
               ' J, C, RUC, LFK, LRH ',
               'LFK, BC, J, RBH, RFK (squat after for added challenge) '
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
               'LFK,LSK for half, then RFK,RSK',
               'JC,Left-Hook,RH 5 times, then 3 jump squats ',
               'Hooks',
               'non-stop JC with high knees ',
               'Freestyle but double up on punches',
               '20 JC, 20 High Knees',
               'nonstop JC for half, then nonstop hooks ',
               '10 JC burpee',
               '10 BH, 10 HH ',
               'nonstop J for half, then nonstop C ',
               'nonstop JC for half, then alternating RRH and LRH ',
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
    <b>Speed: </b>${speedRound.combos[randomizeRound(speedRound)]}
}