const levels = [ // this could be turned into a json file
  [
    [380, 370, 80, 15, "platform1"],
    [500, 450, 40, 15, "platform1"],
    [580, 380, 30, 15, "platform1"],
    [300, 300, 70, 15, "platform1"]
  ]
]


function loadLevel(levelNumber) {
    let level = [];
    for (let platform of levels[levelNumber]) {
      level.push(new Platform(platform[0], platform[1], platform[2], platform[3], images[platform[4]]));
    }
    return level;
}
