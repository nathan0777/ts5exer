const entrada3 = require("readline-sync");

let ladosDado = 6;
let numeroLancamentos = parseFloat(entrada3.question('Numero de lancamentos: '))

let combinacoes: { [key: string]: number } = {}; 


for (let i = 1; i <= ladosDado; i++) {
  for (let a = 1; a <= ladosDado; a++) {
    let resultadoLancamento = `${i},${a}`;
    combinacoes[resultadoLancamento] = (combinacoes[resultadoLancamento] || 0) + 1;
  }
}


console.log("Probabilidade de cada combinação possível: ");
for (let i = 1; i <= ladosDado; i++) {
  for (let a = 1; a <= ladosDado; a++) {
    let resultadoLancamento = `${i},${a}`;
    let probabilidade = combinacoes[resultadoLancamento] / numeroLancamentos;
    console.log(`Lançamento ${resultadoLancamento}: ${probabilidade}`);
  }
}