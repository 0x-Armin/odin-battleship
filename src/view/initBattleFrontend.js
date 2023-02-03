import "./reset.css";
import "./style.css";
import { createTargetGrid, createOceanGrid } from "./grid";
import { addTargetGridEL } from "./feEventHandler";

import { getCurrPlayer } from "../controller/handle-next-turn";

const clearBody = () => {
  while (document.body.childElementCount > 0) {
    document.body.removeChild(document.body.lastChild);
  }
}

const createHeaderDiv = () => {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.innerText = 'Battleship';

  const instructionDiv = document.createElement('div');
  instructionDiv.classList.add('instruction');
  instructionDiv.innerText = `Player ${getCurrPlayer()}, your turn to attack.`;

  const nextTurnBtn = document.createElement('button');
  nextTurnBtn.textContent = 'Next turn';
  nextTurnBtn.id = 'next-turn-btn';
  nextTurnBtn.classList.add('not-ready');
  nextTurnBtn.disabled = 'disabled';

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(instructionDiv);
  headerDiv.appendChild(nextTurnBtn);

  document.body.appendChild(headerDiv);
}

const createDivStructure = () => {
  const mainScreenDiv = document.createElement("div");
  mainScreenDiv.id = "main-screen";

  const targetGridDiv = document.createElement("div");
  targetGridDiv.classList.add("grid");
  targetGridDiv.classList.add("target-grid");

  const oceanGridDiv = document.createElement("div");
  oceanGridDiv.classList.add("grid");
  oceanGridDiv.classList.add("ocean-grid");

  mainScreenDiv.appendChild(targetGridDiv);
  mainScreenDiv.appendChild(oceanGridDiv);

  document.body.appendChild(mainScreenDiv);
};



const initBattleFrontend = (targetGrid, oceanGrid) => {
  createHeaderDiv();
  createDivStructure();
  createTargetGrid(targetGrid);
  createOceanGrid(oceanGrid);
  addTargetGridEL();
};

export { clearBody, initBattleFrontend };
