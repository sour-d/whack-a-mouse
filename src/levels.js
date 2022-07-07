class Level {
  #levelConfigs;
  #level;
  #playARound;

  constructor(configs, startGame) {
    this.#levelConfigs = configs;
    this.#playARound = startGame;
    this.#level = -1;
  }

  #incrementLevel() {
    this.#level++;
  }

  get currentConfig() {
    return this.#levelConfigs[this.#level];
  }

  addEventsToStartButton() {
    const button = document.getElementById('start-game');
    button.addEventListener('click', () => this.start());
  };

  addEventsToNextLevelButton() {
    const button = document.getElementById('next-level');
    button.addEventListener('click', () => this.initiateNextLevel());
  };

  initiateNextLevel() {
    this.#incrementLevel();
    if (this.#level === 0) this.addEventsToStartButton();
    if (this.#level > 0) clearBoard();
    createBoard(this.currentConfig);
    this.addEventsToNextLevelButton();
  }

  start() {
    this.#playARound(this.currentConfig);
  }
}

const main = () => {
  const configs = [
    { totalHoles: { row: 2, column: 2 } },
    { totalHoles: { row: 3, column: 3 } }
  ];

  const game = new Game();
  const level = new Level(configs, (config) => game.start(config));
  window.onload = () => level.initiateNextLevel();
};

main();
