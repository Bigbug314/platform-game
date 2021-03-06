function getDataLevel1() {
  return {
    platforms: [
      new Platform(-100, -2850, 100, 3800, images.brickwall), //left wall
      new Platform(-10000, 470, 20000, 100, images.platform1), //floor
      new Platform(330, 290, 120, 25, images.platform2),
      new Platform(500, 420, 70, 25, images.platform1),
      new Platform(600, 350, 50, 25, images.platform1),
      new Platform(200, 200, 100, 25, images.platform2),
      new MovingPlatform(380, -20, 90, 25, images.platform2, "vertical", 170, 1.5),
      new Platform(500, -50, 300, 25, images.platform2),
      new BouncyPlatform(900, 100, 70, 10, images.slime, 15),
      new Platform(1050, -200, 100, 25, images.platform2),
      new Spike(1050, -215, 50, 15, images.spike)
    ],

    decorations: [
      new Sprite(-100, -2850, 100, 3800, images.brickwall),
      new Sprite(-10000, 470, 2000, 30, images.floor),
      new Sprite(-8000, 470, 2000, 30, images.floor),
      new Sprite(-6000, 470, 2000, 30, images.floor),
      new Sprite(-4000, 470, 2000, 30, images.floor),
      new Sprite(-2000, 470, 2000, 30, images.floor),
      new Sprite(0, 470, 2000, 30, images.floor),
      new Sprite(2000, 470, 2000, 30, images.floor),
      new Sprite(4000, 470, 2000, 30, images.floor),
      new Sprite(6000, 470, 2000, 30, images.floor),
      new Sprite(8000, 470, 2000, 30, images.floor)
    ],

    checkpoints: [
      new Checkpoint(635, -100, 30, 30, images.star)
    ],

    player: new Player(250, 400, 30, 30, images.player, 0.3, 8, 3)
  }
}
