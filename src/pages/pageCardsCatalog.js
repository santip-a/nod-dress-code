import {
  pageCardDetalis,
  pageAllCards,
  rootPage,
  cardsAll,
  sidebarMenuNodeElem,
  pagesBatton,
  buttonSort,
  iconSort,
  sortSize,
  selectSizeWin,
  sizeSortButtons,
  sizeButton,
  selectedSizes,
  buttonCloseSelectedSize,
  iconCloseSelectedSize,
  messageNoProduct,
  catalog,
} from '../constants/constants';
import { changeBackground, showPage, toogleNodeElem } from '../components/utils/utils';
import { showOnPerson, showOnProduct } from '../components/toggleImageCard/toggleImageCard';
import {
  insertCard,
  insertSideBarMenu,
  insertPagesButton,
  insertSelectedSize
} from '../components/insertNodeElem/insertNodeElem'
import iconSortABC from '../images/icons/sortABC.svg';
import iconSortCBA from '../images/icons/sortCBA.svg';
import { closeModal } from '../components/closeModal/closeModal';
import { removeSizeinArrey } from '../components/selectSize/selectSize';
import { openProductDetails } from '../pages/pageCardDetalis';


let currentCatalog = [] // тукущие открытый каталог
let tempCatalog = []
let currentButtonPage = '1' // текущая кнопка страницы каталога
let currentSidebarElem; // текущая вкладка бокового меню
let typeCatalog  // тип каталога (женщины, мужчины, акссесуары)
let selectSize = []  // массив выбранных размеров



//============ блок замены картинки пр наведении на картинку карточки ============
cardsAll.addEventListener('mouseover', (e) => showOnPerson(e, currentCatalog));
cardsAll.addEventListener('mouseout', (e) => showOnProduct(e, currentCatalog))
// слушатель на карточки товара для открытия страницы этого товара
cardsAll.addEventListener('click', (e) => clickCard(e, tempCatalog));

// слушатель на закрытие модального окна
rootPage.addEventListener('click', (e) => closeModal(e))

pagesBatton.addEventListener('click', e => clickButtonPage(e))

//сортировка ========================================
buttonSort.addEventListener('click', e => getSort(e))


// слушателm и переключатель активного элемента бокового меню
sidebarMenuNodeElem.addEventListener('click', e => {
  if (e.target.classList.contains('sidebar__item')) {
    openCatalog(e.target)
  }
})


// слушатель открытия окна выбора размера
sortSize.addEventListener('click', e => {
  if (selectSize.length > 0) {
    clearSelectedSize()
  }
  clearClolorSelectedSizeinWin();
  toogleNodeElem(selectSizeWin)
});

// слушатель на кнопку поиска размера
sizeButton.addEventListener('click', e => showSelectSize())

// слушатели на кнопки размеров в окне выбора размеров
sizeSortButtons.forEach(elem => elem.addEventListener('click', e => selectSizeForSearch(e.target)))

// слушатель на кнопку удаления выбранных разменов
buttonCloseSelectedSize.addEventListener('click', clearSelectedSize)

// слушатель на закрытия определенного размера из выбранных
iconCloseSelectedSize.addEventListener('click', e => remoceSelectedSize(e.target))


// ======= функция открытия страницы конкретного товара =========
export function openCardDetalis() {
  showPage(pageCardDetalis, pageAllCards, changeBackground(rootPage, 'root__page-product')); // меняем фон страницы
  window.sessionStorage.setItem('page', 'cerdDetalis');
}


function clickCard(e, catalog) {
  const elemClick = e.target 
  // if (!elemClick.classList.contains('card__basket') && !elemClick.classList.contains('cards')) {
  //   const idCard = elemClick.closest('.card').dataset['id']  // id товара
  //   openCardDetalis() // открываем страницу с товаром
  //   openProductDetails(idCard, catalog)
  // }
  // else if (elemClick.classList.contains('card__basket')) {
  //   //openPageBasket(); 
  //   console.log('добавить в корзину')
  // }

  if (!elemClick.classList.contains('cards')) {
    const idCard = elemClick.closest('.card').dataset['id']  // id товара
    openCardDetalis() // открываем страницу с товаром
    openProductDetails(idCard, catalog)
  }
}



