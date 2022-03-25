function findFirstRecurringItem(input: Array<number>) {
  for (let index = 0; index < input.length; index++) {
    for (let j = index - 1; j >= 0; j--) {
      if (input[index] === input[j]) {
        return input[index];
      }
    }
  }
}

function simplifiedFindFirstRecurringItem(input: Array<number>) {
  const map = {};

  for (let index = 0; index < input.length; index++) {
    if (map[input[index]]) {
      return map[input[index]];
    } else {
      map[input[index]] = input[index];
    }
  }
}
