function solve(input) {
  let movieName = input[0];
  let amountOfDays = input[1];
  let amountOfTickets = input[2];
  let pricePerTicket = input[3];
  let procentForCinema = input[4];
  let income = ((amountOfDays*amountOfTickets)*pricePerTicket)
  income -=(procentForCinema/100)*income

  console.log(
    `The profit from the movie ${movieName} is ${income.toFixed(2)} lv.`
  );
}
solve(["The Programmer", "20", "500", "7.50", "7", ""]);
