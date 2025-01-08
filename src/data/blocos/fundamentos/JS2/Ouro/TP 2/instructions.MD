Extrair números da string
Crie uma função extractNumbers, que recebe como parâmetro uma string text. Essa função deve retornar um vetor com todas os números em extenso presentes no texto. Você também deve aplicar um pré-processamento nesse texto, que consiste em realizar as seguintes modificações ANTES de calcular as frequências das palavras:

Transformar todas as letras em minúsculas;
Remover acentos (utilizar o método normalize("NFD")), de modo que cabeça torne-se cabeca e área torne-se area, etc.
Remover pontuação do texto (com o método replace(/[^a-zA-Z0-9\s]/g, ""))
Mas não se preocupe! Esse pré-processamento já foi implementado no arquivo script.js, de modo que você precisa se preocupar somente com a construção do vetor com os números.

Vale utilizar qualquer coisa: for, while, map, filter... CONSIDERE SOMENTE OS SEGUINTES NÚMEROS: um, dois, tres, quatro, cinco, seis, sete, oito e nove.

Exemplo
const text = `Um, dois, três indiozinhos... Cinco patinhos foram passear...`
const numbersArr = extractNumbers(text);
/_ Deve mostrar o seguinte vetor no console:
[1, 2, 3, 5]
_/
