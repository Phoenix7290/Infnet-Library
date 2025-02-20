Questão 16: Controlando o seu chakra
Utilize o arquivo script.js para solucionar essa questão.

Você é um ninja e está treinando subir em árvores sem usar as mãos. Para tanto, você deve liberar uma fina camada de chakra na sola dos pés e correr pelo tronco da árvore até chegar na copa.

No entanto, a tarefa é mais difícil do que parece! Se você liberar pouco chakra, seus pés não irão aderir ("grudar") na árvore e você vai cair. Já se liberar muito chakra, vai quebrar a casca da árvore e também vai cair.

O que você precisa é liberar chakra o suficiente para aderir à árvore. O que é muito difícil!

Entenda que a intensidade do chakra pode ser representado como um número inteiro entre 0 e 10. Sendo 0 nada de chakra e 10 o máximo de chakra que você consegue liberar na sola dos pés.

Para subir na árvore sem problemas, você precisa se manter o mais próximo possível do meio, que é o número 5. Quanto mais você se afasta desse número, maior é a chance de cair, conforme a descrição abaixo:

0 - 50%
1 - 25%
2 - 15%
3 - 10%
4 - 5%
5 - 0%
6 - 5%
7 - 10%
8 - 15%
9 - 25%
10 - 50%
No caso, se a liberação de chakra for 5, você terá 0% de chances de cair; caso seja 2, 15% de chance de cair; e assim por diante.

Para subir até a copa da árvore, você precisa dar 10 passos sem cair! Se você cair por liberar pouco chakra (menos do que 5, no caso), o que acontece é um InsufficientChakraError; agora, se liberar muito chakra (mais do que 5, no caso), o que acontece é um TooMuchChakraError.

Implementação
Faça uma função que retorna um número inteiro entre 0-10 (contando o 0 e o 10);
Utilizando, essa função, preencha um vetor com dez números aleatórios. Esses são os "passos";
Depois, você deve iterar o vetor e, para cada número, você deve considerar as chances de cair conforme explicado acima;
Ou seja, se o número é o 1, deve haver 25% de chance de ocorrer um InsufficientChakraError; se o número for 8, deve haver 15% de chance de ocorrer um TooMuchChakraError; por fim, se for o número 5, não há chance do erro acontecer;
Se não houver erro em nenhum dos 10 passos, o programa deve ser finalizado com um alert informando: "Parabéns! Você conseguiu chegar a copa da árvore!";
No entanto, caso tenha ocorrido um erro por FALTA DE CHAKRA (InsufficientChakraError), o programa deve ser finalizado com um alert informando: "Ops! Você caiu no passo X por usar pouco chakra!" (sendo X o passo em que o ninja errou);
Por fim, caso tenha ocorrido um erro por EXCESSO DE CHAKRA (TooMuchChakraError), o programa deve ser finalizado com um alert informando: "Ops! Você caiu no passo X por usar muito chakra!" (sendo X o passo em que o ninja errou);
Dicas
Para criar os erros, utilize o seguinte trecho de código:

class InsufficientChakraError extends Error {}
class TooMuchChakraError extends Error {}
Para disparar um erro, utilize a seguinte sintaxe:

throw new InsufficientChakraError('Descrição do erro aqui')
Para pegar um erro que foi disparado, utilize a seguinte lógica:

try {
// O código que PODE disparar o erro vai aqui
} catch (error) {
if(error instanceof InsufficientChakraError) {
// Em message vai estar a string que é a descrição do erro.
alert(error.message);
}
}
