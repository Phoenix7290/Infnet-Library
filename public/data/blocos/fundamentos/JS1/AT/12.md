AT 12 - Pedra, papel, tesoura, lagarto, Spock
UTILIZE SOMENTE O ARQUIVO script.js para RESOLVER ESSA QUESTÃO

Implemente o jogo "pedra, papel, tesoura, lagarto, Spock" citado pela personagem Sheldon Cooper, em episódio da série The Big Bang Theory. O jogo possui o seguinte funcionamento:

[pedrapapel](1.png)

De modo que:

[image](2.jpeg)

Ou seja, é basicamente um pedra, papel e tesoura com duas opções a mais!

Você pode utilizar switch / case, ternários ou if / else para realizar essa implementação.

Assuma que são dois jogadores, então você deve solicitar via prompt a jogada do jogadorA e a jogada do jogadorB, que devem escolher entre "pedra", "papel", "tesoura", "lagarto" e "spock". Caso algum jogador tenha digitado uma escolha inválida, o programa deve ser finalizado imediatamente informando o erro.

Por fim, o programa deve mostrar quem venceu o jogo com uma mensagem nesse estilo: O jogador A venceu! Spock vaporiza a pedra.

Dica
const jogadorA = 'spock';
const jogadorB = 'pedra';
if(jogadorA === 'spock' && jogadorB === 'pedra') {
alert('O jogador A venceu! Spock vaporiza a pedra.');
} else if (jogadorA === 'pedra' && jogadorB === 'spock') {
alert('O jogador B venceu! Spock vaporiza a pedra.');
}
