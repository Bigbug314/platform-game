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
      else if (this.isCollidingY(oldPos.y, this.size.y, index)) {
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
