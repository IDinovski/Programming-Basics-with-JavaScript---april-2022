function solve(input) {
  let name = input[0];
  let type = input[1];
  let amountTickets = input[2];
  let pricePerTicket = 0;
  switch (name) {
    case "A Star Is Born":
      switch (type) {
        case "normal":
          pricePerTicket = 7.5;
          break;
        case "luxury":
          pricePerTicket = 10.5;
          break;
        case "ultra luxury":
          pricePerTicket = 13.5;
          break;
      }
      break;
    case "Bohemian Rhapsody":
      switch (type) {
        case "normal":
          pricePerTicket = 7.35;
          break;
        case "luxury":
          pricePerTicket = 9.45;
          break;
        case "ultra luxury":
          pricePerTicket = 12.75;
          break;
      }
      break;
    case "Green Book":
      switch (type) {
        case "normal":
          pricePerTicket = 8.15;
          break;
        case "luxury":
          pricePerTicket = 10.25;
          break;
        case "ultra luxury":
          pricePerTicket = 13.25;
          break;
      }
      break;
    case "The Favourite":
      switch (type) {
        case "normal":
          pricePerTicket = 8.75;
          break;
        case "luxury":
          pricePerTicket = 11.55;
          break;
        case "ultra luxury":
          pricePerTicket = 13.95;
          break;
      }
      break;
  }
  let total = pricePerTicket * amountTickets;
  console.log(`${name} -> ${total.toFixed(2)} lv.`);
}
solve(["A Star Is Born", "luxury", "42"]);
