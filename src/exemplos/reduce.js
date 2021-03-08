/* Reduce retorna uma valor contactenado com base
  no elemento de todo o array */

/* Somar as entradas  */
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 }
];

const totalLaunches = rockets.reduce(
  (valorAnterior, valorAtual) => valorAnterior + valorAtual.launches,
  0 // 0 valor inicial para a somatoria
);

//console.log(totalLaunches);

/* EXEMPLO 2 
  Somando uma matriz de valores
*/

const array = [
  [44, 55],
  [1, -3],
  [0, 2],
  [4, 5]
];

const resultado = array.reduce(
  (antigo, atual) =>
    antigo + atual.reduce((antigo, atual) => antigo + atual, 0),
  0
);

//console.log(resultado); //108
