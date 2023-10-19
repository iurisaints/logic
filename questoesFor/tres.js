/* Escreva um programa que calcule a soma de todos os números pares de 1 a 50 usando um loop "for". */

let soma = 0;
for (let i = 2; i <= 50; i += 2) {
  soma += i;
}
console.log(`A soma dos números pares de 1 a 50 é igual a ${soma}`);
