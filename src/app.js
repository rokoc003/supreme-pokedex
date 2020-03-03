import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';
import { pokemons } from './components/pokemons';

const allPokemons = ['Pikachu', 'Pichu', 'Glumanda', 'Goldini'];

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main', { className: 'main' });
  const titleElement = title('Supreme Pokedex');
  const searchElement = search();

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  const searchResults = createElement('div', {});
  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    searchResults.innerHTML = '';

    const searchValue = event.target.value;
    const filteredPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });
    const pokemonsElement = pokemons(filteredPokemons);
    searchResults.appendChild(pokemonsElement);
  });

  return [header, main];
}
