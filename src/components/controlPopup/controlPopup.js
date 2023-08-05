import { imagePopup } from '../../constants/constants'



// функция логики попапа


let activeImage = 0

export function controlPopup(e) {
  if (!e.classList.contains('image-popap__itemFoto')) { return }
  const images = document.querySelectorAll('.image-popap__itemFoto');
  images[Number(e.id)].classList.add('image-popap__itemFoto_select');
  images[Number(activeImage)].classList.remove('image-popap__itemFoto_select');
  imagePopup.src = e.src
  activeImage = Number(e.id);
}



export function nextFoto() {
  const images = document.querySelectorAll('.image-popap__itemFoto');
  if (activeImage === images.length - 1) {
    images[0].classList.add('image-popap__itemFoto_select');
    images[Number(activeImage)].classList.remove('image-popap__itemFoto_select');
    imagePopup.src = images[0].src
    activeImage = -1
  }
  else {
    images[Number(activeImage + 1)].classList.add('image-popap__itemFoto_select');
    images[Number(activeImage)].classList.remove('image-popap__itemFoto_select');
    imagePopup.src = images[Number(activeImage + 1)].src
  }
  activeImage = activeImage + 1;

}

export function prevtFoto() {
  const images = document.querySelectorAll('.image-popap__itemFoto');
  if (activeImage <= 0) {
    images[Number(images.length - 1)].classList.add('image-popap__itemFoto_select');
    images[0].classList.remove('image-popap__itemFoto_select');
    imagePopup.src = images[Number(images.length - 1)].src
    activeImage = images.length 
  }
  else {
    images[Number(activeImage - 1)].classList.add('image-popap__itemFoto_select');
    images[Number(activeImage)].classList.remove('image-popap__itemFoto_select');
    imagePopup.src = images[Number(activeImage - 1)].src
  }
  activeImage = activeImage - 1;
}


export function counter(n) {
  activeImage = Number(n)
}