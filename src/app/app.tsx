// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Board from './components/Board/Board';
import useBoard from './hooks/useBoard/useBoard';

export function App() {

  const board = useBoard()

  return (
    <>
      <Board board={board} />
    </>
  );
}

export default App;
