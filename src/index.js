const config = [
  { totalHoles: { row: 3, column: 3 } }
];

const main = () => {
  const { totalHoles } = config[0];
  createBoard(totalHoles);
  addEventsToStartButton();
};

window.onload = main;