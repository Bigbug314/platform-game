class Level {
  constructor(levelData) { // levelFile: levels/levelX.js
    this.platforms = levelData.platforms;
    this.decorations = levelData.decorations;
    this.checkpoints = levelData.checkpoints;
    this.player = levelData.player;

    // do this at the end for every platform/decoration
    this.collideBoxes = [];

    for (let platform of this.platforms) {
      this.collideBoxes.push(platform.collideBox);
    }

    this.cameraPosition = createVector(0, 0);
  }

  update() {
    this.player.update(this.cameraPosition, this.collideBoxes);

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
    this.player.draw(this.cameraPosition);
  }
}
