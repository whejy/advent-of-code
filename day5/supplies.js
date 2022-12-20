const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n\n')

const stack = input[0].split('\n')
const moves = input[1].split('\n')

const stackArr = [[], [], [], []]
const movesArr = []

for (let i = 0; i < stack.length; i++) {
  // each column is 4 spaces wide
  for (let j = 0; j < stack[i].length; j += 4) {
    // push element to corresponding index
    if (stack[i][j + 1] !== ' ' && isNaN(Number(stack[i][j + 1]))) {
      stackArr[j / 4].push(stack[i][j + 1])
      stackArr.push([])
    }
  }
}

// remove empty arrays from stacks
const filteredStack = stackArr.filter((subArr) => subArr.length >= 1)
filteredStack.forEach((stack) => stack.reverse())

// collect movements array
moves.forEach((line) =>
  movesArr.push(line.split(' ').filter((element) => !isNaN(element)))
)

// perform crate movements
movesArr.forEach((move) => {
  let removedCrates = filteredStack[move[1] - 1].splice(-move[0])
  filteredStack[move[2] - 1].push(...removedCrates.reverse())
})

// collect crates from top of each stack
let topCrates = ''
filteredStack.forEach((stack) => (topCrates += stack[stack.length - 1]))

console.log(topCrates)
