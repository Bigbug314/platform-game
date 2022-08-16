function menuButtonClicked() {
    if (currentLevel.isMenuEnable) {
      currentLevel.isMenuEnable = false;
      currentLevel.guis[2].setActive(false);
      currentLevel.guis[3].setActive(false);
      currentLevel.guis[4].setActive(false);
      currentLevel.guis[5].setActive(false);
      currentLevel.guis[6].setActive(false);
      currentLevel.guis[7].setActive(false);
      currentLevel.guis[8].setActive(false);
      currentLevel.guis[9].setActive(false);
    } else {
      currentLevel.isMenuEnable = true;
      currentLevel.guis[2].setActive(true);
      currentLevel.guis[3].setActive(true);
      currentLevel.guis[4].setActive(false);
      currentLevel.guis[5].setActive(false);
      currentLevel.guis[6].setActive(false);
      currentLevel.guis[7].setActive(false);
      currentLevel.guis[8].setActive(true);
      currentLevel.guis[9].setActive(true);
    }
}

function tutorialClicked() {
    currentLevel.guis[2].setActive(false);
    currentLevel.guis[3].setActive(false);
    currentLevel.guis[4].setActive(true);
    currentLevel.guis[5].setActive(true);
    currentLevel.guis[6].setActive(true);
    currentLevel.guis[7].setActive(true);
    currentLevel.guis[8].setActive(false);
    currentLevel.guis[9].setActive(false);
}

function quitTutorialClicked() {
    currentLevel.guis[2].setActive(true);
    currentLevel.guis[3].setActive(true);
    currentLevel.guis[4].setActive(false);
    currentLevel.guis[5].setActive(false);
    currentLevel.guis[6].setActive(false);
    currentLevel.guis[7].setActive(false);
    currentLevel.guis[8].setActive(true);
    currentLevel.guis[9].setActive(true);
}