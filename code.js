function insertionSortReverse(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  else {
  for (let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    let j;
    for (j = i; j < arr.length && arr[j] > val; j++) {
      arr[j] = arr[j - 1];
      }
    arr[j] = val;
    }
  return arr;
  }
}
