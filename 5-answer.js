// (5) Write a program to sort list of strings (similar to that of dictionary)
function dictionarySort(strings) {
    return strings.sort((a, b) => a.localeCompare(b));
}

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const sortedWords = dictionarySort(words);
console.log(sortedWords);  