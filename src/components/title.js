import './title.scss';
import { createElement } from '../lib/dom';

export function createTitle(heading) {
  const titleAttributes = {
    innerText: heading,
    className: 'title'
  };
  const element = createElement('h1', titleAttributes);

  return element;
}
