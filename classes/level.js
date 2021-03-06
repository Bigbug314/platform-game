class Level {
  constructor(levelFile) { // levelFile: levels/levelX.json

    // temporary stuff, should be in the JSON level file
    this.platforms = [
      new Platform(-100, -2850, 100, 3800, images.brickwall), //left wall
      new Platform(-10000, 500, 20000, 100, images.platform1), //floor
      new Platform(330, 290, 120, 25, images.platform2),
      new Platform(500, 420, 70, 25, images.platform1),
      new Platform(600, 350, 50, 25, images.platform1),
      new Platform(200, 200, 100, 25, images.platform2),
      new MovingPlatform(380, -20, 90, 25, images.platform2, "vertical", 170, 1.5),
      new Platform(500, -50, 300, 25, images.platform2)
    ];

    this.decorations = [
      new Sprite(-100, -2850, 100, 3800, images.brickwall)
    ];

    this.checkpoints = [
      new Checkpoint(635, -100, 30, 30, images.star)
    ]

    this.player = new Player(250, 400, 30, 30, images.player, 0.3, 8, 3);

    // do this at the end for every platform/decoration
    this.collideBoxes = [];

    for (let platform of this.platforms) {
      this.collideBoxes.push(platform.collideBox);
    }

    this.cameraPosition = createVector(0, 0);
    this.checkpointCoo = createVector(250, 400);
  }

  update() {
    this.player.update(this.cameraPosition, this.collideBoxes);

    for (let platform of this.platforms) {
      platform.update(this.player);
    }

    for (let checkpoint of this.checkpoints) {
      if (checkpoint.isColliding(this.player)) {
        this.checkpointCoo = createVector(checkpoint.pos.x, checkpoint.pos.y);
      }
    }


    //Go back to last checkpoint
    if (keyIsDown(69)) {
      this.player.pos = createVector(this.checkpointCoo.x, this.checkpointCoo.y);
      this.player.vel = createVector(0, 0);
    }

    //Move camera
    this.cameraPosition.x = this.player.pos.x-250;
    
    if (this.player.pos.y < 300) {
      this.cameraPosition.y = -this.player.pos.y + 300;
    } else {
      this.cameraPosition.y = 0;
    }
  }

  draw() {
    for (let platform of this.platforms) {
      platform.draw(this.cameraPosition);
    }

    for (let decoration of this.decorations) {
      decoration.draw(this.cameraPosition);
    }

    for (let checkpoint of this.checkpoints) {
      checkpoint.draw(this.cameraPosition);
    }

    this.player.draw(this.cameraPosition);
  }
}
