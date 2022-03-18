//partion function use to divide thae array into two subarrays
// where the right one contains the numbers bigger than the pivot
//and the left one contains the numbers less than the pivot
//time complexity O(n logn(n))

function partion(a, l, h) {
  //pivot could be any number in the array
  let pivot = a[l];
  let i = l;
  let j = h;
  let temp;
  while (i < j) {
    do i++;
    while (a[i] <= pivot);
    do j--;
    while (a[j] > pivot);
    if (i < j) {
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  temp = a[l];
  a[l] = a[j];
  a[j] = temp;
  return j;
}

function quickSort(a, l, h) {
  if (l < h) {
    let j = partion(a, l, h);
    quickSort(a, l, j);
    quickSort(a, j + 1, h);
  }
  return a;
}
console.log(quickSort([2, 1, 4, 6, 7, 3], 0, 6));
