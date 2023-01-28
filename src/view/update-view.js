import { game } from "../logic/game";

import { addTargetGridEL } from "./feEventHandler";
import { clearGrid, createTargetGrid, createOceanGrid } from "./grid";

import { handleNextTurn } from "../controller/handle-next-turn";

const displayDoubleAttackErrMsg = (outcome) => {
  const msgDiv = document.getElementById("message-div");

  if (outcome === "AM") {
    msgDiv.innerText =
      "You've already missed at this spot! Fire at another spot.";
  } else if (outcome === "AH") {
    msgDiv.innerText =
      "You've already hit a ship at this spot! Fire at another spot.";
  }
};

const makeNextTurnBtnClickable = () => {
  const nextTurnBtn = document.getElementById("next-turn-btn");
  nextTurnBtn.classList.remove("not-ready");
  nextTurnBtn.removeAttribute("disabled");
  nextTurnBtn.addEventListener("click", () => {
    handleNextTurn();
    makeNextTurnBtnUnclickable();
    updateDOMAfterNextTurn();
    setTimeout(addTargetGridEL, 5000);
  });
};

const makeNextTurnBtnUnclickable = () => {
  const nextTurnBtn = document.getElementById("next-turn-btn");
  nextTurnBtn.classList.add('not-ready');
  nextTurnBtn.disabled = 'disabled';
}

const updateDOMAfterAttack = (outcome) => {
  if (outcome === "M" || typeof outcome === "number") {
    const opponent = 1 - game.getCurrPlayer();
    const targetGrid = game.getPlayers()[opponent].getGameBoard();
    createTargetGrid(targetGrid);

    // allow user to pass the turn to the next player
    makeNextTurnBtnClickable();
  } else {
    displayDoubleAttackErrMsg(outcome);
    addTargetGridEL();
  }

  console.log(outcome);
};

const clearDisplayedGrids = () => {
  const targetGridDiv = document.querySelector(".target-grid");
  const oceanGridDiv = document.querySelector(".ocean-grid");

  clearGrid(targetGridDiv);
  clearGrid(oceanGridDiv);

  console.log("cleared grids");
};

const indicateLoading = () => {
  const msgDiv = document.querySelector("#message-div");
  let timeLeft = 3;

  let countdownInterval = setInterval(function () {
    msgDiv.innerText = `Loading next player's screen in ${timeLeft} seconds...`;
    timeLeft--;

    console.log("counting down", timeLeft);
    if (timeLeft === -1) {
      msgDiv.innerText = "";
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const createGridsForNextPlayer = () => {
  console.log("creating grids");
  const currPlayer = game.getCurrPlayer();
  const opponent = 1 - currPlayer;

  createTargetGrid(game.getPlayers()[opponent].getGameBoard());
  createOceanGrid(game.getPlayers()[currPlayer].getGameBoard());
};

const updateDOMAfterNextTurn = () => {
  // clear grids for current player + indicate 'loading'
  clearDisplayedGrids();
  // set a timeout for 3 secs
  indicateLoading();
  // display grids for next player
  setTimeout(createGridsForNextPlayer, 4000);
};

export { updateDOMAfterAttack };
