const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n')

let total = 0

function getPriority(letter) {
  if (letter === letter.toUpperCase()) {
    total += letter.charCodeAt(0) - 38
  } else {
    total += letter.charCodeAt(0) - 96
  }
}

let duplicates = []

for (let i = 0; i < input.length; i++) {
  let first = input[i].substring(0, input[i].length / 2).split('')
  let second = input[i].substring(input[i].length / 2).split('')

  let set = new Set(first.filter((el) => second.includes(el)))
  duplicates.push(Array.from(set))
}

duplicates.flat().forEach((dupe) => getPriority(dupe))

console.log(total)
