import Logger from '../logger.js';
let log = new Logger();

export default class Sloth {
    getName() {
        return 'sloth';
    }

    makeNoise(prefix) {
        log.log(`${prefix}haaaaaa.... haaaaaaaaa... haaaaaaaaaaa!`);
    }

    getImage() {
        return 'images/sloth.gif';
    }
}
