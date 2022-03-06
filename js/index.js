console.log('start frontend200tb three elements');


/*****************
Константы
*****************/
const h1 = document.querySelector('.h1');
const three = document.querySelector('.three');
const img = document.querySelectorAll('.img');


/*****************
Переменные
*****************/



/*****************
Функции
*****************/
const toggleImg = (img) => {
  console.log('toggleImg');
  setTimeout (img.classList.toggle('dis'), 1000)
}

const selectImg = () => {
  console.log('selectImg');
  img.forEach(elem => toggleImg(elem))  
}

const time = () => {
  console.log('time');
  setTimeout (selectImg, 1000)
}




/*****************
События
*****************/
h1.addEventListener('click', selectImg)

console.log('end frontend200tb three elements');
