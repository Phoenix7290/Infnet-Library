riangulo de Pascal
Crie uma função computePascalTriangle, que recebe como parâmetro um número rows, que é a quantidade de linhas do Triangulo de Pascal que devem ser computadas.

O Triangulo de Pascal possui a seguinte estrutura (que é infinita, essas são apenas as sete primeiras linhas):

[image](tp5-1.png)

Você deve implementá-lo conforme a animação a seguir:

[image](tp5-2.gif)

Por exemplo, se rows é igual a 4, seu programa deve computar as quatro primeiras linhas do Triangulo de Pascal, que seriam:

    1

1 1
1 2 1
1 3 3 1
1 4 6 4 1
Assumindo o exemplo acima, faça com que a função computePascalTriangle retorne o seguinte resultado (um vetor de vetores de números):

[
[1],
[1, 1],
[1, 2, 1],
[1, 3, 3, 1],
[1, 4, 6, 4, 1]
]
