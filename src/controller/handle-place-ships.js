import { game } from "../logic/game";
import { gameRules } from "../logic/gameRules";

const confirmShipPlacement = (event) => {
  const i = parseInt(event.srcElement[0].value);
  const j = parseInt(event.srcElement[1].value);
  const orientation = event.srcElement[2].value;

  const shipName = event.srcElement.id;
  const shipLength = gameRules.getShipNameToLength().get(shipName);
  const shipIdx = gameRules.getShipNameToIdx().get(shipName);

  const currPlayer = game.getCurrPlayer();
  return game.getPlayers()[currPlayer].populateBoard(i, j, shipIdx, orientation, shipLength);
}

export { confirmShipPlacement };