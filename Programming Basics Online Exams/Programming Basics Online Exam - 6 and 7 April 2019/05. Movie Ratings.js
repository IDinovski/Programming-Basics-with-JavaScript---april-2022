function solve(input) {
  let amountOfMovies = Number(input[0]);
  let index = 1;
  let movieName = "";
  let rating = 0;
  let highestMovie = "";
  let highestRating = 0;
  let lowestMovie = "";
  let lowestRating = 11;
  let sumRating = 0
  for (let i = 1; i <= amountOfMovies; i++) {
    movieName = String(input[index]);
    index++;
    rating = Number(input[index]);
    index++;
    sumRating+=rating
    if (rating < lowestRating) {
      lowestRating = rating;
      lowestMovie = movieName;
    }
    if (rating > highestRating) {
      highestMovie = movieName;
      highestRating = rating;
    }
  }
  console.log(`${highestMovie} is with highest rating: ${highestRating.toFixed(1)}`);
  console.log(`${lowestMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
  console.log(`Average rating: ${(sumRating/amountOfMovies).toFixed(1)}`);
}
solve([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
