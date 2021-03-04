// imports
import Scene from './scenes/Scene.mjs';

// hide all elements
const elements = Array.from(document.getElementById('canvas').children);
elements.forEach( (elem) => {
    elem.classList.add('hidden');
});

// load backgrounds
//const start1 = document.getElementById('start1');
//const start2 = document.getElementById('start2');
const station = document.getElementById('station');
const stationBlurred = document.getElementById('station-blurred');
const stationHallEntry = document.getElementById('station-hall-entry');
const stationHallLeave = document.getElementById('station-hall-leave');
const platform = document.getElementById('platform');
const trainInside = document.getElementById('train-inside');
const endcard = document.getElementById('endcard');

// load static elements
const inlets = document.getElementById('inlets');
const inlet = document.getElementById('inlet');
const button = document.getElementById('button');
const inletAnimated = document.getElementById('inlet-animated');
const token = document.getElementById('token');
const stairsLeft = document.getElementById('stairs-left');
const stairsRight = document.getElementById('stairs-right');
const payingMachines = document.getElementById('paying-machines');
const payingMachine = document.getElementById('paying-machine');
const cashInsert = document.getElementById('cash-insert');
const outlets = document.getElementById('outlets');
const outlet = document.getElementById('outlet');
const more = document.getElementById('more');
const retry = document.getElementById('retry');
//const start1 = document.getElementById('start1');
//const start2 = document.getElementById('start2');


// load text bubbles
const textInlet = document.getElementById('text-inlet');
const textToken = document.getElementById('text-token');
const textTravel = document.getElementById('text-travel');
const textTokenTypes = document.getElementById('text-token-types');

// load dynamic elements
const hand = document.getElementById('hand');
const woman = document.getElementById('woman');
const buttonAnimated = document.getElementById('button-animated');
const train = document.getElementById('train');
const payingText = document.getElementById('paying-text');

// setup scenes
const scenes = [
    new Scene([station, woman]),
    new Scene([stationHallEntry, inlets]),
    new Scene([stationBlurred, inlet, button]),
    new Scene([platform, train]),
    new Scene([trainInside]),
    new Scene([platform, stairsLeft, stairsRight]),
    new Scene([stationHallLeave, payingMachines]),
    new Scene([stationBlurred, payingMachine, cashInsert, payingText, textTokenTypes]),
    new Scene([stationHallLeave, outlets]),
    new Scene([stationBlurred, outlet]),
    new Scene([endcard, more, retry])
]

// train rides
const trips = {
    'Mainz Hbf': {
        'Dieburg': 1250,
        'Darmstadt Hbf': 870,
        'Frankfurt (Main) Hbf': 870
    },
    'Dieburg': {
        'Mainz Hbf': 1250,
        'Darmstadt Hbf': 330,
        'Frankfurt (Main) Hbf': 870
    },
    'Darmstadt Hbf': {
        'Mainz Hbf': 870,
        'Dieburg': 330,
        'Frankfurt (Main) Hbf': 870
    },
    'Frankfurt (Main) Hbf': {
        'Mainz Hbf': 870,
        'Dieburg': 870,
        'Darmstadt Hbf': 870,
    }
}
let currStation;
let rides = [];

function randomStation () {
    const stations = Object.keys(trips);
    const rnd = Math.floor(Math.random() * stations.length);
    return stations[rnd];
}

function price () {
    let price = 0;
    rides.forEach( (ride) => {
        price += trips[ride[0]][ride[1]];
    });
    return (price / 100).toFixed(2);
}

function getPayingText () {

    let str = '';
    // add rides
    rides.forEach( (ride) => {
        str += `${ride[0]}–${ride[1]}\n`;
    });
    // add price
    str += `${price()} €`

    return str;

}

// animations and scene switches

start();

/*function startstartstart (){
    scenes[11].load();
}

function startstart (){
    scenes[11].unload();
    scenes[12].load();
    
}*/

function start () {
    // set station
    currStation = randomStation();

    // start
   
    scenes[0].load();
    woman.classList.add('enter');
    setTimeout(() => {
        woman.classList.remove('enter');
        scenes[0].unload();
        scenes[1].load();
    }, 8000);
}

inlets.addEventListener('click', () => {
    scenes[1].unload();
    scenes[2].load();
    textInlet.classList.remove('hidden');
});

button.addEventListener('click', () => {
    // button animation
    textInlet.classList.add('hidden');
    textToken.classList.remove('hidden');
    buttonAnimated.classList.remove('hidden');
    inletAnimated.classList.remove('hidden');
    setTimeout( () => {
        inletAnimated.classList.add('hidden');
        buttonAnimated.classList.add('hidden');
        token.classList.remove('hidden');
    }, 2000);
});

token.addEventListener('click', () => {
    // change mouse graphic
    token.classList.add('hidden');
    textToken.classList.add('hidden');
    hand.src = 'img/static/hand_token.svg';

    // load next scene
    scenes[2].unload();
    scenes[3].load();

    // start train
    train.classList.add('stop');
});

train.addEventListener('click', () => {
    // save ride
    let dest; 
    do {
        dest = randomStation();
    } while (dest === currStation);
    rides.push([currStation, dest]);
    currStation = dest;

    // hide train
    train.classList.remove('stop');
    
    // load scene
    textTravel.classList.remove('hidden');
    scenes[3].unload();
    scenes[4].load();

    setTimeout( () => {
        textTravel.classList.add('hidden');
        scenes[4].unload();
        scenes[5].load();
    
        // start train
        train.style.setProperty('left', '-45vh');
        train.classList.add('left');
        setTimeout( () => {
            // reset train
            train.style.setProperty('left', '200vh');
            train.classList.remove('left');

//            setTimeout( () => {
//                // next train
//                train.classList.add('stop');
//            }, 3000);
        }, 4000);
    }, 5000);
});

/*start1.addEventListener('click', () => {
    scenes[11].load();
});

start2.addEventListener('click', () => {
    scenes[11].unload();
    scenes[12].load();
});*/

stairsLeft.addEventListener('click', () => {
    scenes[5].unload();
    scenes[6].load();
});

stairsRight.addEventListener('click', () => {
    scenes[5].unload();
    scenes[6].load();
});

payingMachines.addEventListener('click', () => {
    scenes[6].unload();
    scenes[7].load();
    hand.src = 'img/static/hand_money.svg';
    payingText.innerText = getPayingText();
});

cashInsert.addEventListener('click', () => {
    scenes[7].unload();
    scenes[8].load();
    hand.src = 'img/static/hand_token.svg';
});

outlets.addEventListener('click', () => {
    scenes[8].unload();
    scenes[9].load();
});

outlet.addEventListener('click', () => {
    hand.src = 'img/static/hand.svg';
    scenes[9].unload();
    scenes[10].load();
});

// endcard buttons
retry.addEventListener('click', () => {
    scenes[10].unload();
    start();
});

more.addEventListener('click', () => {
    window.open('https://imd.mediencampus.h-da.de/projekte2/#semester-3');
});

// cursor
document.body.addEventListener('mouseenter', () => {
    hand.classList.remove('hidden');
});

document.body.addEventListener('mouseleave', () => {
    hand.classList.add('hidden');
});

document.addEventListener('mousemove', (e) => {
    hand.style.setProperty('left', `${e.pageX}px`);
    hand.style.setProperty('top', `${e.pageY}px`);
});