let num1 = prompt("Digite o primeiro numero: ");
let num2 = prompt("Digite o segundo numero ");

let num1f = parseFloat(num1);
let num2f = parseFloat(num2);

alert ( 
"Numero 1: " + num1f +"\n"+
"Numero 2: " + num2f + "\n" +
"Soma: " + (num1f + num2f) + "\n" + 
"Subtração: " + (num1f - num2f) + "\n" +
"Produto : " + (num1f * num2f)+ "\n" +
"Divisão: " + (num1f / num2f) + "\n" +
"Resto da divisão: " + (num1f % num2f));