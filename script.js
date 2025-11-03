const games = [
  {
    name: "Flappy Bird",
    thumbnail: "assets/images/flappy.png",
    path: "games/flappy/index.html"
  },
  {
    name: "2D Minecraft",
    thumbnail: "assets/images/2DMC.png",
    path: "games/2D Minecraft/2D Minecraft.html" // points to N64Wasm page
  }
   {
    name: "3D Minecraft",
    thumbnail: "assets/images/3DMC.png",
    path: "games/Eaglercraft/eaglercraft.1.5.2.html" // points to N64Wasm page
  }
];

const grid = document.getElementById('game-grid');

games.forEach(game => {
  const card = document.createElement('a');
  card.href = game.path;          // link to game page
  card.target = "_blank";         // open in new tab
  card.className = 'game-card';
  card.innerHTML = `
    <img src="${game.thumbnail}" alt="${game.name}">
    <h3>${game.name}</h3>
  `;
  grid.appendChild(card);
});
