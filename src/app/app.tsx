import { useReducer } from 'react';
import Board from './components/Board/Board';
import { reducer } from './reducers/board.reducer';
import { Board as BoardType } from './types/Board';
import { buildBoard } from './util/buildBoard';

export function App() {
  const initialBoard: BoardType = buildBoard();
  const [board, dispatch] = useReducer(reducer, initialBoard);

  return <Board board={board} dispatch={dispatch} />;
}

export default App;
