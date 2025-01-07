Implementar Bubble Sort
Implemente uma função bubbleSortNumbers, que recebe como parâmetro um vetor de números numbers. Essa função deve ordenar os números e retorná-los em ordem crescente, da seguinte forma.

const sortedNumbers = bubbleSortNumbers([1, 4, 5, 20, 1]);
console.log(sortedNumers);
/_ Deve mostrar no console o seguinte vetor:
[1, 1, 4, 5, 20]
_/
Sua função deve implementar o algoritmo bubble sort (ver esse link da Wikipédia), conforme a animação abaixo:

[image](tp4.webp)

Ou seja, você deve implementar os seguintes passos:

Comece no início do vetor;
Compare o primeiro valor no vetor com o próximo. Se o primeiro valor for maior, troque as posições dos dois valores;
Mover para o segundo valor no vetor. Novamente compare esse valor com o próximo e troque se o valor for maior;
Continue até que não haja mais valores para comparar;
Volte para o início do vetor.
Cada passagem pela lista, do início ao fim, é conhecida como iteração. O algoritmo continua até que seja feita uma iteração em que nenhum valor tenha sido trocado. Neste ponto, sua função deve retornar o vetor ordenado.

NÃO É PERMITIDO UTILIZAR A FUNÇÃO sort!
