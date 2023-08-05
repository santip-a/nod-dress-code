import {
  basket,
  pageAllCards,
  pageCardDetalis,
  rootPage,
  buttonBasketClose,
  basketList,
  headerTotalPrice,
  basketPrice,
  basketDeliverySelect,
  basketDeliveryPrice,
  basketFullPrice,
  formOrder,
  buttonOrder,
  orderSection,
} from '../constants/constants';
import { getInBasket, changeElemInBascet, setTotalPrice } from '../components/utils/utils';
import { insertInBasketProduct } from '../components/insertNodeElem/insertNodeElem';

let dataBasket;
let productNode;
let productItem

// открыть страницу с корзиной
export function openPageBasket() {
  dataBasket = getInBasket()
  if (!dataBasket) {
    return
  }
  getTotalPrice(dataBasket)
  productNode = document.querySelectorAll('.basket__item');
  clearBasket(productNode)
  if (!pageAllCards.classList.contains('display-none')) {
    pageAllCards.classList.add('display-none');
  }

  if (!pageCardDetalis.classList.contains('display-none')) {
    pageCardDetalis.classList.add('display-none');
    rootPage.classList.add('root__page-product');
    // changeBackground(rootPage, 'root__page-product');
  }

  rootPage.classList.add('root__page-product');
  basket.classList.remove('display-none');

  insertProductsInBasket(dataBasket);
  productItem = basketList.querySelectorAll('.basket__item');
}

// слушатель на закрытие корзины
buttonBasketClose.addEventListener('click', e => closeBasket());

// слушатель на блок с товаром в корзине
basketList.addEventListener('click', e => addQuantity(e.target));

// слушатель на выбор доставки
basketDeliverySelect.addEventListener('change', e => addDelivery(e.target.value))

// слушатель на форум
formOrder.addEventListener('submit', e => {
  e.preventDefault();  
  openOrderPopup();
})

// слушатель на закрытия окна с ордером
buttonOrder.addEventListener('click', e => closeOrederPopup());

// слушатель на кнопку возврата в магазин



function closeBasket() {
  const page = window.sessionStorage.getItem('page');
  basket.classList.add('display-none');
  if (page === 'cardAll') {
    pageAllCards.classList.remove('display-none');
    rootPage.classList.remove('root__page-product')
  }
  else if (page === 'cerdDetalis') {
    pageCardDetalis.classList.add('display-none');
    pageAllCards.classList.remove('display-none');
    rootPage.classList.remove('root__page-product')
  }
  
}


// функция вставки товаров в корзину
function insertProductsInBasket(dataBasket) {
  dataBasket.forEach((element, index) => {
    insertInBasketProduct(basketList, element, index)
  });
}

// функция изменения количества товара
function addQuantity(e) {
  const idElem = e.parentNode.id
  if (e.classList.contains('basket__icons-plus')) {
    dataBasket[idElem].quantity = dataBasket[idElem].quantity + 1;
    e.previousElementSibling.textContent = dataBasket[idElem].quantity;
    getSumItem(idElem, dataBasket[idElem].quantity)
  }
  else if (e.classList.contains('basket__icons-minus')) {
    if (dataBasket[idElem].quantity === 1) {
      dataBasket.splice(idElem, 1);
      changeElemInBascet(dataBasket);
      openPageBasket();
    }
    else {
      dataBasket[idElem].quantity = dataBasket[idElem].quantity - 1;
      e.nextElementSibling.textContent = dataBasket[idElem].quantity;
      getSumItem(idElem, dataBasket[idElem].quantity)
    }
  }
  if (dataBasket.length === 0) {
    closeBasket()
  }
  changeElemInBascet(dataBasket);
  getTotalPrice(dataBasket)
}

// функция очистки списка товаров в корзине
function clearBasket(productNode) {
  productNode.forEach(elem => {
    basketList.removeChild(elem)
  })
}

// функция суммы позиции товара
function getSumItem(elemID, quantity) {
  const price = productItem[elemID].querySelector('.basket__price');
  const value = dataBasket[elemID].product.price * quantity;
  price.textContent = value;
}

// функция получения общий суммы
function getTotalPrice(data) {
  let total = 0
  data.forEach(elem => {
    total = total + (elem.product.price * elem.quantity)
  }) 
  headerTotalPrice.textContent = total;
  basketPrice.textContent = total;
  setTotalPrice(total)
  getFullPrice()
}

// функция добавления стоимость доставки
function addDelivery(e) {
  basketDeliveryPrice.textContent = e;
  getFullPrice()
}

// функция общий стоимости товаров
function getFullPrice() {
  basketFullPrice.textContent = Number(basketDeliveryPrice.textContent) +  Number(basketPrice.textContent)
}

// функция открытия попапа с ордером
function openOrderPopup() {
  orderSection.classList.remove('order_hidden');
}


// функция закрытия попапа с ордером
function closeOrederPopup() {
  closeBasket();
  changeElemInBascet([]);
  orderSection.classList.add('order_hidden');
  headerTotalPrice.textContent = '0';
  pageAllCards.classList.remove('display-none');
  rootPage.classList.remove('root__page-product')
}