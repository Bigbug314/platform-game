class GUI {
    constructor(x, y, w, h, img) {
        this.pos = createVector(x, y);
        this.size = createVector(w, h);
        this.img = img;
    }

    draw(cameraPos) {
        if (this.isActive) {
            push();
            imageMode(CORNER);
            image(this.img, this.pos.x - cameraPos.x, this.pos.y + cameraPos.y, this.size.x, this.size.y);
            pop();
        }
    }

    setActive(value) {
        this.isActive = value;
    }
}
