import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './images/pokemon.png';
import { createFavList } from './components/favorites';
import { filterPokemons } from './lib/pokemons';

function refreshLocalStorage(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(item)) {
    favorites.push(item);
  } else {
    const itemIndex = favorites.indexOf(item);
    favorites.splice(itemIndex, 1);
  }
  if (favorites.length > 4) {
    favorites = favorites.slice(1);
  }
  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites', favoritesJSON);
}

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main', { className: 'main' });
  const title = createTitle('Supreme Pokedex');
  const searchInput = createSearchInput(sessionStorage.getItem('searchValue'));
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });
  const favoritesContainer = createElement('div');
  let favorites = createFavList({
    items: JSON.parse(localStorage.getItem('favorites')) || []
  });
  appendContent(favoritesContainer, favorites);

  function handleSearchResultClick(item) {
    refreshLocalStorage(item);
    favoritesContainer.removeChild(favorites);
    favorites = createFavList({
      items: JSON.parse(localStorage.getItem('favorites')) || []
    });
    appendContent(favoritesContainer, favorites);
  }

  let pokemons = null;
  async function setSearchResults() {
    const filteredPokemons = await filterPokemons(searchInput.value);
    pokemons = createPokemons({
      items: filteredPokemons,
      onSearchResultClick: handleSearchResultClick
    });
    appendContent(main, pokemons);
  }
  setSearchResults();

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });
  return [header, main, favoritesContainer];
}
