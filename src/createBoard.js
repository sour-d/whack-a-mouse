const registerEventsInHoles = (hole) => {
  hole.addEventListener('mousedown', registerScoreOnClick);
  hole.addEventListener('mouseup', removeColorOnMouseUp);
};

const createHoleElement = () => {
  const hole = document.createElement('div');
  hole.classList.add('hole');
  return hole;
};

const createRow = (column) => {
  const row = document.createElement('div');

  for (let currentColumn = 0; currentColumn < column; currentColumn++) {
    const holeElement = createHoleElement();
    registerEventsInHoles(holeElement);
    row.appendChild(holeElement);
  }

  row.classList.add('row');
  return row;
};

const createBoardElement = ({ row, column }) => {
  const board = document.createElement('div');
  board.classList.add('board');
  for (let currentRow = 0; currentRow < row; currentRow++) {
    const rowElement = createRow(column);
    board.appendChild(rowElement);
  }
  return board;
};

const clearBoard = () => {
  const board = document.getElementsByClassName('board')[0];
  console.log(board);
  board.remove();
}