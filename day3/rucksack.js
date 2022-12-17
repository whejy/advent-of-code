const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n')

let duplicates = []
let total = 0

// Helper function that converts each duplicate item to a 'priority' number
function getPriority(letter) {
  if (letter === letter.toUpperCase()) {
    total += letter.charCodeAt(0) - 38
  } else {
    total += letter.charCodeAt(0) - 96
  }
}

// Get duplicate items in each rucksack
for (let i = 0; i < input.length; i++) {
  let first = input[i].substring(0, input[i].length / 2).split('')
  let second = input[i].substring(input[i].length / 2).split('')

  let duplicate = first.find((el) => second.includes(el))
  duplicates.push(duplicate)
}

duplicates.flat().forEach((dupe) => getPriority(dupe))

console.log(total)
