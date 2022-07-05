const configs = [
  { totalHoles: { row: 2, column: 2 } },
  { totalHoles: { row: 3, column: 3 } }
];

// const addEventsToLevelsButton = () => {
//   const button = document.getElementById('next-level');
//   button.addEventListener('click', initiateNextLevel);
// };

const createLevelManager = () => {
  let level = 0;
  return () => {
    const currentConfig = configs[level];
    if (level > 0) clearBoard();
    createBoard(currentConfig);
    addEventsToStartButton(currentConfig);
    level++;
  }
};