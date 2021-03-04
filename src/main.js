// imports
import Scene from './scenes/Scene.mjs';

// hide all elements
const elements = Array.from(document.getElementById('canvas').children);
elements.forEach( (elem) => {
    elem.classList.add('hidden');
});

// load backgrounds
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
const outlets = document.getElementById('outlets');
const outlet = document.getElementById('outlet');
const more = document.getElementById('more');
const retry = document.getElementById('retry');

// load text bubbles
const textInlet = document.getElementById('text-inlet');
const textToken = document.getElementById('text-token');
const textTravel = document.getElementById('text-travel');
const textTokenTypes = document.getElementById('text-token-types');
const textPaymentMachine = document.getElementById('text-payment-machine');

// load dynamic elements
const hand = document.getElementById('hand');
const woman = document.getElementById('woman');
const buttonAnimated = document.getElementById('button-animated');
const train = document.getElementById('train');

// setup scenes
const scenes = [
    new Scene([station, woman]),
    new Scene([stationHallEntry, inlets]),
    new Scene([stationBlurred, inlet, button]),
    new Scene([platform, train]),
    new Scene([trainInside]),
    new Scene([platform, stairsLeft, stairsRight]),
    new Scene([stationHallLeave, payingMachines]),
    new Scene([stationBlurred, payingMachine, textTokenTypes]),
    new Scene([stationHallLeave, outlets]),
    new Scene([stationBlurred, outlet]),
    new Scene([endcard, more, retry])
]

// animations and scene switches

start();

function start () {
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
        train.style.setProperty('left', '45%');
        
        train.classList.add('left');
    }, 5000);
});

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
});

payingMachine.addEventListener('click', () => {
    scenes[7].unload();
    scenes[8].load();
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