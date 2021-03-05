let collideBoxes
let platforms;
let decorations;

let cameraPosition;

let player;

let images;


function preload() {
  images = {
    player: loadImage("images/player.png"),
    background: loadImage("images/background.jpg"),
    platform1: loadImage("images/platform1.png"),
    platform2: loadImage("images/platform2.png"),
    brickwall: loadImage("images/brickwall.png")
  }
  collideBoxes = [new CollideBox(-10000, 500, 20000, 100), new CollideBox(-100, -10000, 100, 10800)];
  platforms = generatePlatforms();
  decorations = generateDecorations();
}


function setup() {
  createCanvas(800,500);
  cameraPosition = createVector(0, 0);
  
  player = new Player(250, 400, 30, 30, images.player, 0.3, 8, 3);
}


function draw() {
  imageMode(CORNER);
  image(images.background, 0, 0, 800, 500);
  
  player.update(cameraPosition);
  
  let platform;
  for (platform of platforms) {
    platform.draw(cameraPosition);
  }
  let decoration;
  for (decoration of decorations) {
    decoration.draw(cameraPosition);
  }
}
