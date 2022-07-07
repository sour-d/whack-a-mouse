class Game {
  #score;
  constructor() {
    this.#score = 0;
  }

  #updateScore(score) {
    this.#score += score;
    const resultElement = document.getElementsByClassName('score')[0];
    resultElement.innerText = this.#score;
  }

  evaluateMove(event) {
    const classList = event.target.classList;
    let background = 'bg-red';
    let score = -5;
    if (classList.contains('background')) {
      background = 'bg-green';
      score = 10;
    }
    classList.add(background);
    this.#updateScore(score);
  }

  registerEventsInHoles = () => {
    const holes = document.getElementsByClassName('hole');
    for (const hole of holes) {
      hole.addEventListener('mousedown', (event) => this.evaluateMove(event));
      hole.addEventListener('mouseup', removeColorOnMouseUp);
    }
  };

  start(config) {
    const { totalHoles: { row, column } } = config;
    this.registerEventsInHoles();
    const intervalId = setInterval(() => {
      const holeId = randomInt(row * column);
      showMouse(holeId);
    }, 1000);
    setTimeout(() => clearInterval(intervalId), 3000);
  }
}

const removeColorOnMouseUp = (event) => {
  event.target.classList.remove('bg-green');
  event.target.classList.remove('bg-red');
};

const randomInt = (limit) => {
  const number = Math.round(Math.random() * 1000);
  return number % limit;
};

const showMouse = (holeId) => {
  const holes = document.getElementsByClassName('hole');
  const hole = holes[holeId];
  hole.classList.add('background');
  setTimeout(() => hideMouse(hole), 700);
};

const hideMouse = (hole) => {
  hole.classList.remove('background');
};
