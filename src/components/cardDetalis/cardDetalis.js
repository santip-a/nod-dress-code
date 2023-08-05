import {
  mainFotoProduct,
  sidebarGallerey,
  popupCallery,
  buttonclosePopupCallery,
  imagePopup,
  imagePopupSidebar,
  buttonNextImage,
  buttonPrevImage,
  battonAddBasket,
  buttonsSize,
  shortDescription,
  price,
  descriptionList,
  optionalDescriptionList,
  longDescriptionList,
  iconLabel
} from '../../constants/constants';
import {
  insertGallerey, insertPopupGallerey, insertButtonsSize,
  insertDescriptionList, insertOptionalDescription, insertoLongDescription
} from '../../components/insertNodeElem/insertNodeElem';
import { controlPopup, nextFoto, prevtFoto, counter } from '../controlPopup/controlPopup';
import { addProuctInBasket } from '../utils/utils';
import { openPageBasket } from '../../pages/basket'

// выбранный размер
let selectSaze = null
// выбранный продукт
let selectProduct

// функция поиска товра
export function getProduct(id, catalog) {
  const product = catalog.find(elem => {
    return String(elem._id) === String(id)
  })
  return product
}


let idFoto = '0' // текущий id фото в боковой панели

// функция отрисовки товара
export function insertProduct(product) {
  mainFotoProduct.src = product.imgUrl[0];
  mainFotoProduct.id = '0' // устанавливаем главную фотку
  idFoto = '0';
  selectProduct = product

  // очищаем боковую панель фото
  const sidebarItems = document.querySelectorAll('.gallery__image');
  if (sidebarItems.length > 0) {
    sidebarItems.forEach(elem => {
      sidebarGallerey.removeChild(elem)
    })
  }

  // делаем кнопку добавления товара в каталог неактивной
  if (!battonAddBasket.classList.contains('item-details__button_disabled')) {
    battonAddBasket.classList.add('item-details__button_disabled');
    battonAddBasket.disabled = true
  }

  // вставляем фотки в боковую панель
  product.imgUrl.forEach((element, index) => {
    insertGallerey(sidebarGallerey, element, index);
    if (index === 0) {
      const firstItem = sidebarGallerey.querySelector('.gallery__image')
      firstItem.classList.add('gallery__image_select')
    }
  });

  // очищаем кнопки с размерами
  delButtonPage()

  // вставляем кнопки с размемари
  insertButtonsSizes(product)

  // втавка краткого описания 
  insertDataCard(product)
}

// слушатель наведения мыши на фото из бокового меню
sidebarGallerey.addEventListener('mouseover', e => activeFoto(e.target));

// слушатель на главное фото для открытия попапа фотогалери
mainFotoProduct.addEventListener('click', e => openPopupFotogallery(e.target));

// слушатель закрытия попапа фотогалереи
buttonclosePopupCallery.addEventListener('click', e => closePopupGallery());

// слушатель на кнопку следущего фото 
buttonNextImage.addEventListener('click', e => nextFoto());

// слушатель на кнопку предыдущего фото 
buttonPrevImage.addEventListener('click', e => prevtFoto());

// слушатель боковой панели попапа
imagePopupSidebar.addEventListener('click', e => controlPopup(e.target));

// слушатель на кнопку добавление товара в корзину
battonAddBasket.addEventListener('click', e => addInBasket(e.target))

// слушатель на все кнопки размеров
buttonsSize.addEventListener('click', e => activeButtonAddInBasket(e.target))


// функция при наведения мыши (делаем фото активным и устанавливаем его как главное фото)
function activeFoto(e) {
  if (!e.classList.contains('gallery__image')) {
    return
  }
  if (e.id === idFoto) {
    return
  }
  e.classList.add('gallery__image_select');
  const allFoto = sidebarGallerey.querySelectorAll('.gallery__image')
  allFoto[idFoto].classList.remove('gallery__image_select');
  idFoto = e.id;
  mainFotoProduct.src = e.src;
  mainFotoProduct.id = e.id
}

