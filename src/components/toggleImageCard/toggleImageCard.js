export const showOnPerson = (elem, products) => {
    if (elem.target.classList.contains('card__image')) {
    const card = elem.target.parentElement;
    const cardId = card.dataset.id;
    const imgNode = card.querySelector('.card__image');
    const itemProduct = products.find(x =>  x._id === Number(cardId));
    const lenrthImagesArrey = itemProduct.imgUrl.length-1;
    imgNode.src = itemProduct.imgUrl[lenrthImagesArrey];    
  }

}

export const showOnProduct = (elem, products) => {
  if (elem.target.classList.contains('card__image')) {
    const card = elem.target.parentElement;
    const cardId = card.dataset.id;
    const imgNode = card.querySelector('.card__image');
    const itemProduct = products.find(x =>  x._id === Number(cardId));
    imgNode.src = itemProduct.imgUrl[0];
  }
}