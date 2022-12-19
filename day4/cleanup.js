const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((section) => section.split(','))

const pairs = input.map((el) => [el[0].split('-'), el[1].split('-')])

function getOverlaps() {
  return pairs.reduce(
    (overlaps, pair) => {
      const fullMatch =
        (parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
          parseInt(pair[0][1]) >= parseInt(pair[1][1])) ||
        (parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
          parseInt(pair[1][1]) >= parseInt(pair[0][1]))

      const partMatch =
        (parseInt(pair[0][0]) <= parseInt(pair[1][1]) &&
          parseInt(pair[0][0]) >= parseInt(pair[1][0])) ||
        (parseInt(pair[0][1]) <= parseInt(pair[1][1]) &&
          parseInt(pair[0][1]) >= parseInt(pair[1][0]))

      if (fullMatch) {
        overlaps = { ...overlaps, full: overlaps.full + 1 }
      }
      if (partMatch || fullMatch) {
        overlaps = { ...overlaps, partial: overlaps.partial + 1 }
      }
      return overlaps
    },
    { full: 0, partial: 0 }
  )
}

console.log(getOverlaps())
