// imports
import Scene from './scenes/Scene.mjs';

// load static elements
const station = document.getElementById('station');
const stationHall = document.getElementById('station-hall');

// load dynamic elements
const woman = document.getElementById('woman');


// setup scenes
const scene_1 = new Scene([station, woman]);

// animation
document.addEventListener('click', () => {
    scene_1.load();
})