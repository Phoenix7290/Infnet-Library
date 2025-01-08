Questão 15: Solicitar nome e sobrenome com tratamento de erros
Faça um programa que solicite o nome e sobrenome do usuário via prompt, guarde essas strings em variáveis chamadas nome e sobrenome, respectivamente.

Após, crie uma função chamada getNomeCompleto, que deve receber os argumentos nome e sobrenome. Essa função deve retornar o nome e sobrenome concatenados, mas deve disparar erros nas seguintes circunstâncias:

Se nome possuir menos do que dois caracteres (NameToShortError);
Se nome possuir mais do que quinze caracteres (NameToLongError);
Se sobrenome possuir menos do que três caracteres (SurnameToShortError);
Se sobrenome possuir mais do que vinte caracteres (SurnameToLongError);
Após, DO LADO DE FORA DA FUNÇÃO, implemente o tratamento de erros (try / catch), de modo a exibir para o usuário as seguintes mensagens de erro:

"O nome precisa ter pelo menos dois caracteres";
"O nome só pode ter até quinze caracteres";
"O sobrenome precisa ter pelo menos três caracteres";
"O sobrenome só pode ter até vinte caracteres";
Por fim, faça com que o programa solicite novamente nome e sobrenome caso algum erro tenha ocorrido (utilize while ou equivalente para tanto).

Se nenhum erro ocorrer, finalize o programa mostrando o nome completo do usuário.
