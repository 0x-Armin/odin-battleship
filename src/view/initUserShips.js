import "./style.css";
import { createTemplateGrid } from "./grid";

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

  document.body.appendChild(setupGameDiv);
};

const setupTemplateGrid = () => {
  const templateGridDiv = document.getElementById("template-grid-div");
  createTemplateGrid(templateGridDiv);
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

const createUserInputRow = (shipName, shipLength) => {
  const rowName = document.createElement('div');
  rowName.innerText = shipName;

  const rowLength = document.createElement('div');
  rowLength.innerText = shipLength;

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
  for (let i = 0; i < 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `r${i}`;

    coordRowLiSelect.appendChild(option);
  }

  coordRowLi.appendChild(coordRowLiLabel);
  coordRowLi.appendChild(coordRowLiSelect);

  const coordColLi = document.createElement('li');
  coordColLi.classList.add('input-li');

  const coordColLiLabel = document.createElement('label');
  coordColLiLabel.for = `${shipName}-c-coord`;

  const coordColLiSelect = document.createElement('select');
  coordColLiSelect.id = `${shipName}-c-coord`; 
  for (let i = 0; i < 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `c${i}`;

    coordColLiSelect.appendChild(option);
  }

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
  const inputTable = document.createElement("div");
  inputTable.id = "input-table";

  const [nameHeader, lengthHeader, startCoordHeader, orientationHeader, confirmHeader] = createUserInputHeader();
  inputTable.appendChild(nameHeader);
  inputTable.appendChild(lengthHeader);
  inputTable.appendChild(startCoordHeader);
  inputTable.appendChild(orientationHeader);
  inputTable.appendChild(confirmHeader);

  for (let i = 0; i < shipsName.length; i++) {
    const [rowName, rowLength, formDiv] = createUserInputRow(shipsName[i], shipsLength[i]);
    inputTable.appendChild(rowName);
    inputTable.appendChild(rowLength);
    inputTable.appendChild(formDiv);
  }

  return inputTable;
};

const askforUserInputs = () => {
  const shipsName = [
    "Destroyer",
    "Submarine",
    "Cruiser",
    "Battleship",
    "Carrier",
  ];
  const shipsLength = [2, 3, 3, 4, 5];

  const inputTable = createUserInputForm(shipsName, shipsLength);
  document.getElementById('user-input-div').appendChild(inputTable);
};

const initUserShips = () => {
  createDivSkeleton();
  // Fill in template grid
  setupTemplateGrid();
  // Setup table for user's input
  askforUserInputs();
};

export { initUserShips };
