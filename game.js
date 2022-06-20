// The game will be here

/* REGRAS

1 - Tabuleiro com 9 espaços em uma grelha 3X3

2 - 2 jogadores um X e outro O

3 - o primeiro a completar 3 em linha ganha */

// REGRA 1 //

/* Será criado um array multidimensional composto por 3 arrays. 
   Cada array equivalerá a uma linha da grelha */

// REGRA 2 //

/* Cada jogada é intercalada (começa o jogador 1 e de seguida joga o jogador 2).
   Sempre que um jogador clicar sobre um quadrado em branco, esse quadrado deverá ficar marcado com 
   um símbolo (X ou O). Se esse espaço já estiver preenchido, o programa não deverá fazer nada.
   O primeiro click é o jogador 1 (impar) e o segundo click é o jogador 2 (par). */

//  REGRA 3 //

/* O jogo termina nas seguintes condições:
   1 - Quando qualquer um dos jogadores preenche os 3 quadrados (com X ou O) em qualquer uma das direcções;
   2 - Quando todos os quadrados são preenchidos sem os 3 símbolos (X ou O) em simultâneo;
   3 - Quando é accionado o botão "reset"; /*