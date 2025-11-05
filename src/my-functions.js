/**
 * Beregner summen af to tal.
 * @param {number} a - Det første tal.
 * @param {number} b - Det andet tal.
 * @returns {number} Summen af de to tal.
 */
export function calculateSum(a, b) {
  // Skriv din kode her:

  return a + b;

}

/**
 * Kontrollerer om et tal er et primtal.
 * @param {number} number - Tallet der skal kontrolleres.
 * @returns {boolean} True hvis tallet er et primtal, ellers false.
 */
export function checkIfPrime(number) {
  // Skriv din kode her:

  // check if number is a float, since floats cant be prime numbers
  if (Math.floor(number) !== number) return false;

  for (var i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;

}

/**
 * Finder det største tal i en liste.
 * @param {number[]} array - Listen af tal.
 * @returns {number} Det største tal i listen.
 */
export function findMaximumNumber(array) {
  // Skriv din kode her:

  const sortedArray = array.sort((a, b) => b - a)
  console.log(sortedArray);
  return sortedArray[0]
}

/**
 * Fjerner dubletter fra en liste.
 * @param {any[]} array - Listen der skal renses for dubletter.
 * @returns {any[]} Listen uden dubletter.
 */
export function removeDuplicateElements(array) {
  // Skriv din kode her:

  const set = new Set(array);

  return Array.from(set)


}
