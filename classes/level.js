class Level {
  constructor(levelFile) { // levelFile: levels/levelX.json

    // temporary stuff, should be in the JSON level file
    this.platforms = [
      new Platform(330, 290, 120, 25, images.platform2),
      new Platform(500, 420, 70, 25, images.platform1),
      new Platform(600, 350, 50, 25, images.platform1),
      new Platform(200, 200, 100, 25, images.platform2)
    ];

    this.decorations = [
      new Sprite(-100, -2850, 100, 3800, images.brickwall)
    ];

    this.player = new Player(250, 400, 30, 30, images.player, 0.3, 8, 3);

    // do this at the end for every platform/decoration
    this.collideBoxes = [new CollideBox(-10000, 500, 20000, 100), new CollideBox(-100, -10000, 100, 10800)];

    for (let platform of this.platforms) {
      this.collideBoxes.push(new CollideBox(platform.pos.x, platform.pos.y, platform.size.x, platform.size.y));
    }

    this.cameraPosition = createVector(0, 0);
  }

  update() {
    //Store old x
    let oldx = this.player.pos.x; 

    this.player.moveUpdate(this.collideBoxes);
    
    //Move camera
    this.cameraPosition.x += this.player.pos.x - oldx;
    if (this.player.pos.y < 300) {
      this.cameraPosition.y = -this.player.pos.y + 300;
    } else {
      this.cameraPosition.y = 0;
    }

    this.player.update(this.cameraPosition, this.collideBoxes);

  }

  draw() {
    for (let platform of this.platforms) {
      platform.draw(this.cameraPosition);
    }

    for (let decoration of this.decorations) {
      decoration.draw(this.cameraPosition);
    }
  }
}