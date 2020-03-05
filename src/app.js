import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './images/pokemon.png';
import { createFavList } from './components/favorites';

const allPokemons = [
  'Pikachu',
  'Pichu',
  'Glumanda',
  'Bisasam',
  'Schiggy',
  'Goldini',
  'Raupy'
];

function filterPokemons(searchValue) {
  const upperCaseSearchValue = searchValue.toUpperCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toUpperCase().startsWith(upperCaseSearchValue);
  });
  return filteredPokemons;
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
  const favorites = createFavList({
    items: ['Glumanda', 'Pichu']
  });

  let pokemons = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchInput.value);
    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  }
  setSearchResults();

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, pokemons]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);
    setSearchResults();

    const searchValue = event.target.value;
    sessionStorage.setItem('searchValue', searchValue);
  });
  return [header, main, favorites];
}
