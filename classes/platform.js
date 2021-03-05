class Platform extends Sprite {
  constructor(x, y, w, h, img) {
    super(x, y, w, h, img);
    collideBoxes.push(new CollideBox(x, y, w, h));
    this.index = collideBoxes.length-1;
  }
}
