function menuButtonClicked() {
    if (currentLevel.isMenuEnable) {
      currentLevel.isMenuEnable = false;
      currentLevel.guis[2].setActive(false);
      currentLevel.guis[3].setActive(false);
      currentLevel.guis[4].setActive(false);
      currentLevel.guis[5].setActive(false);
    } else {
      currentLevel.isMenuEnable = true;
      currentLevel.guis[2].setActive(true);
      currentLevel.guis[3].setActive(true);
      currentLevel.guis[4].setActive(false);
      currentLevel.guis[5].setActive(false);
    }
}

function tutorialClicked() {
    currentLevel.guis[2].setActive(false);
    currentLevel.guis[3].setActive(false);
    currentLevel.guis[4].setActive(true);
    currentLevel.guis[5].setActive(true);
}

function quitTutorialClicked() {
    currentLevel.guis[2].setActive(true);
    currentLevel.guis[3].setActive(true);
    currentLevel.guis[4].setActive(false);
    currentLevel.guis[5].setActive(false);
}