class BouncyPlatform extends Platform {
    constructor(x, y, w, h, img, bounciness) {
        super(x, y, w, h, img);
        this.bounciness = bounciness;
    }

    update(player) {
        if (this.isPlayerOnPlatform(player)) {
            player.vel.y = -this.bounciness;
        }
    }

    isPlayerOnPlatform(player) {
        let x = player.pos.x;
        let y = player.pos.y;
        let w = player.size.x;
        let h = player.size.y;
        //X
        let collideX = false;
        if (this.pos.x >= x) {
            let d = this.pos.x - x;
            if (w > d) {
            collideX = true;
            }
        }
        else if (this.pos.x < x) {
            let d = x - this.pos.x;
            if (this.size.x > d) {
            collideX = true;
            }
        }

        if (collideX && y+h == this.pos.y) {
            return true;
        }
        return false;
    }
}