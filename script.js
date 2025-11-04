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
  {
    name: "Geometry Dash",
    thumbnail: "assets/images/GM.png",
    path: "games/Geometry%20Dash/index.html",
    category: "adventure"
  },
  {
    name: "Five Nights At Freddys 1",
    thumbnail: "assets/images/FNAF1.png",
    url: "https://mikeyboy6734.github.io/FNAF1-Web",
    category: "adventure"
  },
];

const container = document.getElementById('gameGrid'); // matches your HTML

// Render all games
function renderGames(gamesToRender) {
  container.innerHTML = ''; // clear existing cards
  gamesToRender.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const img = document.createElement('img');
    img.src = game.thumbnail;
    img.alt = game.name;

    const title = document.createElement('h3');
    title.textContent = game.name;

    const link = document.createElement('a');
    link.textContent = "Play";
    link.href = game.path || game.url; // handle both path and url
    link.target = "_blank";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Initial render
renderGames(games);

// Optional: Search and category filtering
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter(game => game.name.toLowerCase().includes(query));
  renderGames(filtered);
});

const categoryButtons = document.querySelectorAll('#categories button');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    if (category === 'all') {
      renderGames(games);
    } else {
      renderGames(games.filter(game => game.category.toLowerCase() === category.toLowerCase()));
    }
  });
});
