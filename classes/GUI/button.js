class Button extends GUI {
    constructor(x, y, w, h, img, action) {
        super(x, y, w, h, img);
        this.action = action;
    }

    update(mouseCoo) {
        if (this.cooInRectangle(mouseCoo.x, mouseCoo.y)) {
            this.action();
        }
    }

    cooInRectangle(x, y) {

    }
}