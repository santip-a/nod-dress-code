import {
  promtLogoHeader,
  headerMenuLinks,
  imagesMenuElems,
  sidebarMenuNodeElem,
  pageCardDetalis,
  pageAllCards,
  rootPage,
  basket,
  buttonHeaderBasket,
  headerTotalPrice,
  titleHeader
} from '../../constants/constants';
import { insertImagesInMenu } from '../../components/imagesMenu/imagesMenu';
import { pageCatalog } from '../../pages/pageCardsCatalog';
import { sidebarMenuList } from '../../components/data/sidebar';
import {changeBackground, getTotalPrice} from '../../components/utils/utils';
import {openPageBasket} from '../../pages/basket'


//================ подсказака на логотипе ======================================
const xy = {
  x: 0,
  y: 0
}

export const saveMouseMove = (e) => {
  xy.x = e.clientX + 15;
  xy.y = e.clientY + 20;
  setTimeout(() => {
    if (e.clientX + 15 === xy.x && e.clientY + 20 === xy.y) {
      promtLogoHeader.classList.remove('header__logo-prompt_hiden');
      promtLogoHeader.setAttribute('style', `
        left: ${e.clientX + 15}px;
        top: ${e.clientY + 20}px;
      `)
    }
  }, 500)
}

export const hidePromtLogoHeader = () => {
  promtLogoHeader.classList.add('header__logo-prompt_hiden');
  xy.x = 0;
  xy.y = 0;
}


// ====================================================================================

// получения цены из хранилища
headerTotalPrice.textContent = getTotalPrice()


// функция выдилить пункт пеню в заголовке
let selectedItemMenu = headerMenuLinks[0].nextElementSibling

export function selectItemMenu(e) {
  const elemMenuHesder = e.nextElementSibling;
  selectedItemMenu.classList.add('display-none')
  elemMenuHesder.classList.remove('display-none');
  selectedItemMenu = elemMenuHesder;
  openPage(e.textContent)
}
//==========================================

// функция открытия страницы
export function openPage(e) {
  let pageName = '';
  let sidebar = [];
  let nameCatalog = '';
  let firsCatalog = '';
  let headerTitle = ''
  switch (e) {
    case 'Женщины':
      pageName = imagesMenuElems.women;
      sidebar = sidebarMenuList.women;
      nameCatalog = 'women';
      firsCatalog = 'dresses';
      headerTitle = 'Женская одежда и мода';
      break
    case 'Мужчины':
      pageName = imagesMenuElems.men;
      sidebar = sidebarMenuList.men;
      nameCatalog = 'men';
      firsCatalog = 'shirts'
      headerTitle = 'Мужская одежда – альтернатива и уникальность';
      break
    case 'Аксессуары':
      pageName = imagesMenuElems.accessories;
      sidebar = sidebarMenuList.accessories;
      nameCatalog = 'accessories';
      firsCatalog = 'belts'
      headerTitle = 'Аксессуары для уникального образа и жизни'
      break
  }


  // загрузка фоток в меню 
  insertImagesInMenu(pageName)
  // очистка сайдбара
  clearSiseBar()
  // установка заголовка страница
  setTitlePage(headerTitle)
  //открыть раздел для женщин
  pageCatalog(sidebar, nameCatalog, firsCatalog);
  getSelectPage()
}


// функция очистки сайдбара
function clearSiseBar() {
  const sideBarItems = document.querySelectorAll('.sidebar__item');
  sideBarItems.forEach(elem => {
    sidebarMenuNodeElem.removeChild(elem)
  }); 
}



// функция закрытия страниц, не соответствующих выбранному разделу
function getSelectPage() {
  if (!pageCardDetalis.classList.contains('display-none')) {
    pageCardDetalis.classList.add('display-none');
    pageAllCards.classList.remove('display-none');
    changeBackground(rootPage, 'root__page-product')
  }
  else if (!basket.classList.contains('display-none')) {
    basket.classList.add('display-none');
    pageAllCards.classList.remove('display-none');
  }
}

// слушатель на корзину в хеадере
buttonHeaderBasket.addEventListener('click', e => {
  if (headerTotalPrice.textContent === '0') {return}
  openPageBasket()
})


// функция меняет заголовок старицы
function setTitlePage(headerTitle) {
  titleHeader.textContent = headerTitle
}