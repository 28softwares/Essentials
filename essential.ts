/**
 * Generates random number.
 *  * @returns {number} - random and unique number
 */
function generateRandomNumber(): Number {
  const date: Date = new Date();

  return parseInt(
    date.getFullYear().toString() +
      date.getMonth().toString() +
      date.getDay().toString() +
      date.getHours().toString() +
      date.getMinutes().toString() +
      date.getSeconds().toString() +
      date.getMilliseconds().toString()
  );
}

generateRandomNumber();
