const entrada4 = require("readline-sync");

let anta = 0;
let peru = 1;

for (let i = 0; i <= 10; i++){
    let f = anta + peru;

    console.log(f);

    peru = anta
    anta = f
}