import { SquareColor } from './SquareColor';


export interface Square {
  id: number;
  color: SquareColor;
  occupied: boolean;
}
