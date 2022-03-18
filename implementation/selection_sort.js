//time complexity O(n^2)
function selectionSort(array) {
  let min;
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      min = array[i];
      if (array[j] < min) {
        temp = min;
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
