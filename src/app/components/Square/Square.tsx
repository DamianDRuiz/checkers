import styles from './Square.module.scss';

import { Square as SquareType } from 'src/app/types/Square';

function Square({ id, color, occupiedBy, selected, onClick }: SquareProps) {
  let occupiedStyles = '';
  let selectedStyles = selected ? `${styles.selected}` : '';
  let squareStyles = '';

  if (occupiedBy != null) {
    if (occupiedBy == 'black') occupiedStyles = `${styles.occupiedByBlack}`;
    else occupiedStyles = `${styles.occupiedByRed}`;
  }

  squareStyles = `${styles.square} ${
    color === 'black' ? styles.black : styles.red
  } ${occupiedStyles} ${selectedStyles}`;

  return (
    <div data-square-id={id} className={squareStyles} onClick={onClick}></div>
  );
}

interface SquareProps extends SquareType {
  onClick: () => void;
}
export default Square;
