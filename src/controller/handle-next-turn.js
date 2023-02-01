import { game } from "../logic/game";

const handleNextTurnInGame = () => {
  game.toggleCurrPlayer();
};

const handleNextTurnDuringPlacement = () => {
  game.toggleCurrPlayer();

  const currPlayer = game.getCurrPlayer();
  const opponent = game.getOpponent();

  let targetGrid = game.getPlayers()[opponent].getGameBoard();
  let oceanGrid = game.getPlayers()[currPlayer].getGameBoard();

  return [currPlayer, targetGrid, oceanGrid];
};

const getBoard = (player) => {
  return game.getPlayers()[player].getGameBoard();
};

const getCurrBoard = () => {
  return game.getPlayers()[game.getCurrPlayer()].getGameBoard();
};

const getCurrPlayer = () => {
  return game.getCurrPlayer();
}

export {
  handleNextTurnInGame,
  handleNextTurnDuringPlacement,
  getBoard,
  getCurrBoard,
  getCurrPlayer,
};
