function getDataLevel1() {
  return {
    platforms: [
      new Platform(330, 290, 120, 25, images.platform2),
      new Platform(500, 420, 70, 25, images.platform1),
      new Platform(600, 350, 50, 25, images.platform1),
      new Platform(200, 200, 100, 25, images.platform2),

      new Platform(-100, -2850, 100, 3800, images.brickwall), // left wall
      new Platform(-10000, 500, 20000, 100, images.platform1) // floor
    ],

    decorations: [
    
    ],

    player: new Player(250, 400, 30, 30, images.player, 0.5, 10, 6)
  }
}
