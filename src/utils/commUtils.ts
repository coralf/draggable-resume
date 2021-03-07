import { v4 } from 'uuid';



export function genUUID() {
  return v4();
}


export function calculateOriginLocation({ x, y }: { x: number; y: number }, { left, top }: { left: number; top: number }) {
  return {
    originX: x - left,
    originY: y - top
  }
}