import { useReducer } from 'react';
import { DEFAULT_BOARD_SIZE } from 'src/contants';
import Board from './components/Board/Board';
import { Board as BoardType } from './types/Board';
import { Square } from './types/Square';
import { SquareColor } from './types/SquareColor';

function buildBoard(): BoardType {
  const squareCount = DEFAULT_BOARD_SIZE * DEFAULT_BOARD_SIZE;
  const board: BoardType = { squares: [] };
  const squares: Square[] = [];
  let currentSquareColor: SquareColor = 'black';

  for (let i = 0; i < squareCount; i++) {
    let occupiedBy: null | SquareColor = null;

    if (i + 1 <= 24 && currentSquareColor == 'black') occupiedBy = 'red';
    else if (i + 1 >= 41 && currentSquareColor == 'black') occupiedBy = 'black';

    const newSquare: Square = {
      id: i,
      color: currentSquareColor,
      occupiedBy: occupiedBy,
      selected: false,
      targeted: false,
    };

    squares.push({ ...newSquare });
    currentSquareColor = calculateNextSquareColor(i, currentSquareColor);
  }

  board.squares = [...squares];
  return board;
}

function calculateNextSquareColor(id: number, currentColor: SquareColor) {
  let nextColor: SquareColor = currentColor == 'black' ? 'red' : 'black';

  if (id == 7 || id == 23 || id == 39 || id == 55) nextColor = 'red';
  else if (id == 15 || id == 31 || id == 47 || id == 63) nextColor = 'black';

  return nextColor;
}

function reducer(state: BoardType, action: any) {
  switch (action.type) {
    case 'select':
      let newState = { ...state };
      newState.squares = [...state.squares];
      newState.squares[action.id].selected = true;
      return newState;
      break;
  }
}

export function App() {
  const initialBoard: BoardType = buildBoard();
  const [board, dispatch] = useReducer(reducer, initialBoard);

  return <Board board={board} dispatch={dispatch} />;
}

export default App;
