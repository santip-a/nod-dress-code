


//============ блок замены картинки пр наведении на картинку карточки ============
const cardsAll = document.querySelector('.cards');

const showOnPerson = (elem) => {
  if (elem.target.classList.contains('card__image')) {
    const imageUrl = elem.target.src;
    const nameFileImage = imageUrl.split('/').pop().split('.');
    elem.target.src = `./images/catalog/${nameFileImage[0]}-z.jpg`;
  }
}

const showOnProduct = (elem) => {
  if (elem.target.classList.contains('card__image')) {
    const imageUrl = elem.target.src;
    const nameFileImage = imageUrl.split('/').pop().split('.');
    const newNameFileImage = nameFileImage[0].split('-');
    elem.target.src = `./images/catalog/${newNameFileImage[0]}.jpg`;
  }
}

cardsAll.addEventListener('mouseover', (e) => showOnPerson(e));
cardsAll.addEventListener('mouseout', (e) => showOnProduct(e))
//===========================================================================


//================ подсказака на логотипе ======================================
const promtLogoHeader = document.querySelector('.header__logo-prompt');
const logoHeader = document.querySelector('.header__logo');

const xy = {
  x: 0,
  y: 0
}

const saveMouseMove = (e) => {
  xy.x = e.clientX + 15;
  xy.y = e.clientY + 20;
  setTimeout(()=> {
    if (e.clientX + 15 === xy.x && e.clientY + 20 === xy.y) {
      promtLogoHeader.classList.remove('header__logo-prompt_hiden');
      promtLogoHeader.setAttribute('style', `
        left: ${e.clientX + 15}px;
        top: ${e.clientY + 20}px;
      `)
    }
  }, 500)
}

const hidePromtLogoHeader = () => {
  promtLogoHeader.classList.add('header__logo-prompt_hiden');
  xy.x = 0;
  xy.y = 0;
}

logoHeader.addEventListener('mousemove', e => saveMouseMove(e));
logoHeader.addEventListener('mouseout', hidePromtLogoHeader)
//=================================================

