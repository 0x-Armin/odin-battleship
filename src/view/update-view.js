import { game } from "../logic/game";

import { addTargetGridEL } from "./feEventHandler";
import { createTargetGrid } from "./grid";

const displayDoubleAttackErrMsg = (outcome) => {
  const msgDiv = document.getElementById('message-div');

  if (outcome === 'AM') {
    msgDiv.innerText = "You've already missed at this spot! Fire at another spot.";
  } else if (outcome === 'AH') {
    msgDiv.innerText = "You've already hit a ship at this spot! Fire at another spot.";
  }
}

const makeNextTurnBtnClickable = () => {
  const nextTurnBtn = document.getElementById('next-turn-btn');
  nextTurnBtn.classList.remove('not-ready');
  nextTurnBtn.removeAttribute('disabled');
}

const updateDOMAfterAttack = (outcome) => {
  if (outcome === 'M' || typeof outcome === 'number') {
    const opponent = 1 - game.getCurrPlayer();
    const targetGrid = game.getPlayers()[opponent].getGameBoard();
    createTargetGrid(targetGrid);

    // allow user to pass the turn to the next player
    console.log('passing turn');
    makeNextTurnBtnClickable();
  } else {
    displayDoubleAttackErrMsg(outcome);
    addTargetGridEL();
  }

  console.log(outcome);

}

export { updateDOMAfterAttack };