// (1) Implement Binary Search
function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            return mid;
        }

        if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const keyNumber = 12;
const keyIndex = binarySearch(numbers, keyNumber);

if (keyIndex !== -1) {
    console.log(`The key number ${keyNumber} was found at index ${keyIndex}.`);
} else {
    console.log(`The key number ${keyNumber} was not found in the array.`);
}