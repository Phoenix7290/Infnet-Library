Questão 6: Selecionar os números cujo antecessor seja par
Utilize o arquivo script.js para solucionar essa questão.

Assuma o seguinte vetor de números:

const numeros = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];
UTILIZANDO FOR, faça um programa que selecione os números cujo seu antecessor seja um número par.

Por exemplo, o número 10, seu antecessor é 2 que é par; logo, o número 10 deve ser selecionado. Já o número 4, possui 3 como antecessor (ímpar), e, portanto, não deve ser selecionado.

Guarde os números selecionados em um vetor chamado numerosSelecionados e mostre-o no console do navegador.

Dicas
Você pode ignorar o primeiro número do vetor (2), pois não possui antecessor.

Para pegar o antecessor, você pode simplesmente pegar o índice atual do for e subtrair (numeros[index - 1])

Resultado esperado
Os números selecionados devem ser os seguintes:

[10, 3, 5, 20, 8, 9, 30, 11, 6, 13, 2, 15]
