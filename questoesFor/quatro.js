/* Desenvolva um programa que determine e imprima todos os números primos de 1 a 100. */

function isPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

for (let i = 1; i <= 100; i++) {
  if (isPrimo(i)) {
    console.log(i);
  }
}
