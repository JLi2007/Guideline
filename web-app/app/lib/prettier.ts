export function Formatter(text: string) {
  const lines = text.trim().split(/\r?\n/);
  const result: { ref: string; positions: number[][] }[] = []; // output array

  for (let i = 0; i < lines.length; i++) {
    // match only the "* Component: REF" lines
    const compMatch = lines[i].match(/^\*\s*Component:\s*([^\s(]+)/);
    if (compMatch) {
      const ref = compMatch[1];

      // look at the very next line for "* Pins: [...]"
      const pinsLine = lines[i + 1] || '';
      const pinsMatch = pinsLine.match(/^\*\s*Pins:\s*(.+)/);
      if (pinsMatch) {
        // extract the bracketed pairs
        const pinsStr = pinsMatch[1];
        const positions = pinsStr
          .split('],')                       // split each "[x, y]" group
          .map(s => s.replace(/[\[\]\s]/g, '')) // strip brackets/spaces
          .map(s => s.split(',').map(Number)); // to [[x,y], ...]

        result.push({ ref, positions });
      }
    }
  }

  return result;
}

// THE FORMAT WE WANT:
// [
// {
// "ref": "R1",
// "positions": [
// [5, 10],
// [5, 15]
// ]
// },
// {
// "ref": "LED1",
// "positions": [
// [7, 12],
// [7, 13]
// ]
// }
// ]