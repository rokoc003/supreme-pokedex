import './title.scss';
import { createElement } from '../lib/dom';

export function title(heading) {
  const titleAttributes = {
    innerText: heading,
    className: 'title'
  };
  const element = createElement('h1', titleAttributes);

  return element;
}
