
let currentLevel;
let images;


function preload() {
  images = {
    player: loadImage("images/player.png"),
    background: loadImage("images/background.jpg"),
    platform1: loadImage("images/platform1.png"),
    platform2: loadImage("images/platform2.png"),
    brickwall: loadImage("images/brickwall.png")
  }

  sounds = {
    music: loadSound("sounds/Evan_king_moon_base.mp3")
  }

  currentLevel = new Level("levels/level1.json");
}


function setup() {
  createCanvas(800, 500);

  sounds.music.play();
}


function draw() {
  imageMode(CORNER);
  image(images.background, 0, 0, 800, 500);
  
  currentLevel.update();
  currentLevel.draw();
}
