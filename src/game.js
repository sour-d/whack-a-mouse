const randomInt = () => {
  const number = Math.round(Math.random() * 10);
  if (number > 8) {
    return randomInt();
  }
  return number;
};

const showMouse = () => {
  const holeId = randomInt();
  const holes = document.getElementsByClassName('hole');
  const hole = holes[holeId];
  hole.classList.add('background');
  setTimeout(() => hideMouse(hole), 700);
};

const hideMouse = (hole) => {
  hole.classList.remove('background');
};

const updateScore = (score) => {
  const resultElement = document.getElementsByClassName('score')[0];
  const currentScore = parseInt(resultElement.innerText);
  resultElement.innerText = score + currentScore;
};

const registerScore = (event) => {
  const classList = event.target.classList;
  if (classList.contains('background')) {
    classList.add('bg-green');
    updateScore(10);
    return;
  }
  classList.add('bg-red');
  updateScore(-5);
};

const removeColor = (event) => {
  event.target.classList.remove('bg-green');
  event.target.classList.remove('bg-red');
};

const registerEvents = () => {
  const holes = document.getElementsByClassName('hole');
  for (const hole of holes) {
    hole.addEventListener('mousedown', registerScore);
    hole.addEventListener('mouseup', removeColor);
  }
};

const startGame = () => {
  registerEvents();
  const intervalId = setInterval(showMouse, 1000);
  setTimeout(() => clearInterval(intervalId), 30000);
};
