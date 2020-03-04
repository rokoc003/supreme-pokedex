import './app.scss';
import { createElement, appendContent } from './lib/dom';
import { createTitle } from './components/title';
import { createSearchInput } from './components/search';
import { createPokemons } from './components/pokemons';
import Logo from './images/pokemon.png';

const allPokemons = ['Pikachu', 'Pichu', 'Glumanda', 'Goldini'];

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main', { className: 'main' });
  const title = createTitle('Supreme Pokedex');
  const searchInput = createSearchInput();
  const logo = createElement('img', {
    className: 'logo',
    src: Logo
  });
  let pokemons = createPokemons(allPokemons);

  appendContent(header, [logo, title]);
  appendContent(main, [searchInput, pokemons]);

  searchInput.addEventListener('input', event => {
    main.removeChild(pokemons);

    const searchValue = event.target.value.toUpperCase();
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.toUpperCase().startsWith(searchValue);
    });
    pokemons = createPokemons(filteredPokemons);
    appendContent(main, pokemons);
  });

  return [header, main];
}
