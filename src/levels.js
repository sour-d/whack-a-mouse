const configs = [
  { totalHoles: { row: 2, column: 2 } },
  { totalHoles: { row: 3, column: 3 } }
];

const addEventsToLevelsButton = () => {
  const button = document.getElementById('next-level');
  button.addEventListener('click', initiateNextLevel);
};

const createBoard = (level) => {
  if (level > 0) {
    clearBoard();
  }
  const board = createBoardElement(configs[level].totalHoles);
  const main = document.getElementsByTagName('main')[0];
  main.prepend(board);
};

const createLevelManager = () => {
  let level = 0;
  return () => {
    createBoard(level);
    addEventsToStartButton(configs[level]);
    addEventsToLevelsButton(level);
    level++;
  }
};