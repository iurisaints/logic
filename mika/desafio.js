/*
Código do desafio corrigido:
const numeroUm = Number(prompt ("Escreva um número de 1 a 100:"))
const numeroDois = Number(prompt ("Escreva um número de 100 a 200:"))

const resultadoUm = numeroUm + numeroDois
const resultadoDois = numeroUm * numeroDois

console.log ("O primeiro número somado ao segundo número resulta em:" , resultadoUm)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:" , resultadoDois)*/

//biblioteca de leitura backend
//para rodar o código é: node arquivo.js

//para instalar: npm install readline-sync
let leitor = require("readline-sync")

//para utilizar pode chamar dessa forma:
let n1 = leitor.questionInt("Escreva um numero de 1 a 100:")
let n2 = leitor.questionInt("Escreva um numero de 100 a 200:")

//let n1 = leitor.question recebe *string*
console.log("O primeiro número somado ao segundo número resulta em:" , n1+n2)
console.log("O primeiro número somado ao segundo número resulta em:" , n1*n2)
