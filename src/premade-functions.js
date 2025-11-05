// Funktion til at finde det længste ord i en sætning
// Skal modtage en streng (sætning) og returnere det længste ord i sætningen
export function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Funktion til at tælle forekomsterne af hvert tegn i en streng
// Skal modtage en streng og returnere et objekt med tegn som nøgler og deres antal som værdier
export function charCount(str) {
    let count = {};
    for (let char of str) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}

// Funktion til at flette to sorterede arrays til et sorteret array
// Skal modtage to sorterede arrays og returnere et enkelt sorteret array
export function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}

// Funktion til at flade et indlejret array ud ("flatten")
// Skal modtage et indlejret array og returnere et fladt array
export function flattenArray(nestedArray) {
    let flatArray = [];
    for (let element of nestedArray) {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flattenArray(element));
        } else {
            flatArray.push(element);
        }
    }
    return flatArray;
}

// Funktion til at gruppere et array af objekter efter en egenskab
// Skal modtage et array af objekter og et egenskabsnavn, og returnere et objekt grupperet efter egenskaben
export function groupBy(arr, property) {
    return arr.reduce((acc, obj) => {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

// Funktion til at debounce en anden funktion
// Skal modtage en funktion og en forsinkelse, og returnere en debounced version af funktionen
export function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}