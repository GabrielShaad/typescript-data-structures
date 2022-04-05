// O(nˆ2)
function sortedString(array: String[]) {
  const onlyChar = [];

  for (let index = 0; index < array.length; index++) {
    const currentString = array[index];

    if (!currentString) {
      return;
    }

    for (
      let sortingIndex = 0;
      sortingIndex < currentString.length;
      sortingIndex++
    ) {
      if (!currentString[sortingIndex].match(/\d+/g)) {
        onlyChar.push(currentString[sortingIndex]);
      }
    }
  }

  return onlyChar.sort().join("");
}

// O(n log n)
function sortedStringFaster(array: String[]) {
  const onlyChar = array.reduce(
    (sortedString, currentValue) =>
      (sortedString += currentValue.replace(/\d+/g, "")),
    ""
  );

  return onlyChar.split("").sort().join("");
}
