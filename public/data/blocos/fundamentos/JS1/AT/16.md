Função que retorna a data formatada
Utilize o arquivo script.js para solucionar essa questão.
Utilize toLocaleDateString para solucionar essa questão
Crie uma função chamada getDataFormatada, que deve receber como parâmetro dia (number), mes (number) e ano (number). A função deve retornar a data como uma string formatada de acordo com o idioma do navegador.

Crie três testes como parâmetros diferentes para demonstrar o funcionamento da função.

Exemplo
const dataFormatada = getDataFormatada(5, 10, 2022);
// Mostra '05/10/2022' (DD/MM/AAAA) se o navegador estiver em português
// Ou, mostra '10/5/2022' (MM/DD/AAAA) se o navegador estiver em inglês
console.log(dataFormatada);
