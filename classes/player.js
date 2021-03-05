class Player extends Entity {
  constructor(x, y, w, h, img, gravity, jumpForce, speed) {
    super(x, y, w, h, img, gravity);
    this.jumpForce = jumpForce;
    this.speed = speed;
  }
  
  update(cameraPos) {
    //Store old x
    var oldx = this.pos.x; 
    
    this.moveUpdate();
    
    //Move camera
    cameraPosition.x += this.pos.x - oldx;
    if (this.pos.y < 300) {
      cameraPosition.y = -this.pos.y+300;
    } else {
      cameraPosition.y = 0;
    }
    
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

