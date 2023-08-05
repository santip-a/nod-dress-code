
import { 
  getProduct, 
  insertProduct,
 } from '../components/cardDetalis/cardDetalis';


 
// функция показа страницы конкретного товара
export function openProductDetails(id, catalog) {
  const product = getProduct(id, catalog);  // находим конкретный товар  
  insertProduct(product)
}




