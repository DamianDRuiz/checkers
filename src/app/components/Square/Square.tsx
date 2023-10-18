import styles from './Square.module.scss';

import { Square as SquareType } from 'src/app/types/Square';

function Square({id, color, occupied}: SquareProps) {
  return <div className={`${styles.square} ${color === 'black' ? styles.black : styles.red}`}>
    {/* id: {id} | color: {color} | occupied: {occupied} */}
    {id}
    </div>
}

interface SquareProps extends SquareType {
  
}
export default Square;
