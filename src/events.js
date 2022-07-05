const addEventsToLevelButton = () => {
  const button = document.getElementById('next-level');
  button.addEventListener('click', () => playARound);
}

const playARound = (config) => {
  createBoard();
  startGame();
}