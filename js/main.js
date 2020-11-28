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
                'C, LH, LUC, RH',
                'J, LH, RH, RHH',
                'C, LH, RUC, LH',
                'J, C, LH, RUC ',
                'LBH, RUC, body jab, C',
                'C, LBH, RHH',
                ' C, J, J, RH ',
                'RUC, J, C, LBH',
                'RH, LH, RH, LUC',
                'RUC, LUC, C, LUC',
                'J, J, C, LH ',
                'RUC, LH, RH, LUC',
                'C, LUC, LUC, RH',
                ' C, LBH, LHH, C',
                'C, LH, RH',
                'C, LBH, RUC, RBH ',
                ' LBH, RUC, RUC, LUC ',
                'RBH, J, C, LHH '
    ]
}

const round3 = {
    'punches': ['Jab', 'Cross', 'Body-Cross', 'Body-Jab', 'Left-Hook', 'Right-Hook', 'Left-Body-Hook', 'Right-Body-Hook', 'Right-Head-Hook', 'Left-Head-Hook','Left-Uppercut', 'Right-Uppercut', 'Superman'],
    'combos': ['C, LBH, LFK (front kick), RFK',
               'LRH, C, LUC, C, LRH',
               'LFK, J, RH, LH, RSK',
               'LUC, RH, LFK, RRH',
               'Jab, RU,LU,RRH',
               'JC, RH, LFK, squat, RFK',
               'J, C,J, LH, RRH ',
               'cross-LH, Cross,LFK,LSK',
               'LFK, JC, LBH, RFK',
               'LUC, C, LRH, RUC, LH',
               'C, LUC, RH, LFK, RSK',
               ' RFK, J, RUC, LUC, RFK',
               'LFK, LFK, RUC, LUC, LBH',
               ' C, LH, RH, LRH',
               ' LU,RU,LBH,RRH,RRH',
               'RUC, J, RRH, LFK',
               'J, C, RU, LFK, squat, RFK, squat ',
               'LFK, J,C, LH,RSK',
               'LFK,C, LH,RRH',
               'RU,J,C ,LRH',
               'LRH, J, C, LH, RHH',
               'RH, C, LH, RFK, RFK',
               'LFK, RH, LHH, RFK, RFK',
               'LSK, RH, LUC, RFK ',
               'LUC, RH, C, LRH',
               ' RRH, C, body jab, RUC',
               'LHH, RFK, RHH, LFK ',
               'LH, RUC, LFK, RFK, LSK ',
               ' LUC, C, LFK, squat, RFK',
               ' RFK, J, J, RH, RSBF ',
               ' LFK, J, C, LUC, RSK',
               ' LH, C, LFK, C, LFK ',
               'LUC, RH, LFK, RRH ',
               'RFK, RRH, J, C, superman ',
               'RUC, J, RHH, LFK',
               'J, RUC, LH, RSK ',
               'J, RH, LSK, LFK',
               'RRH, LUC, RH, LUC, RRH',
               'C, LUC, RHH, LFK, RFK '

]
}


// CACHED ELEMENT REFERENCES-----------------------------------------------------------
const r1FirstPrintHere = document.getElementById('round1FirstResults')
const r1SecondPrintHere = document.getElementById('round1SecondResults')
const r1ThirdPrintHere = document.getElementById('round1ThirdResults')
const r2PrintHere = document.getElementById('round2Results')
const r3PrintHere = document.getElementById('round3Results')
const generateRound1FirstResults = document.getElementById('generateRound1FirstResults')
const generateRound1SecondResults = document.getElementById('generateRound1SecondResults')
const generateRound1ThirdResults = document.getElementById('generateRound1ThirdResults')
const generateRound2Results = document.getElementById('generateRound2Results')
const generateRound3Results = document.getElementById('generateRound3Results')


// EVENT LISTENERS--------------------------------------------------------------------------


generateRound1FirstResults.addEventListener('click', renderRound1First)
generateRound1SecondResults.addEventListener('click', renderRound1Second)
generateRound1ThirdResults.addEventListener('click', renderRound1Third)
generateRound2Results.addEventListener('click', renderRound2)
generateRound3Results.addEventListener('click', renderRound3)





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

