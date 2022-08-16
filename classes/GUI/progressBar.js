class ProgressBar extends GUI {
    constructor(x, y, w, h, isActive, barColor, backgroundColor, outlineColor, outlineSize, startValue, maxValue) {
        super(x, y, w, h, null, isActive);
        this.value = startValue;
        this.maxValue = maxValue;
        this.barColor = barColor;
        this.backgroundColor = backgroundColor;
        this.outlineColor = outlineColor;
        this.outlineSize = outlineSize;
    }

    draw() {
        if (this.isActive) {
            push();
            fill(this.outlineColor[0], this.outlineColor[1], this.outlineColor[2]);
            rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
            fill(this.backgroundColor[0], this.backgroundColor[1], this.backgroundColor[2]);
            rect(this.pos.x+this.outlineSize, this.pos.y+this.outlineSize, this.size.x-(this.outlineSize*2), this.size.y-(this.outlineSize*2));
            fill(this.barColor[0], this.barColor[1], this.barColor[2]);
            noStroke();
            rect(this.pos.x+this.outlineSize, this.pos.y+this.outlineSize, (this.size.x-(this.outlineSize*2))*(this.value/this.maxValue), this.size.y-(this.outlineSize*2));
            pop();
        }
    }

    setValue(value) {
        this.value = value;
    }
}