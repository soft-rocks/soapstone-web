/**
 * The hand-drawn loop that circles a word, as an SVG path `w` wide and `h` tall. The ends keep
 * the same shape at any width: a long phrase gets a longer straight middle, not rounder ends
 * that cut into its first and last letters.
 */
export function ring(w: number, h: number): string {
  const x = Math.min(w / 100, h / 60);
  const y = h / 40;
  const n = (v: number) => +v.toFixed(3);
  const left = (p: number) => n(p * x);
  const right = (p: number) => n(w - p * x);
  const start = `${n(w / 2 - 4 * x)} ${n(3 * y)}`;
  return (
    `M${start}C${right(8)} ${n(y)} ${right(1)} ${n(4 * y)} ${right(1)} ${n(20 * y)}` +
    `S${right(8)} ${n(38 * y)} ${n(w / 2)} ${n(38 * y)} ${left(1)} ${n(35 * y)} ${left(1)} ${n(20 * y)} ` +
    `${left(8)} ${n(4 * y)} ${start}`
  );
}
