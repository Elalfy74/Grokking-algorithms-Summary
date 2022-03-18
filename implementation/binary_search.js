//reurns the index of the element or null
////time complexity O(log(n))
function binarSearch(array, number) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess == number) return mid;
    if (guess < number) low = mid + 1;
    else high = mid - 1;
  }
  return null;
}
