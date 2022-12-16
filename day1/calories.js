const input = require('fs').readFileSync('input.txt', 'utf-8').split("\n\n")

let elves = []
for (let i = 0; i < input.length; i++) {
    let elf = input[i]
        .split("\n")
        .reduce((prev, curr) =>
            parseInt(prev) + parseInt(curr), 0
        )
    elves.push(elf)
}

elves.sort((a, b) => b - a)

console.log(`Top elf: ${elves[0]}`)
console.log(`Top 3 elves are carrying: ${elves.slice(0, 3).join(', ')}`)
console.log(`Total calories carried by top 3: ${elves[0] + elves[1] + elves[2]}`)