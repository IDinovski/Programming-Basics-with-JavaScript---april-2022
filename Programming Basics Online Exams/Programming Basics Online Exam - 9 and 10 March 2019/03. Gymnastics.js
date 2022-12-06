function solve(input) {
  let country = input[0];
  let type = input[1];
  let result = 0;
  if (country == "Russia") {
    switch (type) {
      case "ribbon":
        result = 9.1 + 9.4;
        break;
      case "hoop":
        result = 9.3 + 9.8;
        break;
      case "rope":
        result = 9.6 + 9;
        break;
    }
  } else if (country == "Bulgaria") {
    switch (type) {
      case "ribbon":
        result = 9.6 + 9.4;
        break;
      case "hoop":
        result = 9.55 + 9.75;
        break;
      case "rope":
        result = 9.5 + 9.4;
        break;
    }
  } else if (country == "Italy") {
    switch (type) {
      case "ribbon":
        result = 9.2 + 9.5;
        break;
      case "hoop":
        result = 9.45 + 9.35;
        break;
      case "rope":
        result = 9.7 + 9.15;
        break;
    }
  }

  let diff = Math.abs(20 - result);
  let procent = (diff / 20) * 100;
  console.log(`The team of ${country} get ${result.toFixed(3)} on ${type}.`);
  console.log(`${procent.toFixed(2)}%`);
}
solve(["Bulgaria", "ribbon"]);
