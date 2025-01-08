Teste de Performance 3
Exercício 11
CONTEXTO
Evento drag
O evento drag ocorre quando um elemento, é arrastado pelo usuário. Ele é disparado no elemento que está sendo arrastado. Para habilitar o arrastar de um elemento, é necessário definir o atributo draggable, como true para esse elemento. Além disso, é necessário adicionar um ouvinte de evento, para o evento dragstart no elemento arrastado, que define os dados a serem transferidos durante o arrastar, utilizando o método setData do objeto dataTransfer

Evento drop
O evento drop ocorre quando um elemento arrastado, é solto em um alvo válido. Ele é disparado no elemento de destino, onde o elemento arrastado está sendo solto. Para permitir que um elemento seja solto em um alvo, é necessário adicionar um ouvinte de evento, para o evento dragover no elemento de destino e, dentro desse ouvinte, chamar o método preventDefault() para permitir que o elemento seja solto. Além disso, é necessário adicionar um ouvinte de evento para o evento drop no elemento de destino, onde a lógica para manipular os dados transferidos é implementada.

ENUNCIADO
No arquivo script.js, siga as etapas abaixo:

Crie um programa, que permita:

Permitir mover os elementos div de classe caixinha para os elementos <div class = 'container'>
Permitir arrastar os elementos div de classe caixinha entre os elementos <div class = 'container'>
OBSERVAÇÕES
Faça as modificações necessárias no arquivo index.html
Crie as funções para controle do drag/drop
