const entrada2 = require("readline-sync");

    let sal = parseFloat(entrada2.question("digite seu salario bruto: "));

    if(sal <= 1320){

        console.log("o seu salario liquido é de: " + (sal - (sal * 0.075)));
    }

    else if(sal > 1320 && sal <= 2571.29){

        if(sal > 2112){

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.09) + (sal * 0.075))));
        }

        else{

            console.log("o seu salario liquido é de: " + sal + (sal * 0.09))
        }
    }

    else if(sal > 2571.29 && sal <= 3856.94){

        if(sal <= 2826.65){

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.12) + (sal * 0.075))));
        }

        else if(sal > 2826.65 && sal <= 3751.05){

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.12) + (sal * 0.15))));
        }

        else if(sal > 3751.05){

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.12) + (sal * 0.225))));
        }

    }

    else if(sal > 3856.94){

        if(sal <= 4664.68){

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.14) + (sal * 0.225))));
        }

        else{

            console.log("o seu salario liquido é de: " + (sal - ((sal * 0.14) + (sal * 0.275)))); 
        }
    }