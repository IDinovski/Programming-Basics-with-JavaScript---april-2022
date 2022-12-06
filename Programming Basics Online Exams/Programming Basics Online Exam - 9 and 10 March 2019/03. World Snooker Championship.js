function solve(input) {
  let etap = input[0];
  let typeTicket = input[1];
  let amountTickets = Number(input[2]);
  let withPhoto = input[3];
  let total = 0;
  let price = 0;
  if (typeTicket == "Standard") {
    switch (etap) {
      case "Quarter":
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
      case "Quarter":
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
      case "Quarter":
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
  price = price * amountTickets;
  if (price < 4000 && withPhoto == "Y") {
    price += amountTickets * 40;
  } else if (price >= 4000) {
    price = 0.75 * price;
  } else if (price > 2500 && price < 4000 && withPhoto == "Y") {
    price = 0.9 * price + amountTickets * 40;
  } else if (price > 2500 && price < 4000 && withPhoto == "N") {
    price = 0.9 * price;
  }

  console.log(price.toFixed(2));
}
solve(["Final", "Premium", "25", "Y"]);
