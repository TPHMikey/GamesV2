// Game List
const games = [
  {
    name: "Flappy Bird",
    thumbnail: "assets/images/flappy.png",
    path: "games/flappy/index.html",
    category: "puzzle"
  },
  {
    name: "2D Minecraft",
    thumbnail: "assets/images/2DMC.png",
    path: "games/2D%20Minecraft/2D%20Minecraft.html",
    category: "adventure"
  },
  {
    name: "PacMan",
    thumbnail: "assets/images/PM.png",
    path: "games/PacMan/index.html",
    category: "adventure"
  },
  // ADD NEW GAMES HERE
];

const gameGrid = document.getElementById("gameGrid");

// Display games in grid
function displayGames(list) {
  gameGrid.innerHTML = "";
  list.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.dataset.category = game.category;
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

// Category Filter
const categoryButtons = document.querySelectorAll("#categories button");
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    if(category === "all") {
      displayGames(games);
    } else {
      displayGames(games.filter(g => g.category === category));
    }
  });
});
