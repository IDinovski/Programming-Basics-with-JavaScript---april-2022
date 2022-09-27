function solve(input) {
  let index = 0;
  let vhod = String(input[index]);
  let movieName = "";
  let maxAmountTickets = 0;
  let type = "";
  let standardCounter = 0;
  let standardCounterT = 0;
  let studentCounter = 0;
  let studentCounterT = 0;
  let kidCounter = 0;
  let kidCounterT = 0;
  let procentMovie = 0;
  let totalTickets = 0;

  while (vhod != "Finish") {
    movieName = String(input[index]);
    index++;
    maxAmountTickets = Number(input[index]);
    index++;
    type = String(input[index]);
    while (type != "End") {
      type = String(input[index]);
      index++;
      switch (type) {
        case "standard":
          standardCounter++;
          standardCounterT++;
          break;
        case "student":
          studentCounter++;
          studentCounterT++;
          break;
        case "kid":
          kidCounter++;
          kidCounterT++;
          break;
      }
      if (standardCounter + studentCounter + kidCounter >= maxAmountTickets) {
        break;
      }
    }
    procentMovie =
      ((standardCounter + studentCounter + kidCounter) / maxAmountTickets) *
      100;
    standardCounter = 0;
    studentCounter = 0;
    kidCounter = 0;
    vhod = input[index];
    console.log(`${movieName} - ${procentMovie.toFixed(2)}% full.`);
  }
  totalTickets = standardCounterT + studentCounterT + kidCounterT;
  console.log(`Total tickets: ${totalTickets}`);
  let procentStudent = (studentCounterT / totalTickets) * 100;
  let procentStandart = (standardCounterT / totalTickets) * 100;
  let procentKid = (kidCounterT / totalTickets) * 100;
  console.log(`${procentStudent.toFixed(2)}% student tickets.`);
  console.log(`${procentStandart.toFixed(2)}% standard tickets.`);
  console.log(`${procentKid.toFixed(2)}% kids tickets.`);
}
solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
