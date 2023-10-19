import { Board } from '../types/Board';
import { Square } from '../types/Square';

export function reducer(state: Board, action: any) {
  switch (action.type) {
    case 'select':
      state.squares = selectSquare(state.squares, action.id);
      return { ...state };
      break;
  }
}

function selectSquare(squares: Square[], id: number) {
  if (squareIsOccupied(squares[id])) {
    squares = unselectCurrentlySelectedSquare(squares);
    squares[id].selected = true;
  }
  return squares;
}

function squareIsOccupied(square: Square) {
  return square.occupiedBy != null ? true : false;
}

function unselectCurrentlySelectedSquare(squares: Square[]) {
  const currentlySelectedSquare = squares.find(
    (square) => square.selected == true
  );
  if (currentlySelectedSquare) currentlySelectedSquare.selected = false;
  return squares;
}
