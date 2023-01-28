import { handleAttackCell } from "../controller/handle-attack";

const addTargetGridEL = () => {
  const targetGridCells = document.querySelectorAll(
    ".target-grid .target-square"
  );
  targetGridCells.forEach((cell) =>
    cell.addEventListener("click", handleAttackCell)
  );
};

export { addTargetGridEL };
