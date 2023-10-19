import { Board as BoardType } from '../types/Board';
import { Square } from '../types/Square';

export function reducer(state: BoardType, action: any) {
  switch (action.type) {
    case 'select':
      state.squares = select(state.squares, action.id);
      return { ...state };
      break;
  }
}

function select(squares: Square[], id: number) {
  const currentlySelectedSquare = squares.find(
    (square) => square.selected == true
  );

  if (currentlySelectedSquare) currentlySelectedSquare.selected = false;

  squares[id].selected = true;
  return squares;
}
