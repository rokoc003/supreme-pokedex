import './pokemons.scss';
import { createElement } from '../lib/dom';

export function createPokemons(props) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  props.items.forEach((item, pokemonId) => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    const pokemonImage = createElement('img', {
      className: 'pokemonImage',
      src: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId + 1}.png`
    });
    element.addEventListener('click', () => {
      props.onSearchResultClick(item);
    });
    container.appendChild(element);
    element.appendChild(pokemonImage);
  });
  return container;
}
