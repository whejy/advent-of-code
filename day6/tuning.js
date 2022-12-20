const input = require('fs').readFileSync('input.txt', 'utf-8')

// For Part 1: i + 14 -> i + 4, j === 13 -> j === 3
function getMarker() {
  for (let i = 0; i < input.length; i++) {
    const section = input.slice(i, i + 14)
    let j = 0
    while (section.indexOf(section[j]) === section.lastIndexOf(section[j])) {
      if (j === 13) {
        return { section, marker: i + 14 }
      }
      j++
    }
  }
}

console.log(getMarker())
