function reverse(string: string) {
  const inverted = [];

  for (let index = string.length; index >= 0; index--) {
    inverted.push(string[index]);
  }

  return inverted.join("");
}

function simplifiedReverse(string: string) {
  return string.split("").reverse().join("");
}

const evenSimplerReverse = (string) => [...string].reverse().join("");
