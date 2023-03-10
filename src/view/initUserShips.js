import "./reset.css";
import "./style.css";
import { clearBody, initBattleFrontend } from "./initBattleFrontend";
import { createTemplateGrid } from "./grid";

import { gameRules } from "../logic/gameRules";

import { confirmShipPlacement } from "../controller/handle-place-ships";
import {
  getBoard,
  getCurrBoard,
  getCurrPlayer,
  handleNextTurnDuringPlacement,
} from "../controller/handle-next-turn";

const createDivSkeleton = () => {
  const setupGameDiv = document.createElement("div");
  setupGameDiv.id = "setup-game-div";

  const templateGridDiv = document.createElement("div");
  templateGridDiv.classList.add("grid");
  templateGridDiv.id = "template-grid-div";

  const userInputDiv = document.createElement("div");
  userInputDiv.id = "user-input-div";

  setupGameDiv.appendChild(templateGridDiv);
  setupGameDiv.appendChild(userInputDiv);

  return setupGameDiv;
};


const checkAllCfmBtnDisabled = () => {
  const allDisabledBtnCount = 5;
  const cfmBtnArr = document.querySelectorAll(".cfm-coord-btn");
  let disabledBtnCount = 0;
  cfmBtnArr.forEach((btn) => {
    if (btn.hasAttribute("disabled")) disabledBtnCount++;
  });

  return disabledBtnCount == allDisabledBtnCount;
};

const makeCfmBtnUnusable = (event) => {
  const btnName = event.srcElement[3].id;
  const cfmBtn = document.getElementById(btnName);
  cfmBtn.classList.add("not-ready");
  cfmBtn.disabled = "disabled";
};


const enableNextStepBtn = () => {
  const nextStepBtn = document.getElementById("next-step-btn");
  nextStepBtn.disabled = false;

  nextStepBtn.addEventListener("click", () => {
    clearBody();
    const [currPlayer, targetGrid, oceanGrid] = handleNextTurnDuringPlacement();
    if (currPlayer === 0) {
      initBattleFrontend(targetGrid, oceanGrid);
    } else {
      initUserShips(currPlayer);
    }
  });
};

const notifyUserOfErrInPlacingShip = (event) => {
  const rCoordId = event.srcElement[0].id;
  const rCoordSel = document.getElementById(rCoordId);

  rCoordSel.setCustomValidity(
    "Either out of bounds or a cell is already occupied. Pick another spot!"
  );
  rCoordSel.reportValidity();
};

const relistenToShipPlacement = (event) => {
  const formId = event.srcElement.id;
  let oldForm = document.getElementById(formId);
  let newForm = oldForm.cloneNode(true);
  newForm.shipName = oldForm.shipName;
  newForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleShipPlacementSubmission(event);
  });

  oldForm.parentNode.replaceChild(newForm, oldForm);
}

const handleShipPlacementSubmission = (event) => {
  const placedShip = confirmShipPlacement(event);
  if (placedShip) {
    const templateGridDiv = document.getElementById("template-grid-div");
    const playerBoard = getCurrBoard();
    createTemplateGrid(templateGridDiv, playerBoard);
    makeCfmBtnUnusable(event);

    const placedAllShips = checkAllCfmBtnDisabled();
    if (placedAllShips) enableNextStepBtn();
  } else {
    notifyUserOfErrInPlacingShip(event);
    relistenToShipPlacement(event);
  }
};

const createUserInputHeader = () => {
  const indexHeader = document.createElement('div');
  indexHeader.innerText = 'Index';
  indexHeader.classList.add('form-header');

  const nameHeader = document.createElement("div");
  nameHeader.innerText = "Name";
  nameHeader.classList.add("form-header");

  const lengthHeader = document.createElement("div");
  lengthHeader.innerText = "Length";
  lengthHeader.classList.add("form-header");

  const startCoordHeader = document.createElement("div");
  startCoordHeader.innerText = "Starting coordinates";
  startCoordHeader.classList.add("form-header");

  const orientationHeader = document.createElement("div");
  orientationHeader.innerText = "Orientation";
  orientationHeader.classList.add("form-header");

  const confirmHeader = document.createElement("div");
  confirmHeader.innerText = "Confirm placement";
  confirmHeader.classList.add("form-header");

  return [
    indexHeader,
    nameHeader,
    lengthHeader,
    startCoordHeader,
    orientationHeader,
    confirmHeader,
  ];
};

const createOptionsForCoord = (selectDiv, axis) => {
  for (let i = 0; i < 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = `${axis}${i}`;

    selectDiv.appendChild(option);
  }
};

