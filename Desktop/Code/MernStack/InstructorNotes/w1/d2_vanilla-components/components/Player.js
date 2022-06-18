const Player = (props, parentNode) => {
  const container = document.createElement("div");

  const rankingHeading = document.createElement("h2");
  document.innerText = `Rank: ${props.rank}`;
  container.appendChild(rankingHeading);

  const fullNameHeading = document.createElement("h3");
  fullNameHeading.innerText = `Name: ${props.player.fullName()}`;
  container.appendChild(fullNameHeading);

  const scoreHeading = document.createElement("h4");
  scoreHeading.innerText = `Score: ${props.player.score}`;
  container.appendChild(scoreHeading);

  parentNode.appendChild(container);
};

export default Player;
