import Square from "../Square/Square";
import styles from './Board.module.scss';

import { Board as BoardType } from "src/app/types/Board";

function Board({board}: BoardProps) {
  const squares = board.squares.map((square, i) => <Square key={i} id={square.id} color={square.color} occupiedBy={square.occupiedBy} />)
  return <div className={styles.board}>{squares}</div>
}

interface BoardProps {
  board: BoardType
}

export default Board;
