function selectionSort(arr: number[]) {
  const length = arr.length;

  for (let index = 0; index < length; index++) {
    let min = index;
    const temp = arr[index];

    for (let j = index + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[index] = arr[min];
    arr[min] = temp;
  }

  return arr;
}