// функция открытия попапа просмотра фото
function openPopupFotogallery(e) {
  imagePopup.src = e.src;
  popupCallery.classList.remove('image-popap_hidden');
  insertImageInSidebar(e);
}

//функция закрытия попапа галереии
function closePopupGallery() {
  popupCallery.classList.add('image-popap_hidden');
  counter(0)
}

// функция вставки фото в боковую панель
function insertImageInSidebar(e) {

  //очищаем боковую панель
  const sidebarItems = document.querySelectorAll('.image-popap__itemFoto')
  if (sidebarItems.length > 0) {
    sidebarItems.forEach(elem => {
      imagePopupSidebar.removeChild(elem)
    })
  }

  selectProduct.imgUrl.forEach((elem, index) => {
    insertPopupGallerey(imagePopupSidebar, elem, index);
    if (index === Number(e.id)) {
      const firstItem = imagePopupSidebar.querySelectorAll('.image-popap__itemFoto');
      firstItem[index].classList.add('image-popap__itemFoto_select');
    }
  })
  counter(e.id)
}


// функция вставки кнопки с размерами
function insertButtonsSizes(product) {
  product.sizes.forEach(elem => {
    insertButtonsSize(buttonsSize, elem)
  })
}

// функция удаление кнопок с размерами
export function delButtonPage() {
  const buttonsSizeElem = document.querySelectorAll('.item-details__item-size');
  buttonsSizeElem.forEach(elem => {
    buttonsSize.removeChild(elem)
  })
}

// функция записи в переменну selectSaze выбранного размера 
// и активация кнопки добавления товара в корзину
function activeButtonAddInBasket(e) {
  if (e.classList.contains('item-details__list-size')) {
    return
  }

  if (e.classList.contains('item-details__item-size_select')) {
    e.classList.remove('item-details__item-size_select');
    battonAddBasket.classList.add('item-details__button_disabled');
    battonAddBasket.disabled = true
  }
  else {
    if (selectSaze !== null && selectSaze !== e) {
      selectSaze.classList.remove('item-details__item-size_select');
    }
    battonAddBasket.classList.remove('item-details__button_disabled');
    e.classList.add('item-details__item-size_select');
    battonAddBasket.disabled = false
  }
  selectSaze = e;
}


// функция добавления товара в корзину
function addInBasket(e) {
  addProuctInBasket(selectProduct, selectSaze.id);
  openPageBasket()
}

// ===    функция вставки данных товара =============
function insertDataCard(product) {
  shortDescription.textContent = product.shortDescription;
  price.textContent = product.price;
  iconLabel.src = product.iconLabel;

  // удаляем предыдущий список описаний
  const previousDescriptionList = descriptionList.querySelectorAll('.description__list-item');
  previousDescriptionList.forEach(elem => {
    descriptionList.removeChild(elem)
  })

  // вставляем новый список опасаний
  product.description.forEach(elem => {
    insertDescriptionList(descriptionList, elem)
  })

  // удаляем предыдущий список описаний
  const previousOptionalDescription = optionalDescriptionList.querySelectorAll('.description__subtitle')
  if (previousOptionalDescription.length) {
    previousOptionalDescription.forEach(elem => {
      optionalDescriptionList.removeChild(elem)
    })
  }

  // вставляем новый список опасаний
  if (product.optionalDescription.length) {
    product.optionalDescription.forEach(elem => {
      insertOptionalDescription(optionalDescriptionList, elem)
    })
  }

  const previousLongDescription = longDescriptionList.querySelectorAll('.detailed-description__list-item');
  previousLongDescription.forEach(elem => {
    longDescriptionList.removeChild(elem)
  })

  product.longDescription.forEach(elem => {
    insertoLongDescription(longDescriptionList, elem)
  })


}

