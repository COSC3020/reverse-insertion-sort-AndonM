function insertionSortReverse(arr) {
  let arrayLength = arr.length;
  if(arrayLength > 0) {
      for(let i = arrayLength-2; i > -1; i--) {
          let currentVal = arr[i];
          let j;
          for(j = i; j < arrayLength && arr[j+1] < currentVal; j++) {
              arr[j] = arr[j+1];
          }
          arr[j] = currentVal;
      }
  }
  return arr; 
}
