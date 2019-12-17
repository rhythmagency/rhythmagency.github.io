import Logger from '../logger.js';
let log = new Logger();

export default class Panda {
    getName() {
        return 'panda';
    }

    makeNoise(prefix) {
        log.log(`${prefix}achoo!`);
    }

    getImage() {
        return 'images/panda.gif';
    }
}
