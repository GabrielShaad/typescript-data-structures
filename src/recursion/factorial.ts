let factorial = 1;

function findFactorialRecursive(number: number) {
  if (!number) {
    return 1;
  }

  return number * findFactorialRecursive(--number);
}

function findFactorialIterative(number: number) {
  let factorial = 1;

  while (number) {
    factorial *= number;
    number--;
  }

  return factorial;
}
