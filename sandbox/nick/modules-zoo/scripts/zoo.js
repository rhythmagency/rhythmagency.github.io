// Dependencies.
import Logger from './logger.js';
import sloth from './animals/sloth.js';
import panda from './animals/panda.js';

// Variables.
let log = new Logger(),
    animals = [
        new sloth(),
        new panda()
    ],
    pokeEl = document.querySelector('[data-js-poke-animals]'),
    viewEl = document.querySelector('[data-js-view-animals]');

// Indicate the zoo is open for business.
log.log('The zoo is open!');

// Handle clicks of the "Poke Animals" button.
pokeEl.addEventListener('click', () => {
    log.log('-------');
    animals.forEach(x => {

        // Animals make noises when they are poked.
        let name = x.getName();
        x.makeNoise(`${name} says: `);

    });
});

// Handle clicks of the "View Animals" button.
viewEl.addEventListener('click', () => {
    animals.forEach(x => {

        // Show the animal image.
        let image = x.getImage();
        log.logImage(image);

    });
});