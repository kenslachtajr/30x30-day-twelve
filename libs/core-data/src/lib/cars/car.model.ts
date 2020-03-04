export interface Car {
  id: number,
  make: string,
  model: string,
  maxSpeed: number
}

export const emptyCar: Car = {
  id: null,
  make: '',
  model: '',
  maxSpeed: 0
}
