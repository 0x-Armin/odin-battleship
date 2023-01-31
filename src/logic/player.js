import { shipFactory } from "./ship";
import { gameboardFactory } from "./gameboard";

const playerFactory = () => {
  const shipArr = [
    shipFactory(2),
    shipFactory(3),
    shipFactory(3),
    shipFactory(4),
    shipFactory(5),
  ];

  let gameboard = gameboardFactory();

  const getShipArr = () => {
    return shipArr;
  };

  const checkBoardForShipPlacement = (i, j, dx, dy) => {
    for (let x of dx) {
      for (let y of dy) {
        if (gameboard.accessBoard(i+x, j+y) !== "") return false;
      }
    }

    return true;
  };

  const placeShipOnBoard = (i, j, dx, dy, idx) => {
    for (let x of dx) {
      for (let y of dy) {
        gameboard.placeShip(idx, i+x, j+y);
      }
    }
  };

  // TODO: Allow users to fill up board themselves
  const populateBoard = (i, j, idx, orientation, length) => {
    const dx = [];
    const dy = [];
    if (orientation === "H") {
      dx.push(0);
      for (let y = 0; y < length; y++) dy.push(y);
    } else if (orientation === "V") {
      for (let x = 0; x < length; x++) dx.push(x);
      dy.push(0);
    }

    if (checkBoardForShipPlacement(i, j, dx, dy)) {
      placeShipOnBoard(i, j, dx, dy, idx);
      return true;
    }

    return false;
    // // ship 0 of size 2
    // gameboard.placeShip(0, 0, 0);
    // gameboard.placeShip(0, 0, 1);

    // // ship 1 of size 3
    // gameboard.placeShip(1, 1, 2);
    // gameboard.placeShip(1, 2, 2);
    // gameboard.placeShip(1, 3, 2);

    // // ship 2 of size 3
    // gameboard.placeShip(2, 3, 7);
    // gameboard.placeShip(2, 3, 8);
    // gameboard.placeShip(2, 3, 9);

    // // ship 3 of size 4
    // gameboard.placeShip(3, 7, 4);
    // gameboard.placeShip(3, 7, 5);
    // gameboard.placeShip(3, 7, 6);
    // gameboard.placeShip(3, 7, 9);

    // // ship 4 of size 5
    // gameboard.placeShip(4, 5, 9);
    // gameboard.placeShip(4, 6, 9);
    // gameboard.placeShip(4, 7, 9);
    // gameboard.placeShip(4, 8, 9);
    // gameboard.placeShip(4, 9, 9);
  };

  const getGameBoard = () => {
    return gameboard;
  };

  return {
    getShipArr,
    populateBoard,
    getGameBoard,
  };
};

export { playerFactory };
