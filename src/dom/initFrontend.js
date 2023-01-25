import "./style.css";

const createDivStructure = () => {
  const mainScreenDiv = document.createElement("div");
  mainScreenDiv.id = "main-screen";

  const playerNameDiv = document.createElement("div");
  playerNameDiv.innerText = "Player";

  const targetGridDiv = document.createElement("div");
  targetGridDiv.classList.add("grid");
  targetGridDiv.classList.add("target-grid");
  targetGridDiv.innerText = "target grid";

  const oceanGridDiv = document.createElement("div");
  oceanGridDiv.classList.add("grid");
  oceanGridDiv.classList.add("ocean-grid");
  oceanGridDiv.innerText = "ocean grid";

  mainScreenDiv.appendChild(playerNameDiv);
  mainScreenDiv.appendChild(targetGridDiv);
  mainScreenDiv.appendChild(oceanGridDiv);

  document.body.appendChild(mainScreenDiv);
};

const clearGrid = (container) => {
  while (container.childElementCount > 0)
    container.removeChild(container.lastChild);
};

const createTargetGrid = (grid) => {
  const container = document.querySelector(".target-grid");
  clearGrid(container);

  for (let i=0; i < grid.length(); i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j=0; j < grid.length(); j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.innerText = grid.accessBoard(i, j);

      row.appendChild(square);
    }
    container.appendChild(row);
  }
};

const initFrontend = (targetGrid) => {
  createDivStructure();
  createTargetGrid(targetGrid);
};

export { initFrontend };
