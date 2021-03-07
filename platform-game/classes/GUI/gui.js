class GUI {
    constructor(x, y, w, h, img) {
        this.pos = createVector(x, y);
        this.size = createVector(w, h);
        this.img = img;
        this.isActive = true;
    }

    draw() {
        if (this.isActive) {
            push();
            imageMode(CORNER);
            image(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
            pop();
        }
    }

    setActive(value) {
        this.isActive = value;
    }
}
