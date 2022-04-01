function fibonacciRecursive(n: number) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n: number) {
  let arr = [0, 1];

  for (let index = 2; index <= n; index++) {
    arr.push(arr[index - 2] + arr[index - 1]);
  }

  return arr[n];
}
