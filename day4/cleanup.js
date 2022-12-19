const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((section) => section.split(','))

// Transmute input to array of integer subarrays
const pairs = input.map((el) => [
  [parseInt(el[0].split('-')[0]), parseInt(el[0].split('-')[1])],
  [parseInt(el[1].split('-')[0]), parseInt(el[1].split('-')[1])],
])

function getOverlaps() {
  return pairs.reduce(
    (overlaps, pair) => {
      const fullMatch =
        (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
        (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])

      const partMatch =
        (pair[0][0] <= pair[1][1] && pair[0][0] >= pair[1][0]) ||
        (pair[0][1] <= pair[1][1] && pair[0][1] >= pair[1][0])

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
