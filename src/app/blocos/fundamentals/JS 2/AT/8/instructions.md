Questão 8: Implementar a função calcula(numA, operacao, numB)
Utilize o arquivo script.js para solucionar essa questão.

Implemente a função calcula(numA, operacao, numB). Assuma que os argumentos numA e numB sempre serão do tipo number (não é necessário validar).

Já o argumento operacao, deve ser igual a "+", "-", "\*" ou "/". Ou seja, string. Caso operacao seja diferente desses valores, sua função deve ser imediatamente finalizada RETORNANDO NaN.

Assumindo que a função passe pela validação, sua função deve RETONAR o resultado da operação matemática passada como parâmetro, utilizando numA e numB como números.

Se a função não RETORNAR, a questão será considerada como errada.

Resultado esperado
const teste1 = calcula(10, '+', 2); // 12
const teste2 = calcula(10, '-', 2); // 8
const teste3 = calcula(10, '\*', 2); // 20
const teste4 = calcula(10, '/', 2); // 5
const teste5 = calcula(10, 'doritos', 2) // NaN
