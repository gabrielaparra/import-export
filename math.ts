export function powerOf2(x: number = 0): number {
//powerOf2 receives an arg of 'x' which has to be a number
//defaults to '0', AND it must RETURN a number
  return x ** 2
}

export function randomInteger(max: number = 100): number {
//randomInteger takes an arg 'max' which has to be a number,
//defaults to '100' and it must RETURN a number
  return Math.floor(Math.random() * max);
}
