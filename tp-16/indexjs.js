const API_URL = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
const limit = 20; 
const maxInitial = 151;

const container = document.getElementById('pokemon-container');
const loadMoreBtn = document.getElementById('load-more');
const spinner = document.getElementById('spinner');

async function fetchPokemons(offset, limit) {
  toggleSpinner(true);
  try {
    const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    for (const pokemon of data.results) {
      const pokemonData = await fetch(pokemon.url).then(res => res.json());
      renderPokemonCard(pokemonData);
    }
  } catch (error) {
    console.error('Error cargando Pokémon:', error);
  } finally {
    toggleSpinner(false);
  }
}

function renderPokemonCard(pokemon) {
  const types = pokemon.types.map(t => `<span class="badge bg-${getTypeColor(t.type.name)} me-1">${t.type.name}</span>`).join('');

  const card = document.createElement('div');
  card.className = 'col';

  card.innerHTML = `
    <div class="card h-100">
      <img src="${pokemon.sprites.front_default}" class="card-img-top pokemon-img" alt="${pokemon.name}">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p>${types}</p>
        <button class="btn btn-sm btn-outline-primary" onclick="showPokemonDetails(${pokemon.id})">Ver más</button>
      </div>
    </div>
  `;

  container.appendChild(card);
}

function getTypeColor(type) {
  const colors = {
    fire: 'danger',
    water: 'primary',
    grass: 'success',
    electric: 'warning',
    bug: 'success',
    normal: 'secondary',
    poison: 'purple',
    ground: 'brown',
    flying: 'info',
    psychic: 'pink',
    rock: 'dark',
    ghost: 'dark',
    dragon: 'indigo',
    ice: 'info',
    fighting: 'danger',
    dark: 'dark',
    steel: 'secondary',
    fairy: 'pink'
  };
  return colors[type] || 'secondary';
}

async function showPokemonDetails(id) {
  toggleSpinner(true);
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const pokemon = await response.json();

    const types = pokemon.types.map(t => t.type.name).join(', ');
    const abilities = pokemon.abilities.slice(0, 1).map(a => a.ability.name).join(', ');
    const moves = pokemon.moves.slice(0, 4).map(m => m.move.name).join(', ');

    document.getElementById('modal-content').innerHTML = `
      <div class="text-center">
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" class="img-fluid mb-3" style="max-height:200px;" alt="${pokemon.name}">
        <h4>${pokemon.name}</h4>
        <p><strong>Tipo:</strong> ${types}</p>
        <p><strong>Habilidad:</strong> ${abilities}</p>
        <p><strong>Movimientos:</strong> ${moves}</p>
      </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('pokemonModal'));
    modal.show();
  } catch (error) {
    console.error('Error cargando detalles del Pokémon:', error);
  } finally {
    toggleSpinner(false);
  }
}

function toggleSpinner(show) {
  spinner.classList.toggle('d-none', !show);
}

// Inicializar
fetchPokemons(offset, limit);

loadMoreBtn.addEventListener('click', () => {
  offset += limit;
  fetchPokemons(offset, limit);
});
