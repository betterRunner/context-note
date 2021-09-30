export interface Coor {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  id?: string;
}

export interface Oper {
  title: string;
  onClick: () => void;
  isConfirm?: boolean;
}
