class SlideBar extends GUI {
    constructor(x, y, w, h, interval, rectangleColor, roundColor, roundRadius) {
        super(x, y, w, h, null);
        this.interval = interval;
        this.ballX = this.pos.x;
        this.value = 0;
        this.rectangleColor = rectangleColor;
        this.roundColor = roundColor;
        this.roundRadius = roundRadius;
    }

    draw() {
        if (this.isActive) {
            push();
            fill(this.rectangleColor[0], this.rectangleColor[1], this.rectangleColor[2]);
            rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
            fill(this.roundColor[0], this.roundColor[1], this.roundColor[2]);
            ellipse(this.ballX, this.pos.y+(this.size.y/2), this.roundRadius, this.roundRadius);
            pop();
        }
    }

    update() {
        if (this.isActive) {
            if (this.cooInRectangle(mouseX, mouseY)) {
                console.log(mouseX);
                this.ballX = floor(mouseX);
                this.value = (mouseX-this.pos.x)/this.size.y * this.interval;
            }
        }
    }

    cooInRectangle(x, y) {
        let thisy = this.pos.y+(this.size.y/2)-this.roundRadius;
        let thish = this.roundRadius*2;
        //console.log(thisy+" "+thish);
        return (x < this.pos.x + this.size.x
                && x > this.pos.x
                && y < thisy + thish
                && y > thisy);
    }

    getValue() {
        return this.value;
    }
}