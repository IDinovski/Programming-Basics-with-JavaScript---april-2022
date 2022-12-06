function solve(input) {
  let etap = input[0];
  let typeTicket = input[1];
  let amountTickets = Number(input[2]);
  let withPhoto = input[3];
  let total = 0;
  let price = 0;
  if (typeTicket == "Standard") {
    switch (etap) {
      case "Quarter final":
        price = 55.5;
        break;
      case "Semi final":
        price = 75.88;
        break;
      case "Final":
        price = 110.1;
        break;
    }
  } else if (typeTicket == "Premium") {
    switch (etap) {
      case "Quarter final":
        price = 105.2;
        break;
      case "Semi final":
        price = 125.22;
        break;
      case "Final":
        price = 160.66;
        break;
    }
  } else if (typeTicket == "VIP") {
    switch (etap) {
      case "Quarter final":
        price = 118.9;
        break;
      case "Semi final":
        price = 300.4;
        break;
      case "Final":
        price = 400;
        break;
    }
  }
  total = price * amountTickets;
  if (total > 2500 && total <= 4000) {
    total = 0.9 * total;
  } else if (total > 4000) {
    total = 0.75 * total;
  }
  if (withPhoto == "Y" && price * amountTickets <= 4000) {
    total += amountTickets * 40;
  }

  console.log(total.toFixed(2));
}
solve(["Quarter final", "Standard", "11", "N"]);
