import { handleAttackCell } from "../controller/handle-attack";

const addTargetGridEL = () => {
  const targetGridCells = document.querySelectorAll(".target-grid .square");
  targetGridCells.forEach((cell) =>
    cell.addEventListener("click", (event) => handleAttackCell(event))
  );
};

export { addTargetGridEL };