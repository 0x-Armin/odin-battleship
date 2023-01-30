import "./style.css";

import { createTemplateGrid } from "./grid";

const setupTemplateGrid = () => {
  const templateGridDiv = document.getElementById('template-grid-div');
  createTemplateGrid(templateGridDiv);
}

const createDivSkeleton = () => {
  const setupGameDiv = document.createElement('div');
  setupGameDiv.id = 'setup-game-div';

  const templateGridDiv = document.createElement('div');
  templateGridDiv.classList.add('grid');
  templateGridDiv.id = 'template-grid-div';

  const userInputDiv = document.createElement('div');
  userInputDiv.id = 'user-input-div';

  setupGameDiv.appendChild(templateGridDiv);
  setupGameDiv.appendChild(userInputDiv);

  document.body.appendChild(setupGameDiv);
}

const initUserShips = () => {
  createDivSkeleton();
  // Fill in template grid
  setupTemplateGrid();
  // Setup table for user's input
}

export { initUserShips };