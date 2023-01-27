import { playerFactory } from "./player";

const game = (() => {
  const players = [playerFactory(), playerFactory()];

  let currPlayer = 0;

  const getCurrPlayer = () => { return currPlayer; }

  const toggleCurrPlayer = () => { currPlayer = 1 - currPlayer; }

  const initGame = () => {
    players[0].populateBoard();
    players[1].populateBoard();
  };

  return {
    players,
    getCurrPlayer,
    toggleCurrPlayer,
    initGame,
  };
})();

export { game };