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
    this.checkpointCoo = createVector(250, 600);
    this.checkpointSelector = new Sprite(this.checkpointCoo.x, this.checkpointCoo.y, 30, 30, images.redround);

    //God mode
    this.godModEnable = false;
    //GUI
    this.isMenuEnable = false;
    this.guis = [
      new Button(10, 640, 50, 50, images.star, true, this.switchGodMode),          //God mode button
      new Button(1020, 10, 70, 70, images.menu, true, menuButtonClicked),   //Menu button
      new GUI(300, 50, 500, 600, images.menubackground, false),                 //Menu panel
      new Button(380, 120, 340, 90, images.tutorialtext, false, tutorialClicked), //Tutorial button
      new GUI(350, 50, 400, 600, images.menubackground, false),                         //Tutorial panel
      new Button(690, 60, 50, 50, images.quit, false, quitTutorialClicked),         //Quit tutorial button
      new Label(380, 120, 340, 90, images.menubackground, true, false, "Move: A/D\nJump: SPACE\nGo back to last checkpoint: E\n\n: Checkpoint", 20), //Tutorial
      new GUI(465, 197, 30, 30, images.star, false),
      new Label(380, 380, 340, 90, images.menubackground, true, false, "Volume:", 70),     //Volume text
      new SlideBar(380, 500, 340, 10, false, 5, [0,0,0], [255,0,0], 50, 1),          //Volume slidebar
      new ProgressBar(40, 40, 230, 30, true, [48, 217, 252], [180, 180, 180], [0, 0, 0], 3, 50, 100),          //Xp progress bar
      new Label(50, 47, 50, 20, null, false, true, "LVL "+lvl, 20)          //lvl label
    ];
  }

  update() {
    this.player.update(this.collideBoxes, this.godModEnable);
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
        if (this.checkpointCoo.x != checkpoint.pos.x && this.checkpointCoo.y != checkpoint.pos.y) {
          this.checkpointCoo = createVector(checkpoint.pos.x, checkpoint.pos.y);
          this.checkpointSelector.pos = createVector(checkpoint.pos.x, checkpoint.pos.y);
          sounds.checkpoint.play();
        }
      }
    }


    //Go back to last checkpoint
    if (keyIsDown(69)) {
      this.player.pos = createVector(this.checkpointCoo.x, this.checkpointCoo.y);
      this.player.vel = createVector(0, 0);
    }

    //Move camera
    this.cameraPosition.x = this.player.pos.x-350;
    
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

    if (this.checkpointCoo.x != 250 && this.checkpointCoo.y != 600) {
      this.checkpointSelector.draw(this.cameraPosition);
    }

    this.player.draw(this.cameraPosition);


    //Gui
    for (let gui of this.guis) {
      gui.draw();
    }
  }

  switchGodMode() {
    if (currentLevel.godModEnable) {
      currentLevel.godModEnable = false;
    } else {
      currentLevel.godModEnable = true;
    }
  }
}