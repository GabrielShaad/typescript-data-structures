function mergeSorted(arr1: Array<number>, arr2: Array<number>) {
  const sortedArray = [];

  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  let arrayItem1 = arr1[0];
  let arrayItem2 = arr2[0];
  let i = 1;
  let j = 1;

  while (arrayItem1 || arrayItem2) {
    if (!arrayItem2 || arrayItem1 < arrayItem2) {
      sortedArray.push(arrayItem1);
      arrayItem1 = arr1[i];
      i++;
    } else {
      sortedArray.push(arrayItem2);
      arrayItem2 = arr2[j];
      j++;
    }
  }

  return sortedArray;
}

const simplifiedMergeSorted = (arr1: Array<number>, arr2: Array<number>) =>
  [...arr1, ...arr2].sort((a, b) => a - b);
