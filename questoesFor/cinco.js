/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário usando um loop "for". */
const leitor = require("readline-sync")
const numero = leitor.questionInt("Digite um número para calcular o fatorial: ");
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é igual a ${fatorial}`);
