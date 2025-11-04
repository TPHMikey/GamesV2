// Featured Game
const featuredGame = {
  name: "Flappy Bird",
  thumbnail: "assets/images/flappy.png",
  path: "assets/games/FlappyBird/index.html"
};

const featuredSection = document.getElementById("featuredGame");
featuredSection.innerHTML = `
  <img src="${featuredGame.thumbnail}" alt="${featuredGame.name}">
  <h2>${featuredGame.name}</h2>
  <a href="${featuredGame.path}" target="_blank" class="play-btn">Play Now</a>
`;

// Game List (your actual games)
const games = [
  { name: "Flappy Bird", thumbnail: "assets/images/flappy.png", path: "assets/games/FlappyBird/index.html", category: "puzzle" },
  { name: "2D Minecraft", thumbnail: "assets/images/2DMC.png", path: "assets/games/2D Minecraft/2D Minecraft.html", category: "adventure" },
  { name: "3D Minecraft", thumbnail: "assets/images/PM.png", path: "assets/games/PacMan/index.html", category: "adventure" },
  // Add more games here
];

const gameGrid = document.getElementById("gameGrid");

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
