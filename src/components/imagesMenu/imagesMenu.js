import {imagesMenu} from '../../constants/constants';

export function insertImagesInMenu(list) {
  imagesMenu.forEach((elem, index) => {
    elem.querySelector('.cardMenu__image').src = list[index].image;
    elem.querySelector('.cardMenu__title').textContent = list[index].text;
  })
  
}