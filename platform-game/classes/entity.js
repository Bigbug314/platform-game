class Entity extends Sprite {
  constructor(x, y, w, h, img, gravity) {
    super(x, y, w, h, img);
    this.vel = createVector(0, 0);
    this.gravity = gravity;
  }
  
  moveUpdate(collideBoxes) {
    //Gravity
    this.addForce(createVector(0, this.gravity));
    
    let oldPos = createVector(this.pos.x, this.pos.y);
    //Move
    this.pos.add(this.vel);

    let indexes = this.isColliding(this.pos.x, this.pos.y, this.size.x, this.size.y, collideBoxes);


    
    for (let index of indexes) {
      if (this.isCollidingX(oldPos.x, this.size.x, index, collideBoxes)) {
        if (this.vel.y < 0) {
          this.pos.y = collideBoxes[index].pos.y+collideBoxes[index].size.y;
        }
        else if (this.vel.y > 0) {
          this.pos.y = collideBoxes[index].pos.y-this.size.y;
        }
        this.vel.y = 0;
      }
      else if (this.isCollidingY(oldPos.y, this.size.y, index, collideBoxes)) {
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
  
  isColliding(x, y, w, h, collideBoxes) {
    let indexes = [];
    for (let collideBox of collideBoxes) {
      //X
      let collideX = false;
      if (collideBox.pos.x >= x) {
        let d = collideBox.pos.x - x;
        if (w > d) {
          collideX = true;
        }
      }
      else if (collideBox.pos.x < x) {
        let d = x - collideBox.pos.x;
        if (collideBox.size.x > d) {
          collideX = true;
        }
      }
      
      //Y
      if (collideX) {
        if (collideBox.pos.y >= y) {
          let d = collideBox.pos.y - y;
          if (h > d) {
            indexes.push(collideBoxes.indexOf(collideBox));
          }
        }
        else if (collideBox.pos.y < y) {
          let d = y - collideBox.pos.y;
          if (collideBox.size.y > d) {
            indexes.push(collideBoxes.indexOf(collideBox));
          }
        }
      }
    }
    return indexes;
  }
  
  isCollidingX(x, w, i, collideBoxes) {
    let collideBox = collideBoxes[i];
    if (collideBox.pos.x >= x) {
        let d = collideBox.pos.x - x;
        if (w > d) {
          return true;
        }
      }
      else if (collideBox.pos.x < x) {
        let d = x - collideBox.pos.x;
        if (collideBox.size.x > d) {
          return true;
        }
      }
  }
  
  isCollidingY(y, h, i, collideBoxes) {
    let collideBox = collideBoxes[i];
    if (collideBox.pos.y >= y) {
      let d = collideBox.pos.y - y;
      if (h > d) {
        return true;
      }
    }
    else if (collideBox.pos.y < y) {
      let d = y - collideBox.pos.y;
      if (collideBox.size.y > d) {
        return true;
      }
    }
  }


  isOnSomething(collideBoxes) {
    let x = this.pos.x;
    let y = this.pos.y;
    let w = this.size.x;
    let h = this.size.y;
    for (let collideBox of collideBoxes) {
      //X
      let collideX = false;
      if (collideBox.pos.x >= x) {
        let d = collideBox.pos.x - x;
        if (w > d) {
          collideX = true;
        }
      }
      else if (collideBox.pos.x < x) {
        let d = x - collideBox.pos.x;
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

