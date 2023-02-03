import { initUserShips } from "./view/initUserShips";
import { clearBody, initBattleFrontend } from "./view/initBattleFrontend";

import { game } from "./logic/game";
import { addTargetGridEL } from "./view/feEventHandler";


game.initGame();

// ask user for input here
clearBody();
let currPlayer = 0; // 0 by default
initUserShips(currPlayer);

// const player = game.getCurrPlayer();
// const oceanGrid = game.getPlayers()[player].getGameBoard();
// const opponent = game.getOpponent();
// const targetGrid = game.getPlayers()[opponent].getGameBoard();
// initBattleFrontend(oceanGrid, targetGrid);
// addTargetGridEL();