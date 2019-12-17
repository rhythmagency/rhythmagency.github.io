let logEl = document.createElement('div');
document.body.appendChild(logEl);

export default class Logger {
    log(message) {
        let messageText = document.createTextNode(message),
            messageEl = document.createElement('div');
        messageEl.appendChild(messageText);
        logEl.appendChild(messageEl);
    }

    logImage(path) {
        let imageEl = document.createElement('img');
        imageEl.src = path;
        logEl.appendChild(imageEl);
    }
}