function clickButtonPage(e) {
  if (!e.target.classList.contains('pages__item') || e.target.textContent === currentButtonPage) {
    return
  }
  const firstCard = (e.target.textContent - 1) * 20;
  const endCard = currentCatalog.length;
  const arrayCardOnPage = currentCatalog.slice(firstCard, endCard);

  clearListCatalog();

  showCatalogPageByPage(cardsAll, arrayCardOnPage, arrayCardOnPage.length)
  const firstButtonPage = document.querySelectorAll('.pages__item');
  firstButtonPage[Number(currentButtonPage) - 1].classList.remove('pages__item_active');
  firstButtonPage[Number(e.target.textContent) - 1].classList.add('pages__item_active');
  currentButtonPage = e.target.textContent
}

//удаление карточек
function clearListCatalog() {
  const cardForDel = document.querySelectorAll('.card');
  cardForDel.forEach(elem => {
    cardsAll.removeChild(elem)
  })
}

//функция показа каталога по страницам
function showCatalogPageByPage(catalog, dadalist, list) {
  if (list > 20) { list = 20 }
  for (let i = 0; i < list; i++) {
    insertCard(catalog, dadalist[i])
  }
}


// удаление кнопок страниц каталога
export function delButtonPage() {
  const buttonPageForDel = document.querySelectorAll('.pages__item');
  buttonPageForDel.forEach(elem => {
    pagesBatton.removeChild(elem)
  })
  currentButtonPage = '1'
}

// вставляем кнопки страниц
function setButtonPages(quantity) {
  const quantityButton = Math.ceil(quantity / 20);
  if (quantityButton < 2) { return }
  for (let i = 1; i <= quantityButton; i++) {
    insertPagesButton(pagesBatton, i)
  }
  const firstButtonPage = document.querySelectorAll('.pages__item');
  firstButtonPage[0].classList.add('pages__item_active')
}

function openCatalog(e) {
  if (e.textContent === currentSidebarElem.textContent) {
  }
  else {
    e.classList.add('sidebar__item_active');
    currentSidebarElem.classList.remove('sidebar__item_active');
    currentSidebarElem = e;
    getCurrentCatalog(e.dataset.id)
    clearListCatalog();
    delButtonPage();
    showCatalog(cardsAll, currentCatalog.sort((x, y) => x.price - y.price));
    currentCatalog = currentCatalog;
    iconSort.src = iconSortCBA;
    if (!buttonSort.classList.contains('sort__ABC')) { buttonSort.classList.add('sort__ABC') }
  }
}

//функция определения текущего каталога
function getCurrentCatalog(elem) {
  currentCatalog = catalog[typeCatalog][elem];
  tempCatalog = catalog[typeCatalog][elem];
}

// вставили карточки
function showCatalog(catalog, datalist) {
  showCatalogPageByPage(catalog, datalist, datalist.length);
  setButtonPages(datalist.length);
}



// функция выборки товара по размеру
function getSelectedSize(sel) {
  const f = sel
  const b = currentCatalog.filter(function (item) {
    let a = false
    f.forEach(elem => {
      if (item.sizes.includes(elem)) { a = true }
    })
    if (a) { return item }
  });
  tempCatalog = currentCatalog;
  currentCatalog = b
  clearListCatalog();
  delButtonPage();
  showCatalog(cardsAll, b.sort((x, y) => x.price - y.price))
}

//сортировка ========================================
function getSort(e) {
  let sortArrey
  if (!e.currentTarget.classList.contains('sort__ABC')) {
    sortArrey = currentCatalog.slice().sort((x, y) => x.price - y.price);  // по возростанию
    iconSort.src = iconSortCBA;
    e.currentTarget.classList.toggle('sort__ABC');
  }
  else {
    sortArrey = currentCatalog.slice().sort((x, y) => y.price - x.price) // по убыванию
    iconSort.src = iconSortABC;
    e.currentTarget.classList.toggle('sort__ABC');
  }

  currentCatalog = sortArrey
  clearListCatalog();
  delButtonPage();

  showCatalog(cardsAll, currentCatalog);
}

//удаление выбранных размеров
function clearSelectedSize() {
  const selectedSizesList = document.querySelectorAll('.sort__select-size');
  selectedSizesList.forEach(elem => {
    selectedSizes.removeChild(elem)
  });
  buttonCloseSelectedSize.classList.add('display-none');
  selectSize = [];
  clearListCatalog();
  delButtonPage();
  currentCatalog = tempCatalog;
  showCatalog(cardsAll, currentCatalog.sort((x, y) => x.price - y.price))
}

// удаление цвета на выбранных размерах в окне выбора размера
function clearClolorSelectedSizeinWin() {
  sizeSortButtons.forEach(elem =>
    elem.classList.remove('sort__list-item_selected'))
}

// функция показа выбранных размеров
function showSelectSize() {
  currentCatalog = tempCatalog;
  toogleNodeElem(selectSizeWin);
  for (let x = 0; x < selectSize.length; x++) {
    insertSelectedSize(selectedSizes, selectSize[x]);
  }
  toogleNodeElem(buttonCloseSelectedSize);
  getSelectedSize(selectSize)
}

// функция выбора размера
function selectSizeForSearch(elem) {
  if (elem.classList.contains('sort__list-item_selected')) {
    elem.classList.remove('sort__list-item_selected');
    selectSize = removeSizeinArrey(elem.textContent, selectSize);
    if (selectSize.length === 0) {
      sizeButton.classList.add('display-none')
    }
    return
  }
  elem.classList.add('sort__list-item_selected');
  selectSize.push(elem.textContent)
  showButtonSelectSize()
}

// функция при нажатие на кнопку размера 
function showButtonSelectSize() {
  if (!sizeButton.classList.contains('display-none')) { return }
  sizeButton.classList.remove('display-none')
}

//функция на закрытия определенного размера из выбранных
function remoceSelectedSize(e) {
  if (!e.classList.contains('sort__close-icon')) {
    return
  }
  const delElem = e.previousElementSibling.textContent;
  const newSelectSize = selectSize.filter(elem => elem !== delElem);
  selectSize = newSelectSize;
  selectedSizes.removeChild(e.parentElement);
  const f = selectSize
  const b = currentCatalog.filter(function (item) {
    let a = false
    f.forEach(elem => {
      if (item.sizes.includes(elem)) { a = true }
    })
    if (a) { return item }
  });
  clearListCatalog();
  delButtonPage();
  showCatalog(cardsAll, b.sort((x, y) => x.price - y.price))

  if (b.length < 1) {
    messageNoProduct.classList.remove('display-none')
  }

  if (selectSize.length < 1) {
    buttonCloseSelectedSize.classList.add('display-none');
    currentCatalog = tempCatalog;
    messageNoProduct.classList.add('display-none')
    showCatalog(cardsAll, currentCatalog.sort((x, y) => x.price - y.price))
  }
}





//===================================================================================================================
// =======================   Главная функция  ========================================================================
//====================================================================================================================
export function pageCatalog(sidebarMenu, type, firstCatalog) {

  typeCatalog = type // тип каталога (женщины, мужчины, акссесуары)
  currentCatalog = catalog[typeCatalog][firstCatalog]
  tempCatalog = currentCatalog;

  clearListCatalog() // удалили все карточки
  delButtonPage()  // обнулили конпки страниц каталога

  // вставили боковое меню
  sidebarMenu.forEach(elem => {
    insertSideBarMenu(sidebarMenuNodeElem, elem);
  })


  // находим разделы бокового меню и делаем первый раздел активным
  const sidebarElemets = document.querySelectorAll('.sidebar__item');
  sidebarElemets[0].classList.add('sidebar__item_active');
  currentSidebarElem = sidebarElemets[0];


  showCatalog(cardsAll, currentCatalog.sort((x, y) => x.price - y.price))

  

}
