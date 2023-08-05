import './styles/index.css';
import {
  backPage
} from './components/utils/utils';
import {
  logoHeader,
  battonBackPage,
  headerMenuLinks,
  rootPage
} from './constants/constants';
import { hidePromtLogoHeader, saveMouseMove, selectItemMenu, openPage } from './components/header/header';


// слушатели на лого с подсказкой
logoHeader.addEventListener('mousemove', e => saveMouseMove(e));
logoHeader.addEventListener('mouseout', hidePromtLogoHeader)


// слушатель на кнопку "назад" на страницы отдельного товара
battonBackPage.addEventListener('click', (e) => {
  backPage('pageCatalog');
  window.sessionStorage.setItem('page', 'cardAll');
})

// слушатель на разделы меню в заголовке
headerMenuLinks.forEach(elem => elem.addEventListener('click', (e) => {
  selectItemMenu(e.target);
  rootPage.classList.remove('root__page-product')
}))



openPage('Женщины')

window.sessionStorage.setItem('page', 'cardAll');

