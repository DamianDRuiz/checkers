import styles from './Square.module.scss';

import { Square as SquareType } from 'src/app/types/Square';

function Square({ id, color, occupiedBy }: SquareProps) {
  let occupiedStyles = '';
  if (occupiedBy != null) {
    if (occupiedBy == 'black') occupiedStyles = `${styles.occupiedByBlack}`;
    else occupiedStyles = `${styles.occupiedByRed}`;
  }

  let squareStyles = `${styles.square} ${
    color === 'black' ? styles.black : styles.red
  } ${occupiedStyles}`;

  return <div className={squareStyles}></div>;
}

interface SquareProps extends SquareType {}
export default Square;
