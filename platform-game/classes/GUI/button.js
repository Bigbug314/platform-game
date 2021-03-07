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
      return (x < this.pos.x + this.size.x
              && x > this.pos.x
              && y < this.pos.y + this.size.y
              && y > this.pos.y);
    }
}