const createUserInputRow = (shipIdx, shipName, shipLength) => {
  const rowIndex = document.createElement('div');
  rowIndex.innerText = shipIdx;

  // Name of ship for that row
  const rowName = document.createElement("div");
  rowName.innerText = shipName;

  // Length of ship for that row
  const rowLength = document.createElement("div");
  rowLength.innerText = shipLength;

  // Input form for ship's coordinates
  const formDiv = document.createElement("form");
  formDiv.classList.add("form-div");
  formDiv.shipName = shipName;
  formDiv.id = `${shipName}-form`;
  formDiv.addEventListener("submit", (event) => {
    event.preventDefault();
    handleShipPlacementSubmission(event);
  });

  const inputFormUl = document.createElement("ul");
  inputFormUl.classList.add("input-form-ul");

  const coordRowLi = document.createElement("li");
  coordRowLi.classList.add("input-li");

  const coordRowLiLabel = document.createElement("label");
  coordRowLiLabel.for = `${shipName}-r-coord`;

  const coordRowLiSelect = document.createElement("select");
  coordRowLiSelect.id = `${shipName}-r-coord`;
  createOptionsForCoord(coordRowLiSelect, "r");

  coordRowLi.appendChild(coordRowLiLabel);
  coordRowLi.appendChild(coordRowLiSelect);

  const coordColLi = document.createElement("li");
  coordColLi.classList.add("input-li");

  const coordColLiLabel = document.createElement("label");
  coordColLiLabel.for = `c-coord`;

  const coordColLiSelect = document.createElement("select");
  coordColLiSelect.id = `c-coord`;
  createOptionsForCoord(coordColLiSelect, "c");

  coordColLi.appendChild(coordColLiLabel);
  coordColLi.appendChild(coordColLiSelect);

  const orientationLi = document.createElement("li");
  orientationLi.classList.add("input-li");

  const orientationLiLabel = document.createElement("label");
  orientationLiLabel.for = `orientation`;

  const orientationLiSelect = document.createElement("select");
  orientationLiSelect.classList.add('orientation');

  const horOrientationOption = document.createElement("option");
  horOrientationOption.value = "H";
  horOrientationOption.innerText = "Horizontal";

  const verOrientationOption = document.createElement("option");
  verOrientationOption.value = "V";
  verOrientationOption.innerText = "Vertical";

  orientationLiSelect.appendChild(horOrientationOption);
  orientationLiSelect.appendChild(verOrientationOption);

  orientationLi.appendChild(orientationLiLabel);
  orientationLi.appendChild(orientationLiSelect);

  const confirmBtnLi = document.createElement("li");
  confirmBtnLi.id = `confirm`;
  confirmBtnLi.classList.add("input-li");

  const confirmBtn = document.createElement("button");
  confirmBtn.type = "submit";
  confirmBtn.innerText = "Confirm";
  confirmBtn.classList.add("cfm-coord-btn");
  confirmBtn.id = `${shipName}-cfm-btn`;

  confirmBtnLi.appendChild(confirmBtn);

  inputFormUl.appendChild(coordRowLi);
  inputFormUl.appendChild(coordColLi);
  inputFormUl.appendChild(orientationLi);
  inputFormUl.appendChild(confirmBtn);

  formDiv.appendChild(inputFormUl);

  return [rowIndex, rowName, rowLength, formDiv];
};

const createUserInputForm = (shipsName, shipsLength) => {
  const userInputDiv = document.getElementById("user-input-div");
  const userInputForm = document.createElement('div');
  userInputForm.id = 'user-input-form';

  const [
    indexHeader,
    nameHeader,
    lengthHeader,
    startCoordHeader,
    orientationHeader,
    confirmHeader,
  ] = createUserInputHeader();
  userInputForm.appendChild(indexHeader);
  userInputForm.appendChild(nameHeader);
  userInputForm.appendChild(lengthHeader);
  userInputForm.appendChild(startCoordHeader);
  userInputForm.appendChild(orientationHeader);
  userInputForm.appendChild(confirmHeader);

  for (let i = 0; i < shipsName.length; i++) {
    const [rowIndex, rowName, rowLength, formDiv] = createUserInputRow(
      i,
      shipsName[i],
      shipsLength[i]
    );
    userInputForm.appendChild(rowIndex);
    userInputForm.appendChild(rowName);
    userInputForm.appendChild(rowLength);
    userInputForm.appendChild(formDiv);
  }

  userInputDiv.appendChild(userInputForm);

  const belowFormRow = document.createElement('div');
  belowFormRow.classList.add('below-form');

  const nextStepBtn = document.createElement("button");
  nextStepBtn.innerText = "Next step";
  nextStepBtn.id = "next-step-btn";
  nextStepBtn.disabled = true;

  belowFormRow.appendChild(nextStepBtn);
  userInputDiv.appendChild(belowFormRow);
};

const createHeaderDiv = (div) => {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.innerText = 'Battleship';

  const instructionDiv = document.createElement('div');
  instructionDiv.classList.add('instruction');
  instructionDiv.innerText = `Player ${getCurrPlayer()}, please place your ships.`;

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(instructionDiv);

  return headerDiv;
}

const initUserShips = (player) => {
  const headerDiv = createHeaderDiv();
  document.body.appendChild(headerDiv);

  const gameSetupDiv = createDivSkeleton();
  document.body.appendChild(gameSetupDiv);

  const templateGridDiv = document.getElementById("template-grid-div");
  const playerBoard = getBoard(player);
  createTemplateGrid(templateGridDiv, playerBoard);

  const shipsName = gameRules.getShipsName();
  const shipsLength = gameRules.getShipsLength();
  createUserInputForm(shipsName, shipsLength);
};

export { initUserShips };
