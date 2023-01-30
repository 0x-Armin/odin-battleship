import "./style.css";
import { createTemplateGrid } from "./grid";

import { gameRules } from "../logic/gameRules";

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

const createUserInputHeader = () => {
  const nameHeader = document.createElement("div");
  nameHeader.innerText = 'Name';
  nameHeader.classList.add("form-header");

  const lengthHeader = document.createElement("div");
  lengthHeader.innerText = 'Length';
  lengthHeader.classList.add("form-header");

  const startCoordHeader = document.createElement("div");
  startCoordHeader.innerText = 'Starting coordinates';
  startCoordHeader.classList.add("form-header");

  const orientationHeader = document.createElement("div");
  orientationHeader.innerText = 'Orientation';
  orientationHeader.classList.add("form-header");

  const confirmHeader = document.createElement('div');
  confirmHeader.innerText = 'Confirm placement';
  confirmHeader.classList.add('form-header');

  return [nameHeader, lengthHeader, startCoordHeader, orientationHeader, confirmHeader];
};

const createOptionsForCoord = (selectDiv, axis) => {
  for (let i = 0; i < 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `${axis}${i}`;

    selectDiv.appendChild(option);
  }
}

const createUserInputRow = (shipName, shipLength) => {
  // Name of ship for that row
  const rowName = document.createElement('div');
  rowName.innerText = shipName;

  // Length of ship for that row
  const rowLength = document.createElement('div');
  rowLength.innerText = shipLength;

  // Input form for ship's coordinates
  const formDiv = document.createElement('form');
  formDiv.classList.add('form-div');

  const inputFormUl = document.createElement('ul');
  inputFormUl.classList.add('input-form-ul');

  const coordRowLi = document.createElement('li');
  coordRowLi.classList.add('input-li');

  const coordRowLiLabel = document.createElement('label');
  coordRowLiLabel.for = `${shipName}-r-coord`;

  const coordRowLiSelect = document.createElement('select');
  coordRowLiSelect.id = `${shipName}-r-coord`;
  createOptionsForCoord(coordRowLiSelect, 'r');

  coordRowLi.appendChild(coordRowLiLabel);
  coordRowLi.appendChild(coordRowLiSelect);

  const coordColLi = document.createElement('li');
  coordColLi.classList.add('input-li');

  const coordColLiLabel = document.createElement('label');
  coordColLiLabel.for = `${shipName}-c-coord`;

  const coordColLiSelect = document.createElement('select');
  coordColLiSelect.id = `${shipName}-c-coord`; 
  createOptionsForCoord(coordColLiSelect, 'c');

  coordColLi.appendChild(coordColLiLabel);
  coordColLi.appendChild(coordColLiSelect);

  const orientationLi = document.createElement('li');
  orientationLi.classList.add('input-li');

  const orientationLiLabel = document.createElement('label');
  orientationLiLabel.for = `${shipName}-orientation`;

  const orientationLiSelect = document.createElement('select');
  orientationLiSelect.id = `${shipName}-orientation`;

  const horOrientationOption = document.createElement('option');
  horOrientationOption.value = 'H';
  horOrientationOption.innerText = 'Horizontal';

  const verOrientationOption = document.createElement('option');
  verOrientationOption.value = 'V';
  verOrientationOption.innerText = 'Vertical';

  orientationLiSelect.appendChild(horOrientationOption);
  orientationLiSelect.appendChild(verOrientationOption);

  orientationLi.appendChild(orientationLiLabel);
  orientationLi.appendChild(orientationLiSelect)

  const confirmBtnLi = document.createElement('li');
  confirmBtnLi.id = `${shipName}-confirm`;
  confirmBtnLi.classList.add('input-li');

  const confirmBtn = document.createElement('button');
  confirmBtn.type = 'submit';
  confirmBtn.innerText = 'Confirm';

  confirmBtnLi.appendChild(confirmBtn);

  inputFormUl.appendChild(coordRowLi);
  inputFormUl.appendChild(coordColLi);
  inputFormUl.appendChild(orientationLi);
  inputFormUl.appendChild(confirmBtn);

  formDiv.appendChild(inputFormUl);

  return [rowName, rowLength, formDiv];
}

const createUserInputForm = (shipsName, shipsLength) => {
  const userInputDiv = document.getElementById('user-input-div');

  const [nameHeader, lengthHeader, startCoordHeader, orientationHeader, confirmHeader] = createUserInputHeader();
  userInputDiv.appendChild(nameHeader);
  userInputDiv.appendChild(lengthHeader);
  userInputDiv.appendChild(startCoordHeader);
  userInputDiv.appendChild(orientationHeader);
  userInputDiv.appendChild(confirmHeader);

  for (let i = 0; i < shipsName.length; i++) {
    const [rowName, rowLength, formDiv] = createUserInputRow(shipsName[i], shipsLength[i]);
    userInputDiv.appendChild(rowName);
    userInputDiv.appendChild(rowLength);
    userInputDiv.appendChild(formDiv);
  }
};

const initUserShips = () => {
  const gameSetupDiv = createDivSkeleton();
  document.body.appendChild(gameSetupDiv);

  const templateGridDiv = document.getElementById("template-grid-div");
  createTemplateGrid(templateGridDiv);

  const shipsName = gameRules.getShipsName();
  const shipsLength = gameRules.getShipsLength();
  createUserInputForm(shipsName, shipsLength);
};

export { initUserShips };
