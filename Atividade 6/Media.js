let nome = prompt("Qual é o seu nome?");
let nota1 = prompt("Digite a nota 1: ");
let nota2 = prompt("Digite a nota 2: ");
let nota3 = prompt("Digite a nota 3: ");
let nota4 = prompt("Digite a nota 4: ");

let nota1f = parseFloat(nota1);
let nota2f = parseFloat(nota2);
let nota3f = parseFloat(nota3);
let nota4f = parseFloat(nota4);

let media = (nota1f + nota2f + nota3f + nota4f) / 4;
alert ( nome + " Sua Média Aritmética é: " + media.toFixed(2));