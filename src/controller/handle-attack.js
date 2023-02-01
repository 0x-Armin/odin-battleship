import { game } from "../logic/game";

import { updateDOMAfterAttack } from "../view/update-view";

const getRowAndCol = (cellIdx) => {
  const row = Math.floor(cellIdx / 10);
  const col = cellIdx % 10;

  return [row, col];
}

const checkChosenCell = (row, col) => {
  const opponent = game.getOpponent();
  const outcome = game.getPlayers()[opponent].getGameBoard().receiveAttack(row, col);

  return outcome;
}

const passHitToShip = (outcome) => {
  game.getPlayers()[game.getOpponent()].getShipArr()[outcome].hit();
}

const handleAttackCell = (event) => {
  const cellIdx = event.srcElement.index;
  const [row, col] = getRowAndCol(cellIdx);
  const outcome = checkChosenCell(row, col);

  if (typeof outcome === 'number') passHitToShip(outcome);
  updateDOMAfterAttack(outcome);
}

export { handleAttackCell };