import { Board as BoardType } from '../types/Board';

export function reducer(state: BoardType, action: any) {
  switch (action.type) {
    case 'select':
      state.squares[action.id].selected = true;
      return { ...state };
      break;
  }
}
