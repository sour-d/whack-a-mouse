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

// const updateScore = (score) => {
//   const resultElement = document.getElementsByClassName('score')[0];
//   const currentScore = parseInt(resultElement.innerText);
//   resultElement.innerText = score + currentScore;
// };

// const registerScoreOnClick = (event) => {
//   const classList = event.target.classList;
//   if (classList.contains('background')) {
//     classList.add('bg-green');
//     updateScore(10);
//     return;
//   }
//   classList.add('bg-red');
//   updateScore(-5);
// };

const removeColorOnMouseUp = (event) => {
  event.target.classList.remove('bg-green');
  event.target.classList.remove('bg-red');
};

// const startGame = ({ totalHoles: { row, column } }) => {
//   const intervalId = setInterval(() => showMouse(row * column), 1000);
//   setTimeout(() => clearInterval(intervalId), 3000);
// };

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

  start(config) {
    const { totalHoles: { row, column } } = config;
    const intervalId = setInterval(() => {
      const holeId = randomInt(row * column);
      showMouse(holeId);
    }, 1000);
    setTimeout(() => clearInterval(intervalId), 3000);
  }
}

