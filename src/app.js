import './app.scss';
import { createElement } from './lib/dom';
import { title } from './components/title';
import { search } from './components/search';

export function app() {
  const header = createElement('header', {});
  const main = createElement('main', {});
  const titleElement = title('Supreme Pokedex');
  const searchElement = search('');

  header.appendChild(titleElement);
  main.appendChild(searchElement);

  return [header, main];
}
