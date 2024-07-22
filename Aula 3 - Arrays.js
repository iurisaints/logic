// o que são arrays:
let mikas = ["mikaela", "lazarotto", 28, 10, 90]

console.log("Esse é o array: ", mikas)

//inserir no início
mikas.unshift("professora")

console.log(mikas)

//retirar do início
mikas.shift()

console.log(mikas)

//inserir no final
mikas.push("professora")

console.log(mikas)

//retirar no final
mikas.pop()

console.log(mikas)

//retirar valor específico
let deletarArray = 28

mikas = mikas.filter(i => i !== deletarArray)


console.log(mikas)
