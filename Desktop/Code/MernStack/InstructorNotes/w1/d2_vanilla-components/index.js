import Counter from "./components/Counter.js";
import Player from "./components/Player.js";
import Scoreboard from "./components/Scoreboard.js";
import PlayerModel from "./models/PlayerModel.js";

new Counter(
  { headingText: "Code bug", buttonText: "Found a bug" },
  document.getElementById("root")
);

new Counter(
  { headingText: "Huh?", buttonText: "Did you do a huh?", count: 5 },
  document.getElementById("root")
);

// Pretend this data was retrieved from a DB ordered by high score.
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Simon", "van Tulder", 800),
  new PlayerModel("Ciara", "Giron", 700),
  new PlayerModel("Matthew", "Paxton", 600),
];

Scoreboard(
  {
    headingText: "Cool peeps",
    rankedPlayersFromDb: rankedPlayersFromDb,
  },
  document.getElementById("players")
);
