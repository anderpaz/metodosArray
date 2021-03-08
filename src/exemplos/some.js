/* Some 
  Testa se pelo menos um elemento é verdadeiro
*/

/* Verificar se há algum número primo */

const oneMoreArray = [6, 8, 11, 14, 42];

const retorno = oneMoreArray.some((elem) => isPrime(elem));

//console.log(retorno);

/* testar valores primos */
function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
}
