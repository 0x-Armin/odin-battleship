import { game } from "../logic/game";

import { addTargetGridEL } from "./feEventHandler";
import { clearGrid, createTargetGrid, createOceanGrid } from "./grid";

import { handleNextTurnInGame } from "../controller/handle-next-turn";

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
  const newNextTurnBtn = nextTurnBtn.cloneNode(true);

  newNextTurnBtn.classList.remove("not-ready");
  newNextTurnBtn.removeAttribute("disabled");
  newNextTurnBtn.addEventListener("click", () => {
    handleNextTurnInGame();
    makeNextTurnBtnUnclickable();
    updateDOMAfterNextTurn();
    setTimeout(addTargetGridEL, 5000);
  });

  nextTurnBtn.parentNode.replaceChild(newNextTurnBtn, nextTurnBtn);
};

const makeNextTurnBtnUnclickable = () => {
  const nextTurnBtn = document.getElementById("next-turn-btn");
  nextTurnBtn.classList.add('not-ready');
  nextTurnBtn.disabled = 'disabled';
}

const displayWinMessage = () => {
  const currPlayer = game.getCurrPlayer();
  const msgDiv = document.getElementById("message-div");

  msgDiv.innerText = `Congratulations Player ${currPlayer}! You've won the game! 🔫`;
}

const updateDOMAfterAttack = (outcome) => {
  if (outcome === "M" || typeof outcome === "number") {
    const opponent = game.getOpponent();
    const targetGrid = game.getPlayers()[opponent].getGameBoard();
    createTargetGrid(targetGrid);
    if (game.isGameOver()) {
      displayWinMessage();
    } else {
      makeNextTurnBtnClickable();
    }
  } else {
    displayDoubleAttackErrMsg(outcome);
    addTargetGridEL();
  }
};

const clearDisplayedGrids = () => {
  const targetGridDiv = document.querySelector(".target-grid");
  const oceanGridDiv = document.querySelector(".ocean-grid");

  clearGrid(targetGridDiv);
  clearGrid(oceanGridDiv);
};

const indicateLoading = () => {
  const msgDiv = document.querySelector("#message-div");
  let timeLeft = 3;

  let countdownInterval = setInterval(function () {
    msgDiv.innerText = `Loading next player's screen in ${timeLeft} seconds...`;
    timeLeft--;

    if (timeLeft === -1) {
      msgDiv.innerText = "";
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const updatePlayerDiv = (currPlayer) => {
  const playerNameDiv = document.getElementById('player-div');
  playerNameDiv.innerText = `Player ${currPlayer}`;
}

const createScreenForNextPlayer = () => {
  const currPlayer = game.getCurrPlayer();
  const opponent = game.getOpponent();

  updatePlayerDiv(currPlayer);

  createTargetGrid(game.getPlayers()[opponent].getGameBoard());
  createOceanGrid(game.getPlayers()[currPlayer].getGameBoard());
};

const updateDOMAfterNextTurn = () => {
  // clear grids for current player + indicate 'loading'
  clearDisplayedGrids();
  // set a timeout for 3 secs
  indicateLoading();
  // display grids for next player
  setTimeout(createScreenForNextPlayer, 4000);
};

export { updateDOMAfterAttack };
