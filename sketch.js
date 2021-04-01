let currentLevel;
let images;
let volume = 1;

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

  sounds.music.setVolume(0.03*volume);
  sounds.checkpoint.setVolume(0.3*volume);
  sounds.jump.setVolume(0.1*volume);
  sounds.slime.setVolume(0.5*volume);
  sounds.spike.setVolume(0.3*volume);
}


function draw() {
  imageMode(CORNER);
  image(images.background, 0, 0, width, height);
  
  currentLevel.update();
  currentLevel.draw();


  if (!sounds.music.isPlaying()) {
    sounds.music.play().setVolume();
  }
}

function mouseClicked() {
  for (let gui of currentLevel.guis) {
    gui.update(createVector(mouseX,mouseY));
  }
}

function mouseDragged() {
  currentLevel.guis[9].update();
  volume = currentLevel.guis[9].getValue();
  updateVolume();
}


function updateVolume() {
  sounds.music.setVolume(0.03*volume);
  sounds.checkpoint.setVolume(0.3*volume);
  sounds.jump.setVolume(0.1*volume);
  sounds.slime.setVolume(0.5*volume);
  sounds.spike.setVolume(0.3*volume);
}