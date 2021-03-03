// imports
import Scene from './scenes/Scene.mjs';

// hide all elements
const elements = Array.from(document.getElementById('canvas').children);
elements.forEach( (elem) => {
    elem.classList.add('hidden');
});

// load backgrounds
const station = document.getElementById('station');
const stationHallEntry = document.getElementById('station-hall-entry');
const stationHallLeave = document.getElementById('station-hall-leave');
const platform = document.getElementById('platform');
const trainInside = document.getElementById('train-inside');

// load static elements
const button = document.getElementById('button');
const stairsLeft = document.getElementById('stairs-left');
const stairsRight = document.getElementById('stairs-right');
const payingMachine = document.getElementById('paying-machine');

// load dynamic elements
const hand = document.getElementById('hand');
//const handToken = document.getElementById('hand-token');
const buttonAnimated = document.getElementById('button-animated');
const train = document.getElementById('train');

const woman = document.getElementById('woman');


// setup scenes
const scenes = [
    new Scene([station]),
    new Scene([stationHallEntry]),
    new Scene([]),
    new Scene([platform]),
    new Scene([trainInside]),
    new Scene([platform, stairsLeft, stairsRight]),
    new Scene([stationHallLeave]),
    new Scene([]),
    new Scene([]),
    new Scene([])
]

// animation
let count = 0;
document.addEventListener('click', () => {
    if (count < scenes.length) {
        if (count > 0) {
            scenes[count - 1].unload();
        }
        scenes[count].load();
        count++;
    }
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