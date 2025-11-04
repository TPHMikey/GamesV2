// Your games array
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
    category: "minecraft"
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
    category: "action"
  },
   {
    name: "Ultimate Custom Night",
    thumbnail: "assets/images/UCN.png",
    url: "https://mikeyboy6734.github.io/UCN",
    category: "action"
  },
    {
    name: "Evowars.io",
    thumbnail: "assets/images/Evo.png",
    url: "https://evowars.io/?v=2.17.48",
    category: "action"
  },
   {
    name: "dogeub",
    thumbnail: "assets/images/DUB.png",
    url: "https://sam.fpr.net",
    category: "unblockers"
  },
    {
    name: "Super Mario 64",
    thumbnail: "assets/images/SM64.png",
    url: "https://mikeyboy6734.github.io/SM64JS/",
    category: "platformer"
  },

];

// Get the container from your HTML
const container = document.getElementById('gameGrid');

// Function to render games
function renderGames(gamesToRender) {
  container.innerHTML = ''; // clear old content

  if (gamesToRender.length === 0) {
    const noGames = document.createElement('p');
    noGames.textContent = "No games found.";
    noGames.style.color = "#fff";
    noGames.style.textAlign = "center";
    container.appendChild(noGames);
    return;
  }

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
    link.href = game.path || game.url; // Use local path or external URL
    link.target = "_blank";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Initial render
renderGames(games);

// --- Search functionality ---
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = games.filter(game => game.name.toLowerCase().includes(query));
  renderGames(filtered);
});

// --- Category filtering ---
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
