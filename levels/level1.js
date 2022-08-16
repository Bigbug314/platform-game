function getDataLevel1() {
  return {
    platforms: [
      new Platform(-100, -2850, 100, 3800, images.brickwall), //left wall 
      new Platform(-10000, 670, 20000, 100, images.platform1), //floor
      new Platform(330, 470, 120, 25, images.platform2),
      new Platform(500, 600, 70, 25, images.platform1),
      new Platform(600, 530, 50, 25, images.platform1),
      new Platform(200, 380, 100, 25, images.platform2),
      new MovingPlatform(380, 160, 90, 25, images.platform2, "vertical", 170, 1.5),
      new Platform(500, 130, 300, 25, images.platform2),
      new BouncyPlatform(900, 280, 70, 10, images.slime, 15),
      new Platform(1050, -20, 150, 25, images.platform2),
      new Spike(1050, -35, 50, 15, images.spike)
    ],

    decorations: [
      new Sprite(-100, -2850, 100, 3800, images.brickwall),
      new Sprite(-10000, 670, 2000, 30, images.floor),
      new Sprite(-8000, 670, 2000, 30, images.floor),
      new Sprite(-6000, 670, 2000, 30, images.floor),
      new Sprite(-4000, 670, 2000, 30, images.floor),
      new Sprite(-2000, 670, 2000, 30, images.floor),
      new Sprite(0, 670, 2000, 30, images.floor),
      new Sprite(2000, 670, 2000, 30, images.floor),
      new Sprite(4000, 670, 2000, 30, images.floor),
      new Sprite(6000, 670, 2000, 30, images.floor),
      new Sprite(8000, 670, 2000, 30, images.floor)
    ],

    checkpoints: [
      new Checkpoint(635, 95, 30, 30, images.star),
      new Checkpoint(1160, -55, 30, 30, images.star),
      //Test checkpoints
      new Checkpoint(800, 635, 30, 30, images.star),
      new Checkpoint(900, 635, 30, 30, images.star),
      new Checkpoint(1000, 635, 30, 30, images.star),
      new Checkpoint(1100, 635, 30, 30, images.star),
      new Checkpoint(1200, 635, 30, 30, images.star),
      new Checkpoint(1300, 635, 30, 30, images.star),
      new Checkpoint(1400, 635, 30, 30, images.star),
      new Checkpoint(1500, 635, 30, 30, images.star),
      new Checkpoint(1600, 635, 30, 30, images.star),
      new Checkpoint(1700, 635, 30, 30, images.star)
    ],

    player: new Player(250, 600, 30, 30, images.player, 0.3, 8, 3)
  }
}
