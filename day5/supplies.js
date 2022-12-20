const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n\n')

const stack = input[0].split('\n')
const moves = input[1].split('\n')

const stackArr = [[], [], [], []]
const movesArr = []

// each column is 4 spaces wide, ignore numbers and white spaces
function getStacks() {
  for (let i = 0; i < stack.length; i++) {
    for (let j = 0; j < stack[i].length; j += 4) {
      if (stack[i][j + 1] !== ' ' && isNaN(Number(stack[i][j + 1]))) {
        stackArr[j / 4].push(stack[i][j + 1])
        stackArr.push([])
      }
    }
  }

  // remove empty arrays from stacks
  const filteredStack = stackArr.filter((subArr) => subArr.length >= 1)
  filteredStack.forEach((stack) => stack.reverse())
  return filteredStack
}

function moveStacks() {
  const filteredStack = getStacks()

  // collect movements array
  moves.forEach((line) =>
    movesArr.push(line.split(' ').filter((element) => !isNaN(element)))
  )

  // perform crate movements
  movesArr.forEach((move) => {
    let removedCrates = filteredStack[move[1] - 1].splice(-move[0])
    filteredStack[move[2] - 1].push(...removedCrates) // ...removedCrates.reverse() for part1
  })

  // collect crates from top of each stack
  let topCrates = ''
  filteredStack.forEach((stack) => (topCrates += stack[stack.length - 1]))
  return topCrates
}

console.log(moveStacks())
