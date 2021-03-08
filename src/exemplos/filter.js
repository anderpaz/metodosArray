/* 
  Filter retorna um array quando for true
*/

/* Remover elementos duplicados de uma array */

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const uniqueArray = yetAnotherArray.filter((elem, index, arrayOriginal) => {
  return arrayOriginal.indexOf(elem) === index;
});

//console.log(uniqueArray);
