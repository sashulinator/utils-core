export function random(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low)
}
