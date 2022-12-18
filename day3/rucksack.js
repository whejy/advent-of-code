const input = require('fs').readFileSync('input.txt', 'utf-8').split('\n')

let duplicates;

// Sum items in rucksack according to priority value
function getPriority(duplicates) {
  return duplicates.reduce((acc, curr) => {
    if (curr === curr.toUpperCase()) {
      return acc + curr.charCodeAt(0) - 38
    } else {
      return acc + curr.charCodeAt(0) - 96
    }
  }, 0)
}

// Get duplicate items in each rucksack
function getDuplicates() {
  duplicates = [];

  for (let i = 0; i < input.length; i++) {
    let first = input[i].substring(0, input[i].length / 2).split('');
    let second = input[i].substring(input[i].length / 2).split('');

    let duplicate = first.find((el) => second.includes(el));
    duplicates.push(duplicate);
  }

  return getPriority(duplicates)
}

// Get common item between 3 rucksacks
function getBadges() {
  duplicates = [];

  for (let i = 0; i < input.length - 2; i += 3) {
    let duplicate = input[i]
      .split('')
      .find(
        (el) =>
          input[i + 1].split('').includes(el) &&
          input[i + 2].split('').includes(el)
      );
    duplicates.push(duplicate);
  }

  return getPriority(duplicates)
}

console.log(`Priority total for duplicate items: ${getDuplicates()}`);
console.log(`Priority total for group badges: ${getBadges()}`);
