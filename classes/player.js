class Player extends Entity {
  constructor(x, y, w, h, img, gravity, jumpForce, speed) {
    super(x, y, w, h, img, gravity);
    this.jumpForce = jumpForce;
    this.speed = speed;
    this.isDead = false;
    this.canDie = true;
  }
  
  update(collideBoxes, godMode) {
    if (!godMode) {
      this.canDie = true;
      this.moveUpdate(collideBoxes);
      this.keyboardEventUpdate(collideBoxes);
    } else {
      this.vel = createVector(0, 0);
      this.canDie = false;
      if (keyIsDown(81) || keyIsDown(65)) {
        this.pos.x -= 5;
      }
      if (keyIsDown(68)) {
        this.pos.x += 5;
      }
      if (keyIsDown(90) || keyIsDown(87)) {
        this.pos.y -= 5;
      }
      if (keyIsDown(83)) {
        this.pos.y += 5;
      }
    }
  }
  
  keyboardEventUpdate(collideBoxes) {
    //JUMP
    if (keyIsDown(32) && this.isOnSomething(collideBoxes)) {
      this.vel.add(createVector(0, -this.jumpForce));
      sounds.jump.play();
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
    if (this.canDie) {
      this.isDead = true;
    }
  }
}

