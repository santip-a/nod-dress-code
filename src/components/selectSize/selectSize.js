
// функция удаления размера из массива selectSize
export function removeSizeinArrey(size, sortArrey) {  
  sortArrey = sortArrey.filter(elem => elem !== size)
  return sortArrey  
}


