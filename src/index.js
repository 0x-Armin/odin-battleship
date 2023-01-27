import { initFrontend } from "./dom/initFrontend";
import { game } from "./logic/game";

game.initGame();

let currPlayer = game.getCurrPlayer();
let opponent = 1 - currPlayer;

let oceanGrid = game.players[currPlayer].getGameBoard();
let targetGrid = game.players[opponent].getGameBoard();
initFrontend(oceanGrid, targetGrid);