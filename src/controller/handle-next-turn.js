import { game } from "../logic/game"

const handleNextTurn = () => {
  game.toggleCurrPlayer();
}

export { handleNextTurn };