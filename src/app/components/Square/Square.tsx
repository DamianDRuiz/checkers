import styles from './Square.module.scss';

import { Square as SquareType } from 'src/app/types/Square';

function Square({ id, color, occupiedBy, selected, onClick }: SquareProps) {
  let occupiedStyles = '';

  if (occupiedBy != null) {
    if (occupiedBy == 'black') occupiedStyles = `${styles.occupiedByBlack}`;
    else occupiedStyles = `${styles.occupiedByRed}`;
  }

  let squareStyles = `${styles.square} ${
    color === 'black' ? styles.black : styles.red
  } ${occupiedStyles}`;

  return (
    <div data-square-id={id} className={squareStyles} onClick={onClick}>
      {selected ? 'SELECTED' : ''}
    </div>
  );
}

interface SquareProps extends SquareType {
  onClick: () => void;
}
export default Square;
