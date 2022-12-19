const input = require('fs')
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((section) => section.split(','))

const pairs = input.map((el) => [el[0].split('-'), el[1].split('-')])

function getFullOverlaps() {
  return pairs.reduce((overlaps, pair) => {
    if (
      (parseInt(pair[0][0]) <= parseInt(pair[1][0]) &&
        parseInt(pair[0][1]) >= parseInt(pair[1][1])) ||
      (parseInt(pair[1][0]) <= parseInt(pair[0][0]) &&
        parseInt(pair[1][1]) >= parseInt(pair[0][1]))
    ) {
      overlaps++
    }
    return overlaps
  }, 0)
}

console.log(`Pairs with have overlapping ranges: ${getFullOverlaps()}`)
