Questão 14: Divisão com tratamento de erros
Utilize o arquivo script.js para solucionar essa questão.

Copie o código desenvolvido no AT 13. Agora, utilize try / catch para realizar o tratamento dos erros.

Para tanto, receba dois números via prompt, que serão os argumentos numA e numB. Depois, dentro de um bloco try, você deve executar a função divide passando os argumentos.

Caso a função dispare um erro, você deve tratá-lo no bloco catch, de modo a exibir a mensagem de erro em um alert.

Por fim, se não houve nenhum erro, mostre o resultado da divisão através de um alert.

Dicas
Para pegar um erro que foi disparado, utilize a seguinte lógica:

try {
// O código que PODE disparar o erro vai aqui
} catch (error) {
if(error instanceof ZeroDivisionError) {
// Em message vai estar a string que é a descrição do erro.
alert(error.message);
}
}
