import './pokemons.scss';
import { createElement } from '../lib/dom';

export function createPokemons(props) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  props.items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    //let index = 0;
    const pokemonImage = createElement('img', {
      className: 'pokemonImage',
      //pokeNumber: index++,
      src: `https://pokeres.bastionbot.org/images/pokemon/2.png`
      //src: `https://pokeres.bastionbot.org/images/pokemon/${pokeNumber}.png`
    });

    element.addEventListener('click', () => {
      props.onSearchResultClick(item);
    });
    container.appendChild(element);
    element.appendChild(pokemonImage);
  });
  return container;
}
