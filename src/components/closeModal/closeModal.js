import {selectSizeWin, sortSize, sizeSortButtons} from '../../constants/constants'

export function closeModal(e) {
  const click = e.composedPath().includes(selectSizeWin) || e.composedPath().includes(sortSize);
  if(!click) {
    selectSizeWin.classList.add('display-none');
    sizeSortButtons.forEach(elem => elem.classList.remove('sort__list-item_selected'))
  }
}