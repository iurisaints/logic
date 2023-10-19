/* Crie um programa que gere a tabela de multiplicação de um número específico fornecido pelo usuário, indo de 1 a 10. */
const leitor = require("readline-sync")
const numero = leitor.questionInt("Digite um número para a tabela de multiplicação: ");
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
