/**
 * Advance widths of Public Sans for ASCII 32–126, in hundredths of an em, two base-36 digits per
 * glyph. Measured on the site with the loaded font. A slide diagram uses them to place words in
 * an SVG, which cannot flow text. `extra` holds the curly quotes, dashes, ellipsis and é the
 * notes use. Other characters (Chinese, full-width punctuation) count 1em.
 */
const tables: Record<400 | 700, string> = {
  400: '0o0p171o1u2i1z0p0u0v131j0o120n0z1p151o1r1r1s1q1o1t1q0n0o1j1j1j1g2b1z1v1x1x1q1n21250s131w1m2h23211s231w1v1n1y1v2n1x1p1s0u0z0u1b1g0m1j1o1i1o1l141q1m0p0q1k0u2e1m1l1o1o131f131m1e261k1i1c0x0q0x1l',
  700: '0n0s1c1q1w2m260q0x0y1b1n0s130r121s171r1v1u1v1u1r1v1u0r0s1m1n1m1h2b211w20201r1p24250v14201m2k26241t251y1x1q201y2p201v1v0y120y1c1j0q1l1p1j1p1m141r1n0r0t1m0x2i1n1m1p1p151h161o1g271n1k1e120r121p',
};

const extra: Record<400 | 700, Record<string, number>> = {
  400: { '‘': 0.24, '’': 0.23, '“': 0.42, '”': 0.41, '–': 0.56, '—': 1.12, '…': 0.81, é: 0.57 },
  700: { '‘': 0.26, '’': 0.26, '“': 0.48, '”': 0.48, '–': 0.59, '—': 1.15, '…': 0.93, é: 0.58 },
};

/** Width of a run of text at font size `size`, in the same unit as `size`. */
export function measure(text: string, size: number, weight: 400 | 700 = 400): number {
  const table = tables[weight];
  let width = 0;
  for (const char of text) {
    const code = char.charCodeAt(0);
    width +=
      code >= 32 && code < 127
        ? parseInt(table.slice((code - 32) * 2, (code - 32) * 2 + 2), 36) / 100
        : (extra[weight][char] ?? 1);
  }
  return width * size;
}
