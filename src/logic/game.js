import { playerFactory } from "./player";

const game = (() => {
  const players = [playerFactory(), playerFactory()];

  const initGame = () => {
    players[0].populateBoard();
    players[1].populateBoard();
  };

  return {
    players,
    initGame,
  };
})();

export { game };