// (4) Implement Insertion Sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

const numbers = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedNumbers = insertionSort(numbers);
console.log(sortedNumbers);  