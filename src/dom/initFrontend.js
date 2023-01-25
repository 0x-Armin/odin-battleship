import './style.css';

const initFrontend = () => {
  const mainScreenDiv = document.createElement('div');
  mainScreenDiv.id = 'main-screen';

  const playerNameDiv = document.createElement('div');
  playerNameDiv.innerText = 'Player';

  const targetGridDiv = document.createElement('div');
  targetGridDiv.classList.add('grid');
  targetGridDiv.classList.add('target-grid');
  targetGridDiv.innerText = 'target grid';

  const oceanGridDiv = document.createElement('div');
  oceanGridDiv.classList.add('grid');
  oceanGridDiv.classList.add('ocean-grid');
  oceanGridDiv.innerText = 'ocean grid';

  mainScreenDiv.appendChild(playerNameDiv);
  mainScreenDiv.appendChild(targetGridDiv);
  mainScreenDiv.appendChild(oceanGridDiv);

  document.body.appendChild(mainScreenDiv);
  // NEXT: Write CSS to show the 2d grid
};

export { initFrontend };