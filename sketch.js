let collideBoxes
let platforms;

let cameraPosition;

let player;

let images;

function preload() {
  images = {
    player: loadImage("Images/player.png"),
    background: loadImage("Images/background.jpg"),
    platform1: loadImage("Images/platform1.png")
  }
  collideBoxes = [new CollideBox(-10000, 500, 20000, 100), new CollideBox(-100, -10000, 100, 10800)];
  platforms = loadLevel(0);
}

function setup() {
  createCanvas(800,500);
  cameraPosition = createVector(0, 0);
  
  player = new Player(250, 400, 30, 30, images.player, 0.3, 7, 2.4);
}

function draw() {
  imageMode(CORNER);
  image(images.background, 0, 0, 800, 500);
  
  player.update(cameraPosition);
  
  let platform;
  for (platform of platforms) {
    platform.draw(cameraPosition);
  }
}










