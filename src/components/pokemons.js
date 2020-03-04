import './pokemons.scss';
import { createElement, appendContent } from '../lib/dom';

export function createPokemons(items) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      const favorites = JSON.parse(localStorage.getItem('favories')) || [];
      favorites.push(item);
      const favoritesJSON = JSON.stringify(favorites);
      localStorage.setItem('favorites', favoritesJSON);
    });
    appendContent(container, element);
  });
  return container;
}
