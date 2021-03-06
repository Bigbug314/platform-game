class MovingPlatform extends Platform {
    constructor(x, y, w, h, img, orientation, distance, speed) {
        super(x, y, w, h, img);
        //vertical or orizontal
        this.orientation = orientation;
        //the distance that the platform will travel
        this.distance = distance;
        //the speed of the platform
        this.speed = speed;
        //the direction of the platform (false -> up or left | true -> down or right)
        this.direction = true;
        //where is the platform relativly
        this.relativePos = 0;
    }

    update(player) {
        if (this.orientation == "orizontal") {
            if (this.direction) {
                this.pos.x += this.speed;
                this.collideBox.pos.x += this.speed;
                this.relativePos += this.speed;
                if (this.isColliding(player)) {
                    player.pos.x = this.pos.x+this.size.x;
                }
            } else {
                this.pos.x -= this.speed;
                this.collideBox.pos.x -= this.speed;
                this.relativePos -= this.speed;
                if (this.isColliding(player)) {
                    player.pos.x = this.pos.x-player.size.x;
                }
            }

            if (this.relativePos > this.distance) {
                this.relativePos = this.distance;
                this.direction = false;
            }
            if (this.relativePos < 0) {
                this.relativePos = 0;
                this.direction = true;
            }
        }
        if (this.orientation == "vertical") {
            if (this.direction) {
                this.pos.y += this.speed;
                this.collideBox.pos.y += this.speed;
                this.relativePos += this.speed;
                if (this.isColliding(player)) {
                    player.pos.y = this.pos.y+this.size.y;
                }
            } else {
                this.pos.y -= this.speed;
                this.collideBox.pos.y -= this.speed;
                this.relativePos -= this.speed;
                if (this.isColliding(player)) {
                    player.pos.y = this.pos.y-player.size.y;
                }
            }

            if (this.relativePos > this.distance) {
                this.relativePos = this.distance;
                this.direction = false;
            }
            if (this.relativePos < 0) {
                this.relativePos = 0;
                this.direction = true;
            }
        }
    }


    isColliding(object) {
        let x = this.pos.x;
        let y = this.pos.y;
        let w = this.size.x;
        let h = this.size.y;
        let collideX = false;
        if (object.pos.x >= x) {
            let d = object.pos.x - x;
            if (w > d) {
                collideX = true;
            }
        }
        else if (object.pos.x < x) {
            let d = x - object.pos.x;
            if (object.size.x > d) {
                collideX = true;
            }
        }
        
        //Y
        if (collideX) {
            if (object.pos.y >= y) {
                let d = object.pos.y - y;
                if (h > d) {
                    return true;
                }
            }
            else if (object.pos.y < y) {
                let d = y - object.pos.y;
                if (object.size.y > d) {
                    return true
                }
            }
        }
        return false;
    }
}