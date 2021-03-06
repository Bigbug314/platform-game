class Level {
  constructor(levelData) { // levelFile: levels/levelX.js
    this.platforms = levelData.platforms;
    this.decorations = levelData.decorations;
    this.checkpoints = levelData.checkpoints;
    this.player = levelData.player;

    // do this at the end for every platform/decoration
    this.collideBoxes = [];

    for (let platform of this.platforms) {
      if (platform.collideBox) {
        this.collideBoxes.push(platform.collideBox);
      }
    }

    this.cameraPosition = createVector(0, 0);
    this.checkpointCoo = createVector(250, 400);
  }

  update() {
    this.player.update(this.collideBoxes);
    if (this.player.isDead) {
      this.player.pos = createVector(this.checkpointCoo.x, this.checkpointCoo.y);
      this.player.vel = createVector(0, 0);
      this.player.isDead = false;
    }

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
