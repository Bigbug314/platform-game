class GUI {
    constructor(x, y, w, h, img, isActive) {
        this.pos = createVector(x, y);
        this.size = createVector(w, h);
        this.img = img;
        this.isActive = isActive;
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

    update() {
    }
}
