const entrada5 = require('readline-sync');

let media:number = 0;
let valores: number[] = []

for(let i = 0; i < 10; i++){
    
    let valor 
    = parseFloat(entrada.question('digite um valor:'));

    valores.push(valor);

    media = media + valores[i];
}

console.log(media/10)