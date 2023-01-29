import { playerFactory } from "./player";

const game = (() => {
  let isGameOver = false;
  const players = [playerFactory(), playerFactory()];
  let currPlayer = 0;

  const getIsGameOver = () => { return isGameOver; }
  const getPlayers = () => { return players; }
  const getCurrPlayer = () => { return currPlayer; }

  const toggleCurrPlayer = () => { currPlayer = 1 - currPlayer; }

  const initGame = () => {
    players[0].populateBoard();
    players[1].populateBoard();
  };

  return {
    getIsGameOver,
    getPlayers,
    getCurrPlayer,
    toggleCurrPlayer,
    initGame,
  };
})();

export { game };