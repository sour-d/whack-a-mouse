const randomInt = () => {
  const number = Math.round(Math.random() * 10);
  if (number === 0 || number > 9) {
    return randomInt();
  }
  return number;
};

const showMouse = () => {
  const holeId = randomInt();
  const hole = document.getElementById(holeId);
  hole.classList.add('background');
  setTimeout(() => hideMouse(holeId), 700);
};

const hideMouse = (holeId) => {
  const hole = document.getElementById(holeId);
  hole.classList.remove('background');
};

const updateScore = (score) => {
  const resultElement = document.getElementsByClassName('score')[0];
  const currentScore = parseInt(resultElement.innerText);
  resultElement.innerText = score + currentScore;
};

const registerScore = (event) => {
  if (event.target.classList.contains('background')) {
    event.target.classList.add('bg-green');
    // event.target.classList.remove('bg-green');
    updateScore(10);
    return;
  }
  event.target.classList.add('bg-red');
  // event.target.classList.remove('bg-red');
  updateScore(-5);
};

const removeColor = (event) => {
  event.target.classList.remove('bg-green');
  event.target.classList.remove('bg-red');
}

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

window.onload = startGame;
