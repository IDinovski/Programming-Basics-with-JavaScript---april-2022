function solve(input) {
  let movieName = input[0];
  let other = input[1];
  let amountOfTickets = input[2];
  let ticketPrice = 0;
  switch (movieName) {
    case "John Wick":
      switch (other) {
        case "Drink":
          ticketPrice = 12;
          break;
        case "Popcorn":
          ticketPrice = 15;
          break;
        case "Menu":
          ticketPrice = 19;
          break;
      }
      break;
    case "Star Wars":
      switch (other) {
        case "Drink":
          ticketPrice = 18;
          break;
        case "Popcorn":
          ticketPrice = 25;
          break;
        case "Menu":
          ticketPrice = 30;
          break;
      }
      break;
    case "Jumanji":
      switch (other) {
        case "Drink":
          ticketPrice = 9;
          break;
        case "Popcorn":
          ticketPrice = 11;
          break;
        case "Menu":
          ticketPrice = 14;
          break;
      }
      break;
  }
  if (movieName == "Star Wars" && amountOfTickets >= 4) {
    ticketPrice = 0.7 * ticketPrice;
  } else if (movieName == "Jumanji" && amountOfTickets == 2) {
    ticketPrice = 0.85 * ticketPrice;
  }
  let total = amountOfTickets * ticketPrice;
  console.log(`Your bill is ${total.toFixed(2)} leva.`);
}
solve(["John Wick", "Drink", 6]);
