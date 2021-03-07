class Platform extends Sprite {
  constructor(x, y, w, h, img, /*collideBoxes*/) {
    super(x, y, w, h, img);
    this.collideBox = new CollideBox(this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  update(player) {
    
  }
}
