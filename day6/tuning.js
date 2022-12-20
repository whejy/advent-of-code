const input = require('fs').readFileSync('input.txt', 'utf-8')

const SECTION_SIZE = 14 // = 4 for Part 1

function getMarker() {
  for (let i = 0; i < input.length; i++) {
    const section = input.slice(i, i + SECTION_SIZE)
    let j = 0
    while (section.indexOf(section[j]) === section.lastIndexOf(section[j])) {
      if (j === SECTION_SIZE - 1) {
        return { section, marker: i + SECTION_SIZE }
      }
      j++
    }
  }
}

console.log(getMarker())
