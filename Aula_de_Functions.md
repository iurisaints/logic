Olá! Segue o link para os slides: https://github.com/iurisaints/logic/blob/main/Funcoes-em-JavaScript.pdf

Atividades:



### Desafio 1: Calculadora Básica

**Enunciado:**

Você foi contratado para criar uma função simples de calculadora. Sua tarefa é criar uma função chamada `calculadora` que aceita três parâmetros:

1. **`num1`**: o primeiro número (um número inteiro ou decimal).
2. **`num2`**: o segundo número (um número inteiro ou decimal).
3. **`operacao`**: uma string que pode ser `'soma'`, `'subtracao'`, `'multiplicacao'` ou `'divisao'`.

A função deve retornar o resultado da operação especificada entre `num1` e `num2`. Se a operação não for reconhecida, a função deve retornar uma mensagem de erro.

**Instruções adicionais:**
- Verifique se `num1` e `num2` são números.
- Imprima uma mensagem de erro no console se os parâmetros não forem válidos.
- Exemplo de mensagem de erro: `"Operação inválida. Por favor, escolha entre 'soma', 'subtracao', 'multiplicacao' ou 'divisao'."`

**Código exemplo:**
```javascript
function calculadora(num1, num2, operacao) {
    // Sua implementação aqui
}
```

### Desafio 2: Formatação de Nome

**Enunciado:**

Crie uma função chamada `formatarNome` que aceita um parâmetro `nomeCompleto` (uma string contendo o nome completo de uma pessoa no formato `"primeiro nome segundo nome"`). A função deve retornar uma string formatada no formato `"Sobrenome, Primeiro Nome"`. Se o nome fornecido não contiver pelo menos um espaço, retorne uma mensagem de erro.

**Instruções adicionais:**
- Se o `nomeCompleto` contiver apenas um nome, retorne `"Nome inválido. Por favor, forneça um nome completo."`.
- Use a função `trim()` para remover espaços extras antes e depois do nome.
- Exemplo de saída: `"Silva, João"`

**Código exemplo:**
```javascript
function formatarNome(nomeCompleto) {
    // Sua implementação aqui
}
```

### Desafio 3: Contagem de Palavras

**Enunciado:**

Desenvolva uma função chamada `contarPalavras` que recebe uma string `texto` e retorna o número total de palavras na string. Considere que palavras são separadas por espaços e ignore espaços extras no início e no final da string. Se a string estiver vazia, retorne `0`.

**Instruções adicionais:**
- Utilize métodos de string como `trim()` e `split()`.
- Imprima no console a quantidade de palavras encontrada.
- Exemplo: `"Olá mundo, como você está?"` deve retornar `5`.

**Código exemplo:**
```javascript
function contarPalavras(texto) {
    // Sua implementação aqui
}
```

### Desafio 4: Lista de Tarefas

**Enunciado:**

Crie uma função chamada `criarLista` que recebe um array de strings, onde cada string é uma tarefa a ser realizada. A função deve gerar uma lista numerada de tarefas, no formato:

```
1. Tarefa 1
2. Tarefa 2
3. Tarefa 3
...
```

Se o array estiver vazio, retorne `"Nenhuma tarefa disponível."`. Imprima a lista no console, com cada tarefa em uma linha.

**Instruções adicionais:**
- Utilize um loop para gerar a lista numerada.
- Certifique-se de que a lista gerada seja legível e bem formatada.
- Exemplo: `["Comprar leite", "Lavar a roupa"]` deve imprimir:

```
1. Comprar leite
2. Lavar a roupa
```

**Código exemplo:**
```javascript
function criarLista(tarefas) {
    // Sua implementação aqui
}
```

### Desafio 5: Gerador de Senhas

**Enunciado:**

* Crie uma função que gere senhas aleatórias de um determinado comprimento.
* A função deve receber o comprimento da senha como parâmetro e retornar uma string com caracteres aleatórios (letras maiúsculas, minúsculas e números).
* Implemente uma interface no terminal que peça ao usuário o comprimento desejado e exiba a senha gerada.
* **Desafio extra:** Permita que o usuário escolha quais tipos de caracteres devem ser incluídos na senha (letras, números, caracteres especiais).

**Exemplo de saída:**

```
Digite o comprimento da senha: 12

Senha gerada: aB1c2d3E4f5
```

### Desafio 6: Jogo da Adivinhação

**Enunciado:**

* Crie uma função que gere um número aleatório entre 1 e 100.
* Crie outra função que permita ao usuário adivinhar o número.
* A cada tentativa, a função deve informar se o número é maior ou menor que o palpite.
* O jogo termina quando o usuário acertar o número.
* **Desafio extra:** Limite o número de tentativas e mostre uma mensagem de derrota caso o usuário não consiga adivinhar.

**Exemplo de saída:**

```
Adivinhe o número entre 1 e 100: 50
O número é menor.

Adivinhe o número entre 1 e 100: 25
O número é maior.

Adivinhe o número entre 1 e 100: 37
Parabéns! Você acertou!
```
