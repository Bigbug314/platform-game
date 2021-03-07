class Player extends Entity {
  constructor(x, y, w, h, img, gravity, jumpForce, speed) {
    super(x, y, w, h, img, gravity);
    this.jumpForce = jumpForce;
    this.speed = speed;
    this.isDead = false;
  }
  
  update(collideBoxes, godMode) {
    this.moveUpdate(collideBoxes);
    this.keyboardEventUpdate(collideBoxes);
    if (godMode) {
      console.log("aaa");
      this.vel = createVector(0, 0);
      this.gravity = 0;
    }
  }
  
  keyboardEventUpdate(collideBoxes) {
    //JUMP
    if (keyIsDown(32) && this.isOnSomething(collideBoxes)) {
      this.vel.add(createVector(0, -this.jumpForce));
    }

    let moving = false;
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

  kill() {
    this.isDead = true;
  }
}

