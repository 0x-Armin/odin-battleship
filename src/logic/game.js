import { playerFactory } from "./player";

const game = (() => {
  const player1 = playerFactory();
  const player2 = playerFactory();

  const initGame = () => {
    player1.populateBoard();
    player2.populateBoard();
  };

  return {
    initGame,
  };
})();

export { game };