class Label extends GUI {
  constructor(x, y, w, h, img, hasBackgroundImage, isActive, string, fontSize) {
    super(x, y, w, h, img, isActive);
    this.hasBackgroundImage = hasBackgroundImage;
    this.string = string;
    this.fontSize = fontSize;
  }

  draw() {
    if (this.isActive) {
      push();
      if (this.hasBackgroundImage) {
        imageMode(CORNER);
        image(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
      }
      
      
      textAlign(CENTER, CENTER);
      textSize(this.fontSize);

      text(this.string, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2);
      pop();
    }
  }
}
