class Button extends GUI {
    constructor(x, y, w, h, img, isActive, action) {
        super(x, y, w, h, img, isActive);
        this.action = action;
    }

    update() {
        if (this.isActive) {
            if (this.cooInRectangle(mouseX, mouseY)) {
                this.action();
            }
        }
    }

    cooInRectangle(x, y) {
      return (x < this.pos.x + this.size.x
              && x > this.pos.x
              && y < this.pos.y + this.size.y
              && y > this.pos.y);
    }
}
