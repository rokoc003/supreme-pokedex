import './index.scss';
import { title } from './components/title';
import { search } from './components/search';

document.body.appendChild(title('Pokedex'));
document.body.appendChild(search());
