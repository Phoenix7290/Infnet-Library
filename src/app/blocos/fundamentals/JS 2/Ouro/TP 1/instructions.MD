Calcular frequências das palavras
Implemente uma função wordCount, que recebe como parâmetro uma string text. Essa função deve retornar um objeto, onde as chaves são as palavras do texto e o conteúdo é a quantidade de vezes que a palavra foi repetida. Você também deve aplicar um pré-processamento nesse texto, que consiste em realizar as seguintes modificações ANTES de calcular as frequências das palavras:

Transformar todas as letras em minúsculas;
Remover acentos (utilizar o método normalize("NFD")), de modo que cabeça torne-se cabeca e área torne-se area, etc.
Remover pontuação do texto (com o método replace(/[^a-zA-Z0-9\s]/g, ""))
Mas não se preocupe! Esse pré-processamento já foi implementado no arquivo script.js, de modo que você precisa se preocupar somente com a construção do objeto com as frequências das palavras.

Vale utilizar qualquer coisa: for, while, map, reduce...

Exemplo
const text = `Esse texto é um teste. Teste é esse texto, pois preciso testar o teste que testa o texto.`;
const wordCountObj = wordCount(text);
console.log(wordCountObj);
/_ Deve mostrar o seguinte objeto no console:
{
"esse": 2,
"texto": 3,
"e": 2,
"um": 1,
"teste": 3,
"pois": 1,
"preciso": 1,
"testar": 1,
"o": 2,
"que": 1,
"testa": 1
}
_/
