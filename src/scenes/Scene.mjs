export default class Scene {
    constructor (staticElements) {
        this.staticElements = staticElements;
    }
    
    load () {
        this.staticElements.forEach( (elem) => {
            this.toggleVisibility(elem);
        })
    }

    toggleVisibility (obj) {
        obj.classList.toggle("hidden");
    }
}