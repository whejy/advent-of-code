const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n')

const scores = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
  X: 1,
  Y: 2,
  Z: 3,
}

function handToPlay(object) {
  for (const [key, value] of Object.entries(object)) {
    if (value === target) {
      return key
    }
  }
}

let total = 0
let result = []

for (let i = 0; i < input.length; i++) {
  let round = input[i].split(' ')
  let opponentsHand = scores[round[0]]
  let targetPoints = null
  switch (round[1]) {
    case 'X':
      target = 0
      break
    case 'Y':
      target = 3
      break
    case 'Z':
      target = 6
      break
  }
  result.push([round[0], handToPlay(opponentsHand, targetPoints)])
}

for (let i = 0; i < result.length; i++) {
  let round = result[i]
  let score = scores[round[0]][round[1]] + scores[round[1]]
  total += score
}

console.log(total)
