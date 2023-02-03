import { game } from "../logic/game";

import { addTargetGridEL } from "./feEventHandler";
import { clearGrid, createTargetGrid, createOceanGrid } from "./grid";

import { handleNextTurnInGame, getCurrPlayer } from "../controller/handle-next-turn";

const displayDoubleAttackErrMsg = (outcome) => {
  const instructionDiv = document.querySelector(".instruction");

  if (outcome === "AM") {
    instructionDiv.innerText =
      `Player ${getCurrPlayer()}. You've already missed at this spot! Fire at another spot.`;
  } else if (outcome === "AH") {
    instructionDiv.innerText =
      `Player ${getCurrPlayer()}. You've already hit a ship at this spot! Fire at another spot.`;
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
  const instructionDiv = document.querySelector(".instruction");

  instructionDiv.innerText = `Congratulations Player ${getCurrPlayer()}! You've won the game! 🔫`;
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
  const instructionDiv = document.querySelector(".instruction");
  let timeLeft = 3;

  let countdownInterval = setInterval(function () {
    instructionDiv.innerText = `Loading next player's screen in ${timeLeft} seconds...`;
    timeLeft--;

    if (timeLeft === -1) {
      instructionDiv.innerText = "";
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const updateInstructionDiv = (currPlayer) => {
  const instructionDiv = document.querySelector('.instruction');
  instructionDiv.innerText = `Player ${currPlayer}, it's your turn to attack.`;
  console.log('updating instruction div', instructionDiv);
}

const createScreenForNextPlayer = () => {
  const currPlayer = game.getCurrPlayer();
  const opponent = game.getOpponent();

  updateInstructionDiv(currPlayer);

  createTargetGrid(game.getPlayers()[opponent].getGameBoard());
  createOceanGrid(game.getPlayers()[currPlayer].getGameBoard());
};

const updateDOMAfterNextTurn = () => {
  // clear grids for current player + indicate 'loading'
  clearDisplayedGrids();
  // set a timeout for 3 secs
  indicateLoading();
  // display grids for next player
  setTimeout(createScreenForNextPlayer, 4500);
};

export { updateDOMAfterAttack };
