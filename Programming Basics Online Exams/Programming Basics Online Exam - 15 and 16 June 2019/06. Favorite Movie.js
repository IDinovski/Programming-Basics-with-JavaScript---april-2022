function solve(input) {
  let index = 0;
  let next = input[index];
  index++;
  let bestResult = 0;
  let bestName = "";
  let currentResult = 0;
  let currentNumber = 0;
  let counter = 0;
  while (next != "STOP") {
    for (let i = 0; i < next.length; i++) {
      currentNumber = next[i].charCodeAt();
      if (currentNumber >= 65 && currentNumber <= 90) {
        currentResult += currentNumber;
        currentResult -= next.length; // големи //
      } else if (currentNumber >= 97 && currentNumber <= 122) {
        currentResult += currentNumber;
        currentResult -= next.length * 2; // малки //
      } else {
        currentResult += currentNumber;
      }
    }
    if (currentResult > bestResult) {
      bestResult = currentResult;
      bestName = next;
    }
    next = input[index];
    index++;
    currentResult = 0;
    counter++;
    if (counter >= 7) {
      console.log("The limit is reached.");
      break;
    }
  }
  console.log(
    `The best movie for you is ${bestName} with ${bestResult} ASCII sum.`
  );
}
solve(["Matrix", "Breaking bad", "Legend", "STOP"]);
