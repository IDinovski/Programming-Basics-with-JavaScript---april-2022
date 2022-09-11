function solve(input) {
  let cityName = input[0];
  let typeOfPacket = input[1];
  let vip = input[2];
  let days = Number(input[3]);
  let pricePerDay = 0;
  let totalPrice = 0;
  switch (cityName) {
    case "Bansko":
      if (typeOfPacket === "withEquipment") {
        pricePerDay = 100;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.9;
        }
      }
      if (typeOfPacket === "noEquipment") {
        pricePerDay = 80;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.95;
        }
      }
      break;
    case "Borovets":
      if (typeOfPacket === "withEquipment") {
        pricePerDay = 100;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.9;
        }
      }
      if (typeOfPacket === "noEquipment") {
        pricePerDay = 80;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.95;
        }
      }
      break;
    case "Varna":
      if (typeOfPacket === "withBreakfast") {
        pricePerDay = 130;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.88;
        }
      }
      if (typeOfPacket === "noBreakfast") {
        pricePerDay = 100;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.93;
        }
      }
      break;
    case "Burgas":
      if (typeOfPacket === "withBreakfast") {
        pricePerDay = 130;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.88;
        }
      }
      if (typeOfPacket === "noBreakfast") {
        pricePerDay = 100;
        if (vip === "yes") {
          pricePerDay = pricePerDay * 0.93;
        }
      }
      break;
  }
  totalPrice = pricePerDay * days;
  if (totalPrice === 0) {
    console.log("Invalid input!");
  } else if (days < 1) {
    console.log("Days must be positive number!");
  } else if (
    typeOfPacket != "withBreakfast" &&
    typeOfPacket != "noBreakfast" &&
    typeOfPacket != "noEquipment" &&
    typeOfPacket != "withEquipment"
  ) {
    console.log("Invalid input!");
  } else if (
    cityName != "Bansko" &&
    cityName != "Borovets" &&
    cityName != "Varna" &&
    cityName != "Burgas"
  ) {
    console.log("Invalid input!");
  } else if (vip != "yes" && vip != "no") {
    console.log("Invalid input!");
  } else if (days > 7) {
    days -= 1;
  } else {
    totalPrice = pricePerDay * days;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
  }
}

solve(["Bansko", "noBreakfast", "yes", "1"]);
