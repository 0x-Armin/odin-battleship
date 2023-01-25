import { gameboardFactory } from "./gameboard";

let gameboard = undefined;
beforeEach(() => {
  gameboard = gameboardFactory();
});

test('check place ship', () => {
  gameboard.placeShip(0, 2, 3);
  expect(gameboard.accessBoard(2, 3)).toBe(0);
});

test('check receiveAttack', () => {
  expect(gameboard.receiveAttack(0, 0)).toBe('M');

  gameboard.placeShip(2, 4, 5);
  expect(gameboard.receiveAttack(4, 5)).toBe(2);
  expect(gameboard.receiveAttack(4, 5)).toBe('AH');
});

test('are all ships sunk', () => {
  expect(gameboard.areAllShipsSunk()).toBeTruthy();
});