function solve(input) {
  let movieName = input[0];
  let amountOfSeasons = input[1];
  let amountOfEpisodes = input[2];
  let minutesPerEpisode = input[3];

  let totalMinutes = minutesPerEpisode * 1.2;
  totalMinutes =
    totalMinutes * amountOfEpisodes * amountOfSeasons + 10 * amountOfSeasons;
  console.log(
    `Total time needed to watch the ${movieName} series is ${Math.ceil(
      totalMinutes
    )} minutes.`
  );
}
solve("Lucifer", 3, 18, 55);
