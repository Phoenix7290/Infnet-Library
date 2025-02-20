Questão 13: Função divide disparando erro
Utilize o arquivo script.js para solucionar essa questão.

Implemente uma função chamada divide(numA, numB). Essa função deve RETORNAR a divisão de numA por numB. No entanto, você deve validar os parâmetros e disparar erros para as seguintes situações.

Se numA OU numB não forem do tipo number, disparar o erro InvalidNumberError;
Se numA OU numB forem NaN, disparar o erro InvalidNumberError;
Se numA OU numB forem iguais a 0, disparar o erro ZeroDivisionError.
Para criar os erros, basta utilizar o seguinte trecho de código:

class InvalidNumberError extends Error {}
class ZeroDivisionError extends Error {}
Para disparar um erro, basta utilizar a seguinte sintáxe:

throw new ZeroDivisionError('Aqui vai uma mensagem descritiva do erro');
Não precisa utilizar try / catch, somente disparar o erro com throw.
