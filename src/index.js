const main = () => {
  return createLevelManager();
}

const initiateNextLevel = main();

window.onload = initiateNextLevel;