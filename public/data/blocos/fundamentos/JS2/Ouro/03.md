Transformar vetor de tuplas em um objeto
Crie uma função parseTuplesToObject, que recebe como argumento um vetor de tuplas tuples.

A tupla é uma estrutura de dados que se apresenta no JavaScript como um vetor de duas posições. As tuplas podem ser utilizadas para representar pares ordenados (x e y, respectivamente, como [10, 9]), coordenadas geográficas (latitude e longitude, respectivamente, como [38.8951, -77.0364]), números associados a sua versão em extenso ([2, 'dois']) etc.

Exemplo
Para a função parseTuplesToObject, você vai receber um vetor de tuplas, com a seguinte estrutura:

[
["um", 1],
["dois", 2],
["vinte", 20],
["cinco", 5],
["tres", 3],
//...
]
E precisa retornar um objeto com a seguinte estrutura:

{
"um": 1,
"dois": 2,
"vinte": 20,
"cinco": 5,
"tres": 3,
}
