import { handleAttackCell } from "../controller/handle-attack";

const addTargetGridEL = () => {
  const targetGridCells = document.querySelectorAll(
    ".target-grid .target-square"
  );
  targetGridCells.forEach((cell) => {
    if (!cell.hasAttribute('addedEL')) {
      cell.addEventListener("click", handleAttackCell);
      cell.setAttribute('addedEL', true);
    }
  });
};

export { addTargetGridEL };
