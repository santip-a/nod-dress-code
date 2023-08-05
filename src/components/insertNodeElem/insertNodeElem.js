import {sizeTilte} from '../../constants/constants'

export const insertCard = (cardsAll, elem) => {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.dataset.id = elem._id

  cardElement.querySelector('.card__image').src = elem.imgUrl[0];
  cardElement.querySelector('.card__title').textContent  = `Цена: ${elem.price} руб.` ;
  cardElement.querySelector('.card__subtitle').textContent  = `"${elem.name}"` ;
  cardElement.querySelector('.card__subtitle-name').textContent  = ` / "${elem.label}"` ;

  cardsAll.append(cardElement)
}

export const insertSideBarMenu = (cardsAll, elem) => {
  const cardTemplate = document.querySelector('#sidebarTemplate').content;
  const cardElement = cardTemplate.querySelector('.sidebar__item').cloneNode(true);
  cardElement.dataset.id = elem.catalog;
  cardElement.textContent  = elem.name ;
  cardsAll.append(cardElement)
}

export const insertPagesButton = (cardsAll, elem) => {
  const cardTemplate = document.querySelector('#pageBattonTemlate').content;
  const cardElement = cardTemplate.querySelector('.pages__item').cloneNode(true);
  cardElement.textContent  = elem ;
  cardsAll.append(cardElement)
}

export const insertSelectedSize = (cardsAll, size) => {
  const cardTemplate = document.querySelector('#selectedSizes').content;
  const cardElement = cardTemplate.querySelector('.sort__select-size').cloneNode(true);
  cardElement.querySelector('.sort__title').textContent  = size
  cardsAll.append(cardElement)
}


export const insertGallerey = (cardsAll, image, id) => {
  const cardTemplate = document.querySelector('#galleryTemplate').content;
  const cardElement = cardTemplate.querySelector('.gallery__image').cloneNode(true);
  cardElement.src  = image;
  cardElement.id = id;
  cardsAll.append(cardElement)
}

export const insertPopupGallerey = (cardsAll, image, id) => {
  const cardTemplate = document.querySelector('#popupCallery').content;
  const cardElement = cardTemplate.querySelector('.image-popap__itemFoto').cloneNode(true);
  cardElement.src  = image;
  cardElement.id = id;
  cardsAll.append(cardElement)
}

export const insertButtonsSize = (cardsAll, text) => {
  const cardTemplate = document.querySelector('#selectSize').content;
  const cardElement = cardTemplate.querySelector('.item-details__item-size').cloneNode(true);
  cardElement.textContent  = text;
  cardElement.id = text;
  cardsAll.append(cardElement)
}


export const insertInBasketProduct = (cardsAll, element, id) => {
  const cardTemplate = document.querySelector('#productInBasketTemplate').content;
  const cardElement = cardTemplate.querySelector('.basket__item').cloneNode(true);
  const imgProduct = cardElement.querySelector('.basket__image');
  const titleProduct = cardElement.querySelector('.basket__subtitle');
  const size= cardElement.querySelector('.basket__size-value');
  const quantityProduct = cardElement.querySelector('.basket__quantity');
  const priceProduct = cardElement.querySelector('.basket__price');
  const quantity = cardElement.querySelector('.basket__choose-quantity');
  cardElement.id = id;
  quantity.id = id
  imgProduct.src  = element.product.imgUrl[0];
  titleProduct.textContent = element.product.name;
  size.textContent = element.size;
  quantityProduct.textContent = element.quantity;
  priceProduct.textContent = element.product.price * element.quantity;
  cardsAll.append(cardElement)
}

export const insertDescriptionList = (cardsAll, text) => {
  const cardTemplate = document.querySelector('#description').content;
  const cardElement = cardTemplate.querySelector('.description__list-item').cloneNode(true);
  cardElement.textContent  = text;
  cardsAll.append(cardElement)
}

export const insertOptionalDescription = (cardsAll, text) => {
  const cardTemplate = document.querySelector('#optionalDescriptionTemplate').content;
  const cardElement = cardTemplate.querySelector('.description__subtitle').cloneNode(true);
  cardElement.textContent  = text;
  cardsAll.append(cardElement)
}

export const insertoLongDescription = (cardsAll, text) => {
  const cardTemplate = document.querySelector('#longDescriptionTemplate').content;
  const cardElement = cardTemplate.querySelector('.detailed-description__list-item').cloneNode(true);
  const name = cardElement.querySelector('.detailed-description__name');
  const value = cardElement.querySelector('.detailed-description__value');
  name.textContent  = text.name;
  value.textContent  = text.value;
  cardsAll.append(cardElement)
}