const gameRules = (() => {
  const shipsName = [
    'Destroyer',
    'Submarine',
    'Cruiser',
    'Battleship',
    'Carrier',
  ]

  const shipsLength = [2, 3, 3, 4, 5];

  const shipNameToLength = new Map([
    ['Destroyer', 2],
    ['Submarine', 3],
    ['Cruiser', 3],
    ['Battleship', 4],
    ['Carrier', 5],
  ]);

  const shipNameToIdx = new Map([
    ['Destroyer', 0],
    ['Submarine', 1],
    ['Cruiser', 2],
    ['Battleship', 3],
    ['Carrier', 4],
  ]);

  const getShipsName = function() {
    return shipsName;
  }

  const getShipsLength = function() {
    return shipsLength;
  }

  const getShipNameToLength = () => {
    return shipNameToLength;
  }

  const getShipNameToIdx = () => {
    return shipNameToIdx;
  }

  return {
    getShipsName,
    getShipsLength,
    getShipNameToLength,
    getShipNameToIdx,
  }
})();

export { gameRules };