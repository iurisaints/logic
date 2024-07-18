### Exemplo 1: Uso de `&&` (AND)
```javascript
let idade = 25;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
```
Neste exemplo, a condição verifica se a idade é maior ou igual a 18 **e** se a pessoa possui carteira de motorista.

### Exemplo 2: Uso de `||` (OR)
```javascript
let diaDaSemana = 'Sábado';

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
    console.log("É fim de semana");
} else {
    console.log("É dia de semana");
}
```
Aqui, a condição verifica se o `diaDaSemana` é igual a 'Sábado' **ou** 'Domingo'.

### Exemplo 3: Uso de `!` (NOT)
```javascript
let temPendencias = false;

if (!temPendencias) {
    console.log("Não há pendências");
} else {
    console.log("Há pendências a serem resolvidas");
}
```
Neste caso, o operador `!` é usado para negar a variável `temPendencias`, verificando se ela é `false`.

### Exemplo 4: Combinação de operadores
```javascript
let numero = 10;

if (numero > 0 && numero <= 100) {
    console.log("O número está entre 1 e 100");
} else if (numero > 100 || numero < 0) {
    console.log("O número está fora do intervalo de 1 a 100");
} else {
    console.log("O número é zero");
}
```
Aqui, há uma combinação de `&&` e `||` para verificar diferentes intervalos de valores da variável `numero`.

### Exemplo 5: Uso de ternário
```javascript
let temperatura = 25;
let clima = temperatura > 30 ? 'Quente' : 'Moderado';

console.log(`O clima é ${clima}`);
```
Neste exemplo, o operador ternário `? :` é usado para atribuir o valor da variável `clima` baseado na condição `temperatura > 30`.

Esses são alguns exemplos básicos de como você pode usar operadores em expressões condicionais em JavaScript. Eles ajudam a construir condições mais complexas e expressivas para controlar o fluxo do seu programa de maneira eficiente.
