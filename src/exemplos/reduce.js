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
