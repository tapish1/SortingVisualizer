export function MergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) {
    return array;
  }
  const array_two = array.slice();
  MergeSortHelper(array, 0, array.length - 1, array_two, animations);
  return animations;
}

function MergeSortHelper(
  mainarr,
  startIndex,
  endIndex,
  secondary_array,
  animations
) {
  if (startIndex == endIndex) return;
  const mid = Math.floor((startIndex + endIndex) / 2);
  MergeSortHelper(secondary_array, startIndex, mid, mainarr, animations);
  MergeSortHelper(secondary_array, mid + 1, endIndex, mainarr, animations);
  Merge(mainarr, startIndex, mid, endIndex, secondary_array, animations);
}

function Merge(
  mainarr,
  startIndex,
  midIndex,
  endIndex,
  secondary_array,
  animations
) {
  let k = startIndex;
  let i = startIndex;
  let j = midIndex + 1;

  while (i <= midIndex && j <= endIndex) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (secondary_array[i] <= secondary_array[j]) {
      animations.push([k, secondary_array[i]]);
      mainarr[k++] = secondary_array[i++];
    } else {
      animations.push([k, secondary_array[j]]);
      mainarr[k++] = secondary_array[j++];
    }
  }
  while (i <= midIndex) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, secondary_array[i]]);
    mainarr[k++] = secondary_array[i++];
  }

  while (j <= endIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, secondary_array[j]]);
    mainarr[k++] = secondary_array[j++];
  }
}
