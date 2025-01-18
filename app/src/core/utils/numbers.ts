export function clampNumber(value: number, min: number, max: number): number {
   const lower = Math.min(min, max);
   const upper = Math.max(min, max);
   return Math.max(lower, Math.min(value, upper));
}
