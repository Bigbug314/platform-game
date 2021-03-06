class Spike extends Sprite {
    constructor(x, y, w, h, img) {
        super(x, y, w, h, img);
    }

    update(player) {
        if (this.isColliding(player)) {
            player.kill();
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