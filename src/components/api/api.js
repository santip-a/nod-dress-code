// записать на сервер сумму товаров
export const setTotalPrice = (sum) => {
  fetch('http://localhost:3001/basket', {
    method: 'PATCH',
    body: JSON.stringify({
      total: sum
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}


// получение данных
const getData = (path, callbeck) => {
  fetch(`http://localhost:3001/${path}`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    callbeck(data)
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });
}


