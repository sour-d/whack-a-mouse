const createHoleElement = () => {
  const hole = document.createElement('div');
  hole.classList.add('hole');
  return hole;
};

const createRow = (column) => {
  const row = document.createElement('div');

  for (let currentColumn = 0; currentColumn < column; currentColumn++) {
    const holeElement = createHoleElement();
    row.appendChild(holeElement);
  }

  row.classList.add('row');
  return row;
};

const createBoardElement = ({ totalHoles: { row, column } }) => {
  const board = document.createElement('div');
  for (let currentRow = 0; currentRow < row; currentRow++) {
    const rowElement = createRow(column);
    board.appendChild(rowElement);
  }

  board.classList.add('board');
  return board;
};

const createBoard = (config) => {
  // console.log(config);
  const board = createBoardElement(config);
  const main = document.getElementsByTagName('main')[0];
  main.prepend(board);
};

const clearBoard = () => {
  const board = document.getElementsByClassName('board')[0];
  console.log(board);
  board.remove();
}