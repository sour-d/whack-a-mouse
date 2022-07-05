const createHoleElement = () => {
  const hole = document.createElement('div');
  hole.classList.add('hole');
  return hole;
};

const createBoardElement = () => {
  const board = document.createElement('div');
  board.classList.add('board');
  return board;
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

const createBoard = (row, column) => {
  const boardElement = createBoardElement();
  for (let currentRow = 0; currentRow < row; currentRow++) {
    const rowElement = createRow(column);
    boardElement.appendChild(rowElement);
  }
  const main = document.getElementsByTagName('main')[0];
  main.prepend(boardElement);
};