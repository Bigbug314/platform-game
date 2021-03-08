let currentLevel;
let images;

function preload() {
  images = {
    player: loadImage("images/player.png"),
    background: loadImage("images/background.jpg"),
    platform1: loadImage("images/platform1.png"),
    platform2: loadImage("images/platform2.png"),
    brickwall: loadImage("images/brickwall.png"),
    star: loadImage("images/star.png"),
    floor: loadImage("images/floor.png"),
    slime: loadImage("images/slime.png"),
    spike: loadImage("images/spike.png"),
    redround: loadImage("images/red_round.png"),
    menu: loadImage("images/menu.png"),
    menubackground: loadImage("images/white.png"),
    tutorialtext: loadImage("images/tutorialtext.png"),
    quit: loadImage("images/quit.png")
  }

  sounds = {
    music: loadSound("sounds/Evan_king_moon_base.mp3"),
    checkpoint: loadSound("sounds/checkpoint.wav"),
    jump: loadSound("sounds/jump.mp3"),
    slime: loadSound("sounds/slime.mp3"),
    spike: loadSound("sounds/spike.mp3")
  }

  currentLevel = new Level(getDataLevel1());
}


function setup() {
  createCanvas(1100, 700);

  sounds.music.setVolume(0.03);
  sounds.jump.setVolume(0.1);
  sounds.slime.setVolume(0.5);
  sounds.spike.setVolume(0.3);
}


function draw() {
  imageMode(CORNER);
  image(images.background, 0, 0, width, height);
  
  currentLevel.update();
  currentLevel.draw();

  if (!sounds.music.isPlaying()) {
    sounds.music.play();
  }
}

function mouseClicked() {
  for (let gui of currentLevel.guis) {
    gui.update(createVector(mouseX,mouseY));
  }
}

function mouseDragged() {
  currentLevel.guis[8].update();
}