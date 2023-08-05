import { dresses } from "../components/data/woman/dresses";
import { longShirts } from '../components/data/woman/longShirts';
import { shirts } from '../components/data/woman/shirts';
import { jackets } from '../components/data/woman/jackets';
import { sweatshirts } from '../components/data/woman/sweatshirts';
import { coat } from '../components/data/woman/coat';
import { trousers } from '../components/data/woman/trousers';
import { skirts } from '../components/data/woman/skirts';
import { swimwear } from '../components/data/woman/swimwear';
import { shirtsMen } from '../components/data/men/shirtsmen';
import { longshirtsMen } from '../components/data/men/longshirtsMen';
import { sweatshirtsMen } from '../components/data/men/sweatshirtsMen';
import { jacketsMen } from '../components/data/men/jacketsMen';
import { coatMen } from '../components/data/men/coatMen';
import { trousersMen } from '../components/data/men/trousersMen';
import { belts } from '../components/data/accessories/belts';
import { bags } from '../components/data/accessories/bags';
import { gloves } from '../components/data/accessories/gloves';
import { patches } from '../components/data/accessories/patches';
import { varia } from '../components/data/accessories/varia';



export const cardsAll = document.querySelector('.cards'); // блок всех карточек
export const pageCardDetalis = document.querySelector('.item-details')  // страница детали карточки
export const pageAllCards = document.querySelector('.catalog-page')  // страница всех карточек каталога
export const rootPage = document.querySelector('.root')
export const promtLogoHeader = document.querySelector('.header__logo-prompt');
export const logoHeader = document.querySelector('.header__logo');
export const battonBackPage = pageCardDetalis.querySelector('.item-details__button_back');
export const battonAddBasket = pageCardDetalis.querySelector('.item-details__button');
export const sidebarMenuNodeElem = rootPage.querySelector('.sidebar');
export const pagesBatton = rootPage.querySelector('.pages');
export const buttonSort = rootPage.querySelector('.sort__button');
export const iconSort = rootPage.querySelector('.sort__image_price');
export const sortSize = rootPage.querySelector('.sort__size');
export const selectSizeWin = rootPage.querySelector('.sort__win-sort');
export const buttonSizeClose = rootPage.querySelector('.sort__button-close');
export const sizeSortButtons = rootPage.querySelectorAll('.sort__list-item');
export const sizeButton = rootPage.querySelector('.sort__button-size');
export const selectedSizes = rootPage.querySelector('.sort__select-size-list');
export const buttonCloseSelectedSize = rootPage.querySelector('.sort__button-close');
export const iconCloseSelectedSize = rootPage.querySelector('.sort__select-size-list');
export const messageNoProduct = rootPage.querySelector('.cards__message');
export const headerMenuLinks = rootPage.querySelectorAll('.headet__elem-menu');
export const imagesMenu = rootPage.querySelectorAll('.cardMenu');
export const mainFotoProduct = rootPage.querySelector('.item-details__foto');
export const sidebarGallerey = rootPage.querySelector('.gallery');
export const popupCallery = rootPage.querySelector('.image-popap');
export const buttonclosePopupCallery = popupCallery.querySelector('.image-popap__icon-close');
export const imagePopup = popupCallery.querySelector('.image-popap__image');
export const imagePopupSidebar = popupCallery.querySelector('.image-popap__listImages');
export const buttonNextImage = popupCallery.querySelector('.image-popap__icon-next');
export const buttonPrevImage = popupCallery.querySelector('.image-popap__icon-prev');
export const basket = document.querySelector('.basket');
export const buttonHeaderBasket = document.querySelector('.header__link-basket');
export const buttonBasketClose = document.querySelector('.basket__close');
export const buttonsSize = document.querySelector('.item-details__list-size');
export const basketList = document.querySelector('.basket__list');
export const basketPlusQuantity = document.querySelector('.basket__icons-plus');
export const basketItem = document.querySelector('.basket__item');
export const headerTotalPrice = document.querySelector('.header__total-price');
export const basketPrice = document.querySelector('.basket__cost');
export const basketDeliverySelect = document.querySelector('.basket__input-select');
export const basketDeliveryPrice = document.querySelector('.basket__delivery-price');
export const basketFullPrice = document.querySelector('.basket__total-price');
export const formOrder = document.querySelector('.basket__form');
export const buttonOrder = document.querySelector('.order__button');
export const orderSection = document.querySelector('.order');
export const basketButton = document.querySelector('.basket__button');
export const basketSection = document.querySelector('.basket__order');
export const titleHeader = document.querySelector('.iconsMenuSection__title');
export const shortDescription = document.querySelector('.item-details__name');
export const price = document.querySelector('.item-details__price');
export const descriptionList = document.querySelector('.description__list');
export const optionalDescriptionList = document.querySelector('.description__subtitle-list');
export const longDescriptionList = document.querySelector('.detailed-description__list');
export const iconLabel = document.querySelector('.item-details__logo');




export const imagesMenuElems = {
  men: [
    {
      image: 'https://4.downloader.disk.yandex.ru/preview/0908d5903c041e159aac56e27c9825ef7cffc1095fae8dfd6d8a39a78a3b531f/inf/zxdtnOiwzpn5b6hPLW7IMhaVeM3YJ7iyXGN754wxAapsIcn7wTUembZ9B_GZ5OGmSDkWzTGByCExDZUWShloSg%3D%3D?uid=120089973&filename=103690_MT_1000_Shirts.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Футболи и топы'
    },
    {
      image: 'https://4.downloader.disk.yandex.ru/preview/f4f5bf4ffc8d1357b44b5f24bfddf6797a1228e709e1926a8b739a37a6da759d/inf/4pDQGzzv7Q2ZpXRd06ZUHmOLsER6xMib-3IdZBp-3ffQkkLsK6w2ByRTEuSmwTf4X8kVuiXOdYCNoZnzPp05lg%3D%3D?uid=120089973&filename=100400_Teaser_Winterumstellung_M%C3%A4nner_Pullover.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x947',
      text: 'Толстовки'
    },
    {
      image: 'https://2.downloader.disk.yandex.ru/preview/c05abb144dc07faa0a757fd87bef73fe16e1fbfdff9a6f4d94fe8b441feb4661/inf/GVRC0SyKtZfJJUTNFZCgRe0ihfJrADECw6iaoesyChn1OhR_e4DVg17hhQXm3P8Zz4Rj0EVDVZIcL2C3j1SL0g%3D%3D?uid=120089973&filename=103690_MT_1000_Hosen.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Брюки'
    },
    {
      image: 'https://1.downloader.disk.yandex.ru/preview/6ecc90c6101b34f272cb4f905b66d0b5e39e5e9b20ff0dc4e38288229b385d00/inf/JK5ttGmp14F8Qh7KGcbzTInJ5-ScIU7al5Iz_P1iYe7i_ZhkP8Kgpb3A9z0YMHoAklpcG26lQGmvB2EN58jqNA%3D%3D?uid=120089973&filename=103690_MT_1000_Uebergangsjacken.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Куртки'
    },
  ],

  women: [
    {
      image: 'https://4.downloader.disk.yandex.ru/preview/e0c3b1cb840148c692f998ee4d34548f505cf180a851d36ece4a2d461defe742/inf/AbQnbqYTMEEs1-qN8WVOrmclm8QmEsY-D_bB85bo3LaTBcfVMSJ1UKiTuMnZXvH3L6BOvoJCJ31T0Ezto8Fmhg%3D%3D?uid=120089973&filename=t-shirt.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Футболи и топы'
    },
    {
      image: 'https://4.downloader.disk.yandex.ru/preview/1621248cb04981af06a7ad37942e293fe802207141d12e3467c4860cfe2ab575/inf/0mn2Mz2LS41w6FrzBLYnRl64Uu4Igu6iPeSaniIS8IMNh3A6cWKDBrIfvTOWCEpI0xKgxVCszmZdNPuO0HkjVQ%3D%3D?uid=120089973&filename=dress.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Платья'
    },
    {
      image: 'https://1.downloader.disk.yandex.ru/preview/6c862c245798b36b209bedf20be523ae4de19eb99de2825f2e9e96c0f9eaf42c/inf/SU57KTuvWij0XreW03_fxOjd9c0O6ELsQ3iSyo5EO1yjcnjbg4c5wkEau6ZWys-hToFkkbhyA3BcgdUgK2Kc2Q%3D%3D?uid=120089973&filename=99732_MT_1000_Winterumstellung_Unterseite_Frauen_Hose_Stoff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x947',
      text: 'Брюки'
    },
    {
      image: 'https://2.downloader.disk.yandex.ru/preview/7f3b392272b735471213386f1e7bd90d52b911b898814a4562bf7f861c2a0f32/inf/Oy6kfjyPnyD2f_1BhgOWma6iJYurMf0nc12eDUl0sxql6bJ0NpoieCUD5_C0qyoWu13HWKFyE-yoqzb5o_ZQHw%3D%3D?uid=120089973&filename=103680_LP_Sommer_2023_Frauen_Uebergangsjacken.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Куртки'
    },
  ],
  accessories: [
    {
      image: 'https://2.downloader.disk.yandex.ru/preview/afaf712b442fef03705414dd176bff46e02958ada3ab53853e766ce0bb47bcee/inf/47wB9xevN2GCBFXwIdfxq15Xtp1SBskNJQMgYuEMugrPcyBs1tMvyguEs2GSijGXnmyEreYwp_rx-sPIfBOc7A%3D%3D?uid=120089973&filename=248362a-emp.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Ремни'
    },
    {
      image: 'https://3.downloader.disk.yandex.ru/preview/f8dd4b3f5cb453603dc1c805f1c56163cb52f0ed461baf222e004b6b481376ef/inf/VNK8-esP72n4ZcE1ta9oiNoXqODrzbgrwGAdlI7V8_b4_enPhFXj-pxewx50oySBLLLHqFJnNLVx_u1kwtMdeg%3D%3D?uid=120089973&filename=265435a-emp.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Сумки'
    },
    {
      image: 'https://3.downloader.disk.yandex.ru/preview/cfdf753b553072426b62ebdcfc480274a438a15e945023d21346365fd62dde11/inf/PIHCRTDizrCkycxQ0ALIsl5Xtp1SBskNJQMgYuEMugodbihbNmR2DvtNxPf00znnZsk459o9Hlihpqo4DkmZoQ%3D%3D?uid=120089973&filename=810490a2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Перчатки'
    },
    {
      image: 'https://4.downloader.disk.yandex.ru/preview/f5caa2c1ba131fc2e82c706d7f9b6b438269eda01c8daa84c8d16fb47c5b503e/inf/ZX9GMGOml4ESOJTrwKAinuzYkZ35ctwE1DqQxS7G2In49ck7jLEUn7gCuNp4ynmf-azzuJI7kJKgwG8yYHKKsQ%3D%3D?uid=120089973&filename=235999.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=120089973&tknv=v2&size=1920x941',
      text: 'Нашивки и брелоки'
    },
  ]
}



export const catalog = {
  women: {
    dresses,
    longShirts,
    shirts,
    jackets,
    sweatshirts,
    coat,
    trousers,
    skirts,
    swimwear
  },
  men: {
    shirts: shirtsMen,
    longShirts: longshirtsMen,
    sweatshirts: sweatshirtsMen,
    jackets: jacketsMen,
    coat: coatMen,
    trousers: trousersMen,
  },
  accessories: {
    belts,
    bags,
    gloves,
    patches,
    varia
  }
}