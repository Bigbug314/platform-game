function generatePlatforms() {
    return [
        new Platform(330, 290, 120, 25, images.platform2),
        new Platform(500, 420, 70, 25, images.platform1),
        new Platform(600, 350, 50, 25, images.platform1),
        new Platform(200, 200, 100, 25, images.platform2)
    ];
}

function generateDecorations() {
    return [
        new Sprite(-100, -2850, 100, 3800, images.brickwall)
    ];
}