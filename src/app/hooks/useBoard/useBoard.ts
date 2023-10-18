import { Board } from 'src/app/types/Board';
import { Square } from 'src/app/types/Square';
import { SquareColor } from 'src/app/types/SquareColor';
import { DEFAULT_BOARD_SIZE } from 'src/contants';

export function useBoard() {
  const board: Board = buildBoard();
  console.log(board);
  return board;
}

function buildBoard(): Board {
  const squareCount = DEFAULT_BOARD_SIZE * DEFAULT_BOARD_SIZE;
  const board: Board = { squares: [] };
  const squares: Square[] = [];
  let currentSquareColor: SquareColor = 'black';

  for (let i = 0; i < squareCount; i++) {
    let occupiedBy: null | SquareColor = null;

    if (i + 1 <= 24 && currentSquareColor == 'black') occupiedBy = 'red';

    if (i + 1 >= 41 && currentSquareColor == 'black') occupiedBy = 'black';

    const newSquare: Square = {
      id: i,
      color: currentSquareColor,
      occupiedBy: occupiedBy,
    };

    squares.push({ ...newSquare });
    currentSquareColor = calculateNextSquareColor(i, currentSquareColor);
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
