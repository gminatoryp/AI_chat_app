import Player from "./Player.js";

const Scoreboard = (props, parentNode) => {
  const container = document.createElement("div");

  const heading = document.createElement("h2");
  heading.innerText = props.headingText;
  container.appendChild(heading);

  for (let i = 0; i < props.rankedPlayersFromDb.length; i++) {
    Player({ player: props.rankedPlayersFromDb[i], rank: i + 1 }, container);

    container.appendChild(document.createElement("hr"));
  }

  parentNode.appendChild(container);
};

export default Scoreboard;
