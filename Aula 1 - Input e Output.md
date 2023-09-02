**Introdução à Lógica de Programação:**

A lógica de programação é como ensinar um computador a seguir um conjunto de instruções para resolver problemas. Imagine que você está dando direções a um robô para fazer um sanduíche. Você precisa dar instruções claras e em ordem para que o robô possa fazer o sanduíche corretamente.

**1. Entrada, Processamento e Saída:**

- **Entrada:** Isso é como você dá as informações ao seu programa. Pode ser algo que você digita, informações de um arquivo ou até mesmo dados de sensores. Por exemplo, se você está fazendo um programa para calcular a média de notas, as notas seriam a entrada.

- **Processamento:** É o que seu programa faz com essas informações de entrada. Pode ser cálculos, tomada de decisões, organização de dados, etc. No caso do cálculo da média, o processamento seria somar todas as notas e dividi-las pelo número de notas.

- **Saída:** É o resultado que seu programa fornece após o processamento. Pode ser uma resposta exibida na tela, um arquivo gerado, ou qualquer outra forma de apresentar as informações processadas. No caso da média, a saída seria o valor da média exibido na tela.

**2. O readline-sync em JavaScript:**

O `readline-sync` é uma biblioteca em JavaScript que permite que você obtenha entrada do usuário no console de forma síncrona. Isso significa que seu programa irá pausar e esperar que o usuário insira dados antes de continuar. É muito útil para criar programas interativos no console.

Para usar o `readline-sync`, você precisa importá-lo primeiro com `require`:

```javascript
const readline = require('readline-sync');
```

Aqui estão algumas funções comuns do `readline-sync`:

- `question(prompt)`: Pergunta ao usuário e espera por uma resposta. O texto `prompt` é exibido para indicar ao usuário o que ele deve fazer.

```javascript
const nome = readline.question('Qual é o seu nome? ');
console.log(`Olá, ${nome}!`);
```

- `keyInSelect(choices, prompt)`: Exibe uma lista de opções para o usuário e espera que ele escolha uma delas. Retorna o índice da opção selecionada.

```javascript
const opcoes = ['Maçã', 'Banana', 'Laranja'];
const indice = readline.keyInSelect(opcoes, 'Escolha uma fruta: ');
console.log(`Você escolheu ${opcoes[indice]}.`);
```

**3. Atividade de Treinamento:**

Aqui estão cinco questões iniciais para praticar lógica com JavaScript:

**Questão 1:** Crie um programa que peça ao usuário para digitar dois números e mostre a soma deles.

**Questão 2:** Crie um programa que determine se um número é par ou ímpar.

**Questão 3:** Crie um programa que calcule o fatorial de um número. O fatorial de 5, por exemplo, é 5 x 4 x 3 x 2 x 1 = 120.

**Questão 4:** Crie um programa que peça ao usuário para digitar sua idade e, com base nessa idade, diga se ele é maior ou menor de idade. (Dica: use o IF e ELSE)

**Questão 5:** Crie um programa que solicite ao usuário um número e determine se é um número primo ou não. Um número primo é aquele que só é divisível por 1 e por ele mesmo.(Dica: use o operador MOD que é o %)

Lembre-se de usar o `readline-sync` para obter entradas do usuário nas questões. Isso ajudará a praticar a entrada, processamento e saída de dados em JavaScript.
