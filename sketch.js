let collideBoxes
let platforms;

let cameraPosition;

let player;

let images;

function preload() {
  images = {
    player: loadImage("Images/player.png"),
    platform1: loadImage("Images/platform1.png")
  }
  collideBoxes = [new CollideBox(-1000, 500, 2000, 100), new CollideBox(-100, -1000, 100, 1800)];
  platforms = generatePlatforms();
}

function setup() {
  createCanvas(800,500);
  cameraPosition = createVector(0, 0);
  
  player = new Player(100, 400, 50, 50, images.player, 0.1, 6, 3);
}

function draw() {
  background(200);
  
  player.update(cameraPosition);
  
  let platform;
  for (platform of platforms) {
    platform.draw(cameraPosition);
  }
}




class Sprite {
  constructor(x, y, w, h, img) {
    this.pos = createVector(x, y);
    this.size = createVector(w, h);
    this.img = img;
  }
  
  draw(cameraPos) {
    push();
    imageMode(CORNER);
    image(this.img, this.pos.x+cameraPos.x, this.pos.y+cameraPos.y, this.size.x, this.size.y);
    pop();
  }
}


class Entity extends Sprite {
  constructor(x, y, w, h, img, gravity) {
    super(x, y, w, h, img);
    this.vel = createVector(0, 0);
    this.gravity = gravity;
  }
  
  moveUpdate() {
    //Gravity
    this.addForce(createVector(0, this.gravity));
    
    var oldPos = createVector(this.pos.x, this.pos.y);
    //Move
    this.pos.add(this.vel);
    var indexes = this.isColliding(this.pos.x, this.pos.y, this.size.x, this.size.y);
    
    //Loop for all the collisions
    var index
    for (index of indexes) {
      if (this.isCollidingX(oldPos.x, this.size.x, index)) {
        if (this.vel.y < 0) {
          this.pos.y = collideBoxes[index].pos.y+collideBoxes[index].size.y;
        }
        else if (this.vel.y > 0) {
          this.pos.y = collideBoxes[index].pos.y-this.size.y;
        }
        this.vel.y = 0;
      }
      if (this.isCollidingY(oldPos.y, this.size.y, index)) {
        if (this.vel.x < 0) {
          this.pos.x = collideBoxes[index].pos.x+collideBoxes[index].size.x;
        }
        else if (this.vel.x > 0) {
          this.pos.x = collideBoxes[index].pos.x-this.size.x;
        }
        this.vel.x = 0;
      }
    }
  }
  
  addForce(vector) {
    this.vel.add(vector);
  }
  
  isColliding(x, y, w, h) {
    var collideBox;
    var indexes = [];
    for (collideBox of collideBoxes) {
      //X
      var collideX = false;
      if (collideBox.pos.x >= x) {
        var d = collideBox.pos.x - x;
        if (w > d) {
          collideX = true;
        }
      }
      else if (collideBox.pos.x < x) {
        var d = x - collideBox.pos.x;
        if (collideBox.size.x > d) {
          collideX = true;
        }
      }
      
      //Y
      if (collideX) {
        if (collideBox.pos.y >= y) {
          var d = collideBox.pos.y - y;
          if (h > d) {
            indexes.push(collideBoxes.indexOf(collideBox));
          }
        }
        else if (collideBox.pos.y < y) {
          var d = y - collideBox.pos.y;
          if (collideBox.size.y > d) {
            indexes.push(collideBoxes.indexOf(collideBox));
          }
        }
      }
    }
    return indexes;
  }
  
  isCollidingX(x, w, i) {
    var collideBox = collideBoxes[i];
    if (collideBox.pos.x >= x) {
        var d = collideBox.pos.x - x;
        if (w > d) {
          return true;
        }
      }
      else if (collideBox.pos.x < x) {
        var d = x - collideBox.pos.x;
        if (collideBox.size.x > d) {
          return true;
        }
      }
  }
  
  isCollidingY(y, h, i) {
    var collideBox = collideBoxes[i];
    if (collideBox.pos.y >= y) {
      var d = collideBox.pos.y - y;
      if (h > d) {
        return true;
      }
    }
    else if (collideBox.pos.y < y) {
      var d = y - collideBox.pos.y;
      if (collideBox.size.y > d) {
        return true;
      }
    }
  }


  isOnSomething() {
    var x = this.pos.x;
    var y = this.pos.y;
    var w = this.size.x;
    var h = this.size.y;
    var collideBox;
    for (collideBox of collideBoxes) {
      //X
      var collideX = false;
      if (collideBox.pos.x >= x) {
        var d = collideBox.pos.x - x;
        if (w > d) {
          collideX = true;
        }
      }
      else if (collideBox.pos.x < x) {
        var d = x - collideBox.pos.x;
        if (collideBox.size.x > d) {
          collideX = true;
        }
      }

      if (collideX && y+h == collideBox.pos.y) {
        return true;
      }
    }
    return false;
  }
}



class Player extends Entity {
  constructor(x, y, w, h, img, gravity, jumpForce, speed) {
    super(x, y, w, h, img, gravity);
    this.jumpForce = jumpForce;
    this.speed = speed;
  }
  
  update(cameraPos) {
    this.moveUpdate();
    this.keyboardEventUpdate();
    this.draw(cameraPos);
  }
  
  keyboardEventUpdate() {
    //JUMP
    if (keyIsDown(32) && this.isOnSomething()) {
      this.vel.add(createVector(0, -this.jumpForce));
    }


    var moving = false;
    //LEFT
    if (keyIsDown(81) || keyIsDown(65)) {
      this.vel.x = -this.speed;
      moving = true;
    }
    //RIGHT
    if (keyIsDown(68)) {
      this.vel.x = this.speed;
      moving = true;
    }

    //Remove velocity if not moving
    if (!moving) {
      this.vel.x = 0;
    }
  }
}


class CollideBox {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.size = createVector(w, h);
  }
}


class Platform extends Sprite {
  constructor(x, y, w, h, img) {
    super(x, y, w, h, img);
    collideBoxes.push(new CollideBox(x, y, w, h));
    this.index = collideBoxes.length-1;
  }
}