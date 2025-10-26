function escolha(){
    let escolhauser = document.getElementById("opcao");
 
    if (escolhauser.value == "Maior"){
        let num1 = parseFloat(prompt("Digite o num 1: "));
        let num2 = parseFloat(prompt("Digite o num 2: "));
        let num3 = parseFloat(prompt("Digite o num 3: "));
 
        if(num1 > num2 && num1 > num3){
            alert("O maior número é: "+ num1);
        }
        else if(num2 > num1 && num2 > num3){
                alert("O maior número é: "+ num2);
            }
            else if(num3 > num1 && num3> num2){
                alert("O maior número é: "+ num3);
            }
    }
    else if (escolhauser.value == "Crescente"){
        let num4 = parseFloat(prompt("Digite o num 1: "));
        let num5 = parseFloat(prompt("Digite o num 2: "));
        let num6 = parseFloat(prompt("Digite o num 3: "));
        let maior;
        let menor;
        if (num4 > num5 && num4 > num6){
            maior = num4;
        }
            else if (num5 > num4 && num5 > num6){
                maior = num5;
            }
                else if (num6 > num5 && num6 > num4){
                    maior = num6;
            }

        if (num4 < num5 && num4 < num6){
            menor = num4;
        }
            else if (num5 < num4 && num5 < num6){
               menor = num5;
            }
                else if (num6 < num5 && num6 < num4){
                    menor = num6;
                }

        if (num4 > num5 && num4 < num6){
            meio = num4;
        }
            else if (num5 > num4 && num5 < num6){
                meio = num5;
            }
                else if (num6 > num5 && num6 < num4){
                    meio = num6;
                }

        if (num4 < num5 && num4 > num6){
            meio = num4;
        }
            else if (num5 < num4 && num5 > num6){
                meio = num5;
            }
                else if (num6 < num5 && num6 > num4){
                    meio = num6;
                }

        alert ("Ordem: " + menor + ", " + meio + ", " + maior);
    }
        else if (escolhauser.value == "Palíndromo"){
            let palavra = prompt("Digite a palavra para consultar se é Palíndromo: ");
            let reversa;

            palavra = palavra.toUpperCase();

            reversa = palavra.split("").reverse().join("");

            if (palavra == reversa){
                alert( "A palavra: " + palavra.toLowerCase() + " é um palíndromo!")
            }
            else {
                alert ("A palavra: " + palavra.toLowerCase() + " não é um palíndromo!")
            }
        }
    
            else {
                    let a = parseFloat(prompt("Digite o lado 1: "));
                    let b = parseFloat(prompt("Digite o lado 2: "));
                    let c = parseFloat(prompt("Digite o lado 3: "));

                    if (a + b > c && a + c > b && b + c > a){
                        alert("Isso é um Triângulo!");
                        if (a == b && a == c && b == c){
                            alert("O triângulo é Equilátero");
                        }
                        else if ((a == b && a != c) || (b == c && b != a) || (a == c && a != b)){
                            alert("O triângulo é Isósceles");
                        }
                        else{
                            alert("O triângulo é Escaleno");
                        }
                    }
                    else{
                        alert("Isso não é um Triângulo!");
                    }
            }
}