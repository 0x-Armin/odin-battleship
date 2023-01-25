import { shipFactory } from "./ship";

let ship = undefined;

beforeEach(() => {
  ship = shipFactory(1);
});

test("test getNumHit", () => {
  expect(ship.getNumHit()).toBe(0);
});

test("test hit", () => {
  ship.hit();
  expect(ship.getNumHit()).toBe(1);
});

test("test isSunk", () => {
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
