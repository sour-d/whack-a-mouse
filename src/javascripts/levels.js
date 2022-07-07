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

  initiateNextLevel() {
    this.#incrementLevel();
    if (this.#level > 0) clearBoard();
    createBoard(this.currentConfig);
  }

  start() {
    this.#playARound(this.currentConfig);
  }
}