class Compiler {
    constructor() {
        this.nestedElements = {};
    }
    compile(value) {
        let compiled = document.createRange().createContextualFragment(value);
        let found = compiled.querySelectorAll("[lib-val]");
        found.forEach(x => {
            let attr = x.getAttribute("lib-val");
            //TODO: Remove attribute.
            this[attr] = x;
        });
        found = compiled.querySelectorAll("[lib-elements]");
        found.forEach(x => {
            let attr = x.getAttribute("lib-elements");
            let newNode = this.nestedElements[attr];
            //TODO: Remove attribute.
            x.parentNode.replaceChild(newNode, x);
        });
        return (compiled);
    }
    namedElement(name) {
        return `lib-val="${name}"`;
    }
    each(items, transformer) {
        let fragment = document.createDocumentFragment();
        items.forEach(x => {
            let item = transformer(x);
            let itemFragment = document.createRange().createContextualFragment(item);
            fragment.appendChild(itemFragment);
        });
        return this.asString(fragment);
    }
    asString(fragment) {
        let div = document.createElement("div");
        div.appendChild(fragment);
        return div.innerHTML;
    }
    nestElements(key, fragments) {
        let fragment = document.createDocumentFragment();
        fragments.forEach(x => {
            fragment.appendChild(x);
        });
        this.nestedElements[key] = fragment;
        return `<div lib-elements="${key}"></div>`;
    }
}
