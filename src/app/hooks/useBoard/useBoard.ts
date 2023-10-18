import { Board } from 'src/app/types/Board';
import { Square } from 'src/app/types/Square';
import { SquareColor } from 'src/app/types/SquareColor';
import { DEFAULT_BOARD_SIZE } from 'src/contants';

export function useBoard() {
  const board: Board = buildBoard();
  return board;
}

function buildBoard(): Board {
  const squareCount = DEFAULT_BOARD_SIZE * DEFAULT_BOARD_SIZE;
  const board: Board = { squares: [] };
  const squares: Square[] = [];
  let currentColor: SquareColor = 'black';

  for (let i = 0; i < squareCount; i++) {
    const newSquare: Square = {
      id: i,
      color: currentColor,
      occupied: false,
    };

    squares.push({ ...newSquare });
    currentColor = calculateNextSquareColor(i, currentColor);
  }

  board.squares = [...squares];
  return board;
}

function calculateNextSquareColor(id: number, currentColor: SquareColor) {
  let nextColor: SquareColor = currentColor == 'black' ? 'red' : 'black';
  if (id == 7 || id == 23 || id == 39 || id == 55 || id == 7) nextColor = 'red';
  else if (id == 15 || id == 31 || id == 47 || id == 63) nextColor = 'black';
  return nextColor;
}

export default useBoard;
