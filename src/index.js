import { initFrontend } from "./dom/initFrontend";
import { game } from "./logic/game";

game.initGame();

initFrontend(game.players[0].getGameBoard());