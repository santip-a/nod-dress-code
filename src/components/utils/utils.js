import {openCardDetalis} from '../../pages/pageCardsCatalog';
import {pageAllCards, pageCardDetalis, rootPage} from '../../constants/constants';

// функция заменя фона на страницы
export function changeBackground(str, classParam) {
  str.classList.toggle(classParam);
}

// функция показа страниц
export function showPage(strShow, strHidden, callbeck = undefined) {
  strHidden.classList.add('display-none');
  strShow.classList.remove('display-none');  
  window.scrollTo(0, 0)
  if (callbeck) {
    callbeck()
  }
}


//вернуться на предыдущую страницу
export function backPage() {

  // if (name === 'cardDetalis') {
  //   openCardDetalis()
  // }
  // if (name === 'pageCatalog') {
    showPage(pageAllCards, pageCardDetalis, changeBackground(rootPage, 'root__page-product'));
  // }
}

// функция открытия закрытия елемента
export function toogleNodeElem(nodeElem) {
  nodeElem.classList.toggle('display-none');
}


// функция возврата количества товара в корзине
export function getInBasket() {
  const userJSON = sessionStorage.getItem('inBasket')

  if (userJSON === null) {
    return undefined
  }

  // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого
  try {
    return JSON.parse(userJSON)
  } catch (e) {
    sessionStorage.removeItem('inBasket')
    return undefined
  }
}


// функция добавления товара в корзину
export function addProuctInBasket(selectProduct, selectSaze) {
let inBasket = getInBasket()
if (!inBasket) {
  inBasket = []
}
inBasket.push({
  product: selectProduct,
  size: selectSaze,
  quantity: 1
})

sessionStorage.setItem('inBasket', JSON.stringify(inBasket))
}

// функция замены массива товара
export function changeElemInBascet(data) {
  sessionStorage.setItem('inBasket', JSON.stringify(data))
}

// функция добавления общий суммы из корзины в хранилще
export function setTotalPrice(data) {
  sessionStorage.setItem('totalPrice', data)
}

// функция получения общий суммы корзины
export function getTotalPrice() {
  const price = sessionStorage.getItem('totalPrice')
  if (!price) {return 0} 
  else {return price}
   
}
