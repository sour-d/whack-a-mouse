const addEventsToStartButton = (level) => {
  const button = document.getElementById('start-game');
  button.addEventListener('click', () => level.start());
};

const addEventsToNextLevelButton = (level) => {
  const button = document.getElementById('next-level');
  button.addEventListener('click', () => level.initiateNextLevel());
};

const main = () => {
  const configs = [
    { totalHoles: { row: 2, column: 2 } },
    { totalHoles: { row: 3, column: 3 } }
  ];

  const game = new Game();
  const level = new Level(configs, (config) => game.start(config));

  addEventsToStartButton(level);
  addEventsToNextLevelButton(level);
  level.initiateNextLevel()
};

window.onload = main;
