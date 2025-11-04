const games = [
  { name: "Flappy Bird", thumbnail: "assets/images/flappy.png", path: "assets/games/FlappyBird/index.html" },
  { name: "2D Minecraft", thumbnail: "assets/images/2DMC.png", path: "assets/games/2DMC/index.html" },
  { name: "3D Minecraft", thumbnail: "assets/images/3DMC.png", path: "assets/games/3DMC/index.html" },
  // add more games here
];

const gameGrid = document.getElementById("gameGrid");

function displayGames(list) {
  gameGrid.innerHTML = "";
  list.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.name}">
      <h3>${game.name}</h3>
      <a href="${game.path}" target="_blank" class="play-btn">Play</a>
    `;
    gameGrid.appendChild(card);
  });
}

// Initial display
displayGames(games);

// Search functionality
document.getElementById("search").addEventListener("input", e => {
  const filtered = games.filter(game => game.name.toLowerCase().includes(e.target.value.toLowerCase()));
  displayGames(filtered);
});
