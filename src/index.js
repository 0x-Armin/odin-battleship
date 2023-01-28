import { initFrontend } from "./view/initFrontend";

import { game } from "./logic/game";
import { addTargetGridEL } from "./view/feEventHandler";


game.initGame();

let currPlayer = game.getCurrPlayer();
let opponent = 1 - currPlayer;

let oceanGrid = game.getPlayers()[currPlayer].getGameBoard();
let targetGrid = game.getPlayers()[opponent].getGameBoard();

initFrontend(oceanGrid, targetGrid);
addTargetGridEL();

/*
GAME LOOP
1. currPlayer picks a spot to hit on targetGrid
2. targetGrid refreshes to give result of attack
3. Check if either player has won
4. If yes, end game. If not, switch player's turn.
*/
// while (!game.getIsGameOver()) {
//   // addTargetGridEL();
// }